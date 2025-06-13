'use client'
import Link from 'next/link'
import { Product } from '@/app/home/designs/components/Product'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { builder } from '@builder.io/sdk'
import { AppProduct, BuilderProduct, builderProductToAppProduct } from '../../types'


interface ProductsSugestionsListProps {
  className?: string
}

export function ProductsSugestionsList({ className = "" }: ProductsSugestionsListProps) {

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [otherProducts, setOtherProducts] = useState<AppProduct[]>([])


  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
  useEffect(() => {
    builder.getAll('products', {query: {id: {$ne: id}}, limit: 3})
    .then(response => {
      if (!response || response.length === 0) {
        setOtherProducts([])
        return 
      }

      const bulderProducts = response.map(product => ({...product.data, id: product.id})) as BuilderProduct[]
      setOtherProducts(bulderProducts.map((builderProduct) => builderProductToAppProduct(builderProduct)))
    })
  }, [id])

  return (
    <ul className={className}>

      {otherProducts.map(otherProduct => {
        return (
          <li key={otherProduct.id} className="w-40">
            <Link href={`/home/designs/design?id=${otherProduct.id}&image=0`}>
              <Product name={otherProduct.name} description={otherProduct.description} imageSrc={otherProduct.images[0]} />
            </Link>
          </li>
        )
      })}


    </ul>
  )
}