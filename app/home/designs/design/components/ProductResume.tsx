'use client'

import { contactDictionary } from "@/app/home/constants";
import { Button } from "@/app/ui/Button";
import { Phone } from "lucide-react";
import { notFound, useSearchParams } from "next/navigation";
import products from '@/app/mock/products.json'
import Link from "next/link";


interface ProductResumeProps {
  className?: string
}

export function ProductResume({ className = "" }: ProductResumeProps) {
  const searchParams = useSearchParams()
  const id = Number(searchParams.get('id'))
  const product = products.find(product => product.id == id)

  if (!product) {
    return notFound()
  }

  return (
    <section className={className}>
      <h1 className="font-bold text-3xl tracking-widest">{product.name}</h1>
      <span >
        <h2 className="font-roboto tracking-wide">DESCRIPTION</h2>
        <p className="text-sm font-light">
          {product.description}
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