import Image from "next/image"

interface ProductProps {
  name: string
  description: string
  imageSrc: string
}

export function Product({ name, imageSrc }: ProductProps) {
  return (
    <article className="rounded-xl p-4 hover:scale-105 transition-all hover:border-2 overflow-hidden">
      <figure className="bg-white p-2 aspect-square">
        <Image
          className="w-full h-full object-contain"
          width={400}
          height={400}
          src={imageSrc}
          alt={name}
        />
      </figure >
      <footer>
        <h6 className="font-roboto font-bold h-5 overflow-hidden overflow-ellipsis">{name}</h6>
        {/* <p className="font-light text-sm max-h-[2.3rem] overflow-ellipsis overflow-hidden">{description}</p> */}
      </footer>
    </article >
  )
}