import clsx from "clsx"

type NavigationButtonVariant = 'default' | 'filled' | 'outlined' | 'disabled'

interface NavigationButtonProps {
  children: string | React.ReactNode
  className?: string
  variant?: NavigationButtonVariant
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
}

const variants: Record<NavigationButtonVariant, string> = {
  default: 'border border-foreground',
  filled: 'bg-backgroundSecondary text-background',
  outlined: '',
  disabled: 'opacity-50 cursor-not-allowed'
}

export function NavigationButton({
  className = "",
  children,
  variant = 'default',
  onClick,
  disabled = false
}: NavigationButtonProps) {
  return (
    <button
      className={clsx(
        'p-2 font-light aspect-square w-[5ch] grid place-items-center',
        variants[variant],
        className
      )}
      onClick={onClick}
      disabled={disabled || variant === 'disabled'}
    >
      {children}
    </button >
  )
}