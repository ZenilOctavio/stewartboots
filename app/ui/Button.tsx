import clsx from "clsx"
import { forwardRef } from "react"

type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  trailingIcon?: React.ReactNode
  leadingIcon?: React.ReactNode
}

const buttonVariants: Record<ButtonVariant, string> = {
  'primary': "px-4 py-2 bg-backgroundSecondary text-background font-bold tracking-widest border border-background",
  'secondary': "px-4 py-2 bg-background text-backgroundSecondary font-bold tracking-widest border border-backgroundSecondary",
  'tertiary': ""
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ variant = 'primary', leadingIcon, trailingIcon, className, children, ...props }, ref) => {

  return (
    <button
      {...props}
      ref={ref}
      className={clsx(buttonVariants[variant], className)}
    >
      {leadingIcon}
      {children}
      {trailingIcon}
    </button>
  )
})

Button.displayName = 'Button'