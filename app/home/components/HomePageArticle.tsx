import React from "react"
import { RoundedIcon } from "../../components/RoundedIcon"

interface HomePageArticle {
  title: string
  content: string | React.ReactNode
  Icon: React.FC<React.SVGProps<SVGSVGElement>>

}

export function HomePageArticle({ title, content, Icon }: HomePageArticle) {
  return (
    <article className="flex flex-col items-center gap-2">
      <RoundedIcon Icon={Icon} />
      <h3 className="font-semibold">{title}</h3>
      <p className="text-center text-sm font-light">{content}</p>
    </article>
  )
}