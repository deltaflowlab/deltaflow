"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { motion, useScroll, useTransform, useMotionTemplate, useMotionValue } from "framer-motion"
import { useRef, useEffect } from "react"

interface CTABannerProps extends React.HTMLAttributes<HTMLDivElement> {
  headline: string
  description: string
  primaryCTA?: string
  secondaryCTA?: string
  primaryHref?: string
  secondaryHref?: string
}

export function CTABanner({ 
  headline, 
  description, 
  primaryCTA = "Get Started",
  secondaryCTA,
  primaryHref = "/contact",
  secondaryHref = "/services",
  className,
  ...props 
}: CTABannerProps) {
  return (
    <section 
      className={cn(
        "relative py-32 overflow-hidden bg-black",
        className
      )} 
      {...props}
    >
      <WarpSpeedBackground />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-500 animate-gradient-x">
                {headline}
            </span>
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-blue-200/60 mb-12 font-light leading-relaxed">
            {description}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <MagneticButton href={primaryHref} variant="primary">
                {primaryCTA}
            </MagneticButton>
            
            {secondaryCTA && (
                <MagneticButton href={secondaryHref} variant="secondary">
                {secondaryCTA}
                </MagneticButton>
            )}
            </div>
        </motion.div>
      </div>
    </section>
  )
}

import { MagneticButton } from "@/components/ui/MagneticButton"

function WarpSpeedBackground() {
    return (
        <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-black to-black" />
            <Stars />
        </div>
    )
}

function Stars() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        const stars: { x: number, y: number, z: number }[] = []
        const numStars = 400 // Reduced count for cleaner look
        const speed = 2

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const initStars = () => {
             for (let i = 0; i < numStars; i++) {
                 stars.push({
                     x: Math.random() * canvas.width - canvas.width / 2,
                     y: Math.random() * canvas.height - canvas.height / 2,
                     z: Math.random() * canvas.width
                 })
             }
        }

        const animate = () => {
             if (!ctx) return
             ctx.fillStyle = "black"
             ctx.fillRect(0, 0, canvas.width, canvas.height)
             
             ctx.fillStyle = "white"
             const cx = canvas.width / 2
             const cy = canvas.height / 2

             for (let i = 0; i < stars.length; i++) {
                 const star = stars[i]
                 star.z -= speed
                 
                 if (star.z <= 0) {
                     star.z = canvas.width
                     star.x = Math.random() * canvas.width - canvas.width / 2
                     star.y = Math.random() * canvas.height - canvas.height / 2
                 }

                 const x = (star.x / star.z) * canvas.width + cx
                 const y = (star.y / star.z) * canvas.height + cy
                 const size = (1 - star.z / canvas.width) * 3

                 if (x >= 0 && x < canvas.width && y >= 0 && y < canvas.height) {
                      const alpha = (1 - star.z / canvas.width)
                      ctx.globalAlpha = alpha
                      ctx.beginPath()
                      ctx.arc(x, y, size, 0, Math.PI * 2)
                      ctx.fill()
                      
                      // Trail effect
                      if (size > 1.5) {
                         ctx.beginPath()
                         ctx.moveTo(x, y)
                         ctx.lineTo(x + (x - cx) * 0.1, y + (y - cy) * 0.1)
                         ctx.strokeStyle = `rgba(100, 200, 255, ${alpha * 0.5})`
                         ctx.lineWidth = size * 0.5
                         ctx.stroke()
                      }
                 }
             }
             
             animationFrameId = requestAnimationFrame(animate)
        }

        resize()
        initStars()
        animate()
        
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
}
