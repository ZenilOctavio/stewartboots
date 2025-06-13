'use client'

import { contactDictionary } from "@/app/home/constants";
import { Button } from "@/app/ui/Button";
import { Phone } from "lucide-react";
import { notFound, useSearchParams } from "next/navigation";
import Link from "next/link";
import { builder } from "@builder.io/sdk";
import { useEffect, useState } from "react";
import { AppProduct, BuilderProduct, builderProductToAppProduct } from "../../types";


interface ProductResumeProps {
  className?: string
}

export function ProductResume({ className = "" }: ProductResumeProps) {

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  const [product, setProduct] = useState<AppProduct | null>(null)
  const [loading, setLoading] = useState(true)


  builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);
  useEffect(() => {
    setLoading(true)

    if (!id) return
    builder.get('products', {query: {id: id}})
    .then(response => {
      if (!response) {
        setProduct(null)
        setLoading(false)
        return 
      }
      const productData = {...response.data, id: response.id} as BuilderProduct
      const product = builderProductToAppProduct(productData)
      setProduct(product)
      setLoading(false)
    })
  }, [id])
  

  if (!id && !loading) {
    return notFound()
  }

  if (!product && !loading){
    return notFound()
  }


  return (
    <section className={className}>
      <h1 className="font-bold text-3xl tracking-widest">{product?.name}</h1>
      <span >
        <h2 className="font-roboto tracking-wide">DESCRIPTION</h2>
        <p className="text-sm font-light">
          {product?.description}
        </p>
      </span>
      <Link className="mt-16 underline font-light text-sm" href="/about/foot-conditions">If you want to read the full list of conditions we treat, click here.</Link>
      <a href={contactDictionary.phone.data} type="tel">
        <Button
          className="font-normal flex items-center gap-2"
          trailingIcon={<Phone />}
        >
          Ask how specialized footwear can eliminate your footpain
        </Button>
      </a>
    </section>
  )
}