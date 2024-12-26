import Image from "next/image"

interface ProductProps {
  name: string
  description: string
  imageSrc: string
}

export function Product({ name, description, imageSrc }: ProductProps) {
  return (
    <article className="rounded-xl p-4">
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
        <h6 className="font-roboto font-bold">{name}</h6>
        <p className="font-light text-sm max-h-[2.3rem] overflow-ellipsis overflow-hidden">{description}</p>
      </footer>
    </article >
  )
}