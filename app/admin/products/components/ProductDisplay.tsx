'use client'
import { Button } from "@/app/ui/Button"
import clsx from "clsx"
import { ChevronLeftCircle, ChevronRightCircle, Pen, Trash2 } from "lucide-react"
import { useState } from "react"

interface ProductDisplayProps {
 name: string 
 description: string
 images: string[]
} 

export function ProductDisplay ({name, description, images}:ProductDisplayProps){

  const [image, setImage] = useState(0) 

  const nextImageVariants = {
    "opacity-40": (image + 1) >= images.length,
    "opacity-100": (image + 1) < images.length,
    "absolute top-1/2 right-2": true
  }

  const previousImageVariants = {
    "opacity-40": (image - 1) < 0,
    "opacity-100": (image - 1) >= 0,
    "absolute top-1/2 left-2" : true
  }

  return(
    <>
      <article className="flex flex-col gap-2 h-full group">
        <figure className="bg-white p-2 group relative h-[200px]">
            <img 
              height={400} 
              width={400} 
              loading="lazy" 
              className="object-contain w-full h-full" 
              alt={`Image ${image + 1} of product ${name}`} 
              src={images[image]} 
            />
            <button 
              className={clsx(previousImageVariants)} 
              disabled={image - 1 < 0}
              onClick={() => {
                setImage(image - 1)
              }}
            >
              <ChevronLeftCircle/>
            </button>
            <button 
              className={clsx(nextImageVariants)} 
              disabled={image + 1 >= images.length}
              onClick={() => {
                setImage(image + 1)
              }}
            >
              <ChevronRightCircle/>
            </button>

          
          
        </figure>
        <main className="">
          <span className="font-bold tracking-tighter">{name}</span>
          <p className="text-ellipsis overflow-hidden h-28">{description}</p>
        </main>
        <hr className="mt-auto" />
        <footer className="opacity-0 overflow-hidden group-hover:opacity-100 transition-all flex justify-between items-center">
          <Button variant="secondary" className="flex justify-between">Delete <Trash2/></Button>
          <Button className="flex justify-between">Edit <Pen/></Button>
        </footer>
      </article>
    </>
  )
}