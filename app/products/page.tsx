import Link from "next/link"
import { Product } from "./components/Product"
import products from '@/app/mock/products.json'
import { ChevronLeft, ChevronRight } from "lucide-react"
import { NavigationButton } from "./components/NavigationButton"
import { redirect } from "next/navigation"

export default function ProductsPage() {

  redirect('/')

  return (
    <div
      className="pt-10 w-full py-16 px-4 md:px-6 md:grid grid-cols-[20%_80%] gap-8  "
    >
      <section className="flex flex-col gap-2 md:gap-4 md:pl-6">
        <h1 className="font-roboto font-bold text-lg text-center md:text-left">CATEGORIES</h1>
        <ul className="flex md:flex-col gap-2">
          <li className="text-sm font-semibold"><Link href="/products">Men&apos;s Shoes</Link></li>
        </ul>
      </section>
      <section className="">
        <main>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-5 px-10">
            {
              products.map(product => {
                return (
                  <li key={product.name}>
                    <Link href={`/products/product?id=${product.id}`}>
                      <Product name={product.name} description={product.description} imageSrc={product.images[0]} />
                    </Link>
                  </li>
                )
              })
            }
          </ul>
          <footer className="flex mt-3 justify-between items-center px-10">
            <div className="flex items-center gap-2">
              <NavigationButton className="basis-1/4" variant="disabled"><ChevronLeft /></NavigationButton>
              <NavigationButton className="basis-1/4" variant="default">01</NavigationButton>
              <NavigationButton className="basis-1/4" variant="disabled"><ChevronRight /></NavigationButton>
            </div>
            <div>
              <span className="font-light">SHOWING 1 - {products.length} OF {products.length} RESULTS</span>
            </div>
          </footer>
        </main>
      </section>
    </div>
  )
}