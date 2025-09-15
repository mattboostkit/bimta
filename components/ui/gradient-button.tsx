import * as React from "react"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

export interface GradientButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

const GradientButton = React.forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ className, variant = 'primary', size = 'md', asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const variants = {
      primary: 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl',
      secondary: 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white shadow-md hover:shadow-lg',
      outline: 'border-2 border-blue-600 text-blue-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-cyan-600 hover:text-white hover:border-transparent'
    }

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg'
    }

    return (
      <Comp
        ref={ref}
        className={cn(
          'font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
GradientButton.displayName = "GradientButton"

export { GradientButton }