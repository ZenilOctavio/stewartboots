import React from "react"

interface HomePageArticle {

  title: string
  content: string | React.ReactNode
  Icon: React.FC<React.SVGProps<SVGSVGElement>>


}

export function HomePageArticle({ title, content, Icon }: HomePageArticle) {
  return (
    <article className="flex flex-col items-center gap-2">
      <div
        className="p-2 bg-backgroundSecondary rounded-full text-background w-16 aspect-square flex items-center justify-center shadow-md"
      >
        <Icon className="w-8 h-8" />
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-center text-sm font-light">{content}</p>
    </article>
  )
}