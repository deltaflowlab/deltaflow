import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  loading?: boolean
  fullWidth?: boolean
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, fullWidth, asChild = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    const baseStyles = "inline-flex items-center justify-center rounded-full font-mono font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[--color-gray-400] disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98] tracking-wide"
    
    const variants = {
      primary: "bg-white text-black hover:bg-blue-50 hover:text-black hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] border border-transparent", // Sticky/Magnetic style
      secondary: "bg-[--color-gray-100] text-white hover:bg-[--color-gray-200] border border-[--color-gray-200]",
      outline: "border border-[--color-gray-200] bg-transparent text-white hover:bg-white/5 hover:border-white/20", // The signature look
      ghost: "bg-transparent text-[--color-gray-400] hover:text-white hover:bg-white/5"
    }
    
    const sizes = {
      sm: "h-8 px-4 text-xs",
      md: "h-10 px-6 text-sm",
      lg: "h-12 px-8 text-sm" 
    }
    
    return (
      <Comp
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {asChild ? children : (
          <>
            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
          </>
        )}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button }
