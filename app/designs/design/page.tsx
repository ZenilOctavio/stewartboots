'use client'

import { contactDictionary } from "@/app/home/constants";
import { Button } from "@/app/ui/Button";
import { Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Product } from "../components/Product";
import products from '@/app/mock/products.json'
import { useEffect } from "react";
import { notFound, usePathname, useRouter, useSearchParams } from 'next/navigation'
import clsx from "clsx";


const searchParamImage = 'image'

export default function ProductPage() {


  const searchParams = useSearchParams()
  const { replace, refresh } = useRouter()
  const pathname = usePathname()
  const id = Number(searchParams.get('id'))
  const currentImage = Number(searchParams.get(searchParamImage))

  const otherProducts = products.filter(product => product.id !== id).slice(0, 3)



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

    replace(`${pathname}?${params.toString()}`, {
      scroll: false
    })

  }

  if (!id) {
    return notFound()
  }

  if (isNaN(id)) {
    return notFound()
  }
  if (isNaN(currentImage)) {
    refresh()
  }

  const product = products.find(product => product.id === id)

  if (!product) {
    return notFound()
  }



  return (
    <div className="flex flex-col-reverse lg:flex-row p-8 gap-10 pt-24">
      <section className="basis-1/3 grid grid-cols-3 grid-rows-4 gap-4">
        <figure className="bg-white p-2 aspect-square col-start-1 row-start-1 col-end-4 row-end-4 ">
          <Image
            className="w-full h-full object-contain"
            width={800}
            height={800}
            src={product.images[currentImage]}
            alt="boot"
          />
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
                    console.log('hello')
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

      <main className="basis-3/5 flex flex-col gap-5">
        <section className="flex flex-col gap-3">
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
        <footer className="mt-auto" >
          <h2 className="font-roboto tracking-wide">OTHER PRODUCTS</h2>
          <ul className="flex mt-4">
            {otherProducts.map(otherProduct => {
              return (
                <li key={otherProduct.id} className="w-40">
                  <Link href={`/products/product?id=${otherProduct.id}`}>
                    <Product name={otherProduct.name} description={otherProduct.description} imageSrc={otherProduct.images[0]} />
                  </Link>
                </li>
              )
            })}


          </ul>
        </footer>
      </main>


    </div>
  )
}