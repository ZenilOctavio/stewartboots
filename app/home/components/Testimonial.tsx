import { StarIcon } from "../icons/Star";

interface TestimonialProps {
  content: string | React.ReactNode
  name: string
  date: string
}

export function Testimonial({ content, name, date }: TestimonialProps) {
  return (
    <article className="bg-white w-full h-full p-6 rounded-md testimonial">
      <p className="text-sm">{content}</p>
      <footer className="mt-2 flex justify-between">
        <aside>
          <h6 className="font-roboto font-semibold">{name}</h6>
          <span className="font-light">{date}</span>
        </aside>
        <div className="flex self-end">
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
          <StarIcon className="w-5 h-5" />
        </div>
      </footer>
    </article>
  )
}