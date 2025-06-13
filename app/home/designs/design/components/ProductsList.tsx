'use client'
import Link from "next/link"
import { AppProduct } from "../../types"
import { Product } from "../../components/Product"

interface ProductsListProps {
  products: AppProduct[] 
} 

export function ProductsList ({products}:ProductsListProps){
  return(
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:grid-cols-4 xl:grid-cols-5 px-10 auto-rows-[20rem]">
        {
          products.map(product => {
            return (
              <li key={product.name}>
                <Link href={`/home/designs/design?id=${product.id}`}>
                  <Product name={product.name} description={product.description} imageSrc={product.images[0]} />
                </Link>
              </li>
            )
          })
        }
      </ul>
 
  )
}