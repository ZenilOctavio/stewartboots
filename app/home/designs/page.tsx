import React from "react"
import { builder } from "@builder.io/sdk"
import { BuilderCategory, BuilderProduct, builderProductToAppProduct } from "./types"
import { CategoriesList } from "./design/components/CategoriesList"
import { Products } from "./design/components/Products"


export const dynamic = 'force-dynamic'
export default async function ProductsPage() {

  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

  const categoryResponse = (await builder.getAll('category'))
  const builderCategories = categoryResponse.map(catResponse => ({...catResponse.data, id: catResponse.id})) as BuilderCategory[]

  const productResponse = await builder.getAll('products')
  const builderProducts = productResponse.map((builderResponse) => ({...builderResponse.data, id: builderResponse.id}) as BuilderProduct)

  const products = builderProducts.map((builderProduct) => builderProductToAppProduct(builderProduct))

  return (
    <div
      className="pt-24 w-full py-16 px-4 md:px-6 md:grid grid-cols-[20%_80%] gap-8  "
    >
      <section className="flex flex-col gap-2 md:gap-4 md:pl-6 border-r border-primary">
        <h1 className="font-roboto font-bold text-lg text-center md:text-left">CATEGORIES</h1>
        <React.Suspense fallback={<div>Loading...</div>}>
          <CategoriesList categories={builderCategories}/> 
        </React.Suspense>
      </section>
      <section className="">
        <main>
          <React.Suspense fallback={<div>Loading...</div>}>
            <Products products={products} categories={builderCategories}/>
          </React.Suspense>

        </main>
      </section>
    </div>
  )
}