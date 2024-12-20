import clsx from "clsx"

interface RoundedIconProps {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>
  className?: string
}

export function RoundedIcon({ Icon, className = "" }: RoundedIconProps) {

  return (
    <div
      className="p-2 bg-backgroundSecondary rounded-full text-background w-16 aspect-square flex items-center justify-center shadow-md"
    >
      <Icon className={clsx("w-6 h-6", className)} />
    </div>
  )
}