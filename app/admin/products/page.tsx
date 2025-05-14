'use client'
import products from '@/app/mock/products.json'
import { useId, useState } from "react";
import CreateProductModal from "./components/CreateProductModal";
import { ProductDisplay } from './components/ProductDisplay';
import { Plus, Search } from 'lucide-react';
import { Button } from '@/app/ui/Button';

export default function AdminProductsPage () {
  const [createProduct, setCreateProduct] = useState(false)
  const searchBarId = useId()

  return (
      <>
        <header className="">
          <h1 className="text-3xl tracking-tight font-semibold">Products page</h1>
          <div className="flex flex-col md:flex-row justify-between gap-2 mt-4">
            <label htmlFor={searchBarId} className="flex items-center basis-full bg-white rounded-md border-2">
              <div className="p-2 bg-backgroundSecondary rounded-sm text-white"><Search/></div>
              <input id={searchBarId} placeholder="Search product" className="w-full h-ful p-1 outline-none" type="search" />
            </label> 
            <Button className="flex items-center self-end gap-2"><span className="md:hidden xl:inline text-nowrap">Add product</span> <Plus/></Button>
          </div>
        </header>
          <hr className="my-4"/>
        <section className="">
          <ul className="grid grid-cols-auto-fit-14 gap-3">
            {products.map((product, index) => {
                return (
                  <li key={index}>
                    <ProductDisplay name={product.name} description={product.description} images={product.images}/>
                  </li>
                )
            })} 
            <li>
            </li>

          </ul>
          <CreateProductModal active={createProduct} onClose={() => {setCreateProduct(false)}}/>
        </section>
      </>
  )
}