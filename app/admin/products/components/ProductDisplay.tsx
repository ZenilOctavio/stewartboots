'use client'
import { Button } from "@/app/ui/Button"
import clsx from "clsx"
import { ChevronLeftCircle, ChevronRightCircle, ImageIcon, Pen, Trash2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

interface ProductDisplayProps {
  onEdit: () => void
  onDelete: () => void
  name: string
  description: string
  images: string[]
}

export function ProductDisplay({ name, description, images, onEdit, onDelete }: ProductDisplayProps) {

  const [image, setImage] = useState(0)
  const noImagesToShow = images.length === 0

  const nextImageVariants = {
    "opacity-40": (image + 1) >= images.length,
    "opacity-100": (image + 1) < images.length,
    "absolute top-1/2 right-2": true
  }

  const previousImageVariants = {
    "opacity-40": (image - 1) < 0,
    "opacity-100": (image - 1) >= 0,
    "absolute top-1/2 left-2": true
  }

  return (
    <>
      <article className="flex flex-col gap-2 h-full group">
        <figure className="bg-white p-2 group relative h-[200px]">
          {
            noImagesToShow ?
              <div className=" grid place-items-center h-full">
                No images to show
              </div>
              :
              <>
                <Image
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
                  <ChevronLeftCircle />
                </button>
                <button
                  className={clsx(nextImageVariants)}
                  disabled={image + 1 >= images.length}
                  onClick={() => {
                    setImage(image + 1)
                  }}
                >
                  <ChevronRightCircle />
                </button>
              </>
          }
          <button
            className="opacity-0 transition-opacity absolute top-0 right-0 group-hover:opacity-100 text-sm bg-slate-900 p-2 rounded-full text-white"
          >
            <ImageIcon />
          </button>

        </figure>
        <main className="">
          <span className="font-bold tracking-tighter">{name}</span>
          <p className="text-ellipsis overflow-hidden h-28">{description}</p>
        </main>
        <hr className="mt-auto" />
        <footer className="opacity-0 overflow-hidden group-hover:opacity-100 transition-all flex justify-between items-center">
          <Button
            variant="secondary"
            className="flex justify-between"
            onClick={() => { onDelete() }}
          >
            Delete <Trash2 />
          </Button>
          <Button
            className="flex justify-between"
            onClick={() => { onEdit() }}
          >
            Edit <Pen />
          </Button>
        </footer>
      </article>
    </>
  )
}