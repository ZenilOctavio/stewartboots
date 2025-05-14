'use client'
import products from '@/app/mock/products.json'
import Link from 'next/link'
import { Product } from '@/app/home/designs/components/Product'
import { useSearchParams } from 'next/navigation'


interface ProductsSugestionsListProps {
  className?: string
}

export function ProductsSugestionsList({ className = "" }: ProductsSugestionsListProps) {

  const searchParams = useSearchParams()
  const id = Number(searchParams.get('id'))
  const otherProducts = products.filter(product => product.id !== id).slice(0, 3)

  return (
    <ul className={className}>

      {otherProducts.map(otherProduct => {
        return (
          <li key={otherProduct.id} className="w-40">
            <Link href={`/designs/design?id=${otherProduct.id}&image=0`}>
              <Product name={otherProduct.name} description={otherProduct.description} imageSrc={otherProduct.images[0]} />
            </Link>
          </li>
        )
      })}


    </ul>
  )
}