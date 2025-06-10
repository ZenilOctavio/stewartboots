import React from "react"
import { RoundedIcon } from "../../components/RoundedIcon"
import {HeartHandshake, Handshake, HandHeart, HandHelping, Footprints, PencilRuler, Ruler, Shield, ShieldAlert} from 'lucide-react'


export const Icons = ['HeartHandshake', 'Handshake', 'HandHeart', 'HandHelping', 'Footprints', 'PencilRuler', 'Ruler', 'Shield', 'ShieldAlert'] as const
interface HomePageArticle {
  title?: string
  content?: string | React.ReactNode
  Icon: React.FC<React.SVGProps<SVGSVGElement>> | typeof Icons[number]
}

function getIcon(icon: typeof Icons[number]) {
  switch (icon) {
    case 'HeartHandshake':
      return HeartHandshake
    case 'Handshake':
      return Handshake
    case 'HandHeart':
      return HandHeart
    case 'HandHelping':
      return HandHelping
    case 'Footprints':
      return Footprints
    case 'PencilRuler':
      return PencilRuler
    case 'Ruler':
      return Ruler
    case 'Shield':
      return Shield
    case 'ShieldAlert':
      return ShieldAlert
    default:
      return null
 }
}

export function HomePageArticle({ title, content, Icon }: HomePageArticle) {
  let icon

  if (typeof Icon === 'string') {
    const posibleIcon = getIcon(Icon)
    icon = (posibleIcon == null)? ShieldAlert : posibleIcon
  }
   else {
    icon = Icon
  }

  let parragraph
  if (typeof content === 'string'){
    parragraph = <p className="text-center text-sm font-light" dangerouslySetInnerHTML={{__html: content}}></p>
  } else {
    parragraph = <p className="text-center text-sm font-light">{content}</p>
  }
  return (
    <article className="flex flex-col items-center gap-2">
      <RoundedIcon Icon={icon} />
      <h3 className="font-semibold">{title}</h3>
          {parragraph}
    </article>
  )
}