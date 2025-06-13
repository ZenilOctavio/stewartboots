import Image from "next/image"

interface ProductProps {
  name: string
  description: string
  imageSrc: string
}

export function Product({ name, imageSrc }: ProductProps) {
  return (
    <article className="relative p-4 group hover:scale-105 transition-all hover:border-[1px] hover:border-slate-700 hover:shadow-md overflow-hidden hover:z-10 bg-background">
      <figure className="bg-white p-2 aspect-square">
        <Image
          className="w-full h-full object-contain"
          width={400}
          height={400}
          src={imageSrc}
          alt={name}
        />
      </figure>
      <footer className="mt-2">
        <h6 className="font-roboto font-light line-clamp-2 max-h-[3rem] group-hover:line-clamp-none group-hover:max-h-[10rem] transition-[max-height] duration-300 ease-in-out overflow-hidden">
          {name}
        </h6>
      </footer>
    </article>
  )
}