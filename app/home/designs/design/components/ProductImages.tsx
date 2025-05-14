'use client'

import clsx from "clsx"
import Image from "next/image"
import React, { useEffect } from "react"
import products from '@/app/mock/products.json'
import { notFound, usePathname, useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"



interface ProductImagesProps {
  className?: string

}

const searchParamImage = 'image'


export function ProductImages({ className }: ProductImagesProps) {

  const searchParams = useSearchParams()
  const currentImage = Number(searchParams.get(searchParamImage))
  const id = Number(searchParams.get('id'))
  const { replace, refresh } = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    replace(`${pathname}?id=${id}&image=0`)
  }, [])

  const handleSetImage = (imageIndex: number) => {
    const params = new URLSearchParams(searchParams)

    if (!imageIndex) {
      params.set(searchParamImage, '0')
    } else {
      params.set(searchParamImage, imageIndex.toString())
    }

    replace(`${pathname}?${params}`,
      {
        scroll: false
      }
    )

  }
  if (isNaN(currentImage)) {
    refresh()
  }

  const product = products.find(product => product.id === id)

  if (!product) {
    return notFound()
  }
  return (
    <section className={className}>
      <figure className="bg-white p-2 aspect-square col-start-1 row-start-1 col-end-4 row-end-4 ">
        <React.Suspense
          fallback={
            <div className="bg-white"></div>
          }
        >
          <Image
            className="w-full h-full object-contain"
            width={800}
            height={800}
            src={product.images[currentImage]}
            alt="boot"
          />
        </React.Suspense>
      </figure >

      <div className="flex gap-4 col-start-1 col-end-4 row-start-4 row-end-5 overflow-hidden">
        {product.images.map((image, index) => {
          return (
            <figure
              key={image}
              className={
                clsx(
                  "basis-1/3 bg-white p-2 aspect-square",
                  { "border-2 bg-backgroundSecondary": currentImage == index }
                )
              }
              onClick={
                () => {
                  handleSetImage(index)
                }
              }
            >
              <Image
                className="object-contain w-full h-full"
                width={800}
                height={800}
                src={image}
                alt="boot"
              />
            </figure>

          )
        })}
      </div>
    </section>
  )
}