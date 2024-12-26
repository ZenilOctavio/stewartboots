import { RoundedIcon } from "../../components/RoundedIcon";

interface ContactItemProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  content: string
  title: string
}

export function ContactItem({ title, content, Icon }: ContactItemProps) {
  return (
    <article className="flex items-center gap-3">
      <figure>
        <RoundedIcon Icon={Icon} />
      </figure>
      <aside className="flex flex-col justify-between">
        <strong>{title}</strong>
        <span>{content}</span>
      </aside>
    </article>
  )
}