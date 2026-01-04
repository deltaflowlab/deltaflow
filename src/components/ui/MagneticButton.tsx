"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion, useMotionValue } from "framer-motion"
import { useRef } from "react"
import React from "react"

interface MagneticButtonProps {
    children: React.ReactNode
    href?: string
    variant?: 'primary' | 'secondary'
    className?: string
    onClick?: () => void
}

export function MagneticButton({ 
    children, 
    href, 
    variant = 'primary',
    className,
    onClick
}: MagneticButtonProps) {
    const ref = useRef<HTMLDivElement>(null)
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e
        const { left, top, width, height } = ref.current?.getBoundingClientRect() || { left: 0, top: 0, width: 0, height: 0 }
        const center = { x: left + width / 2, y: top + height / 2 }
        x.set((clientX - center.x) * 0.35)
        y.set((clientY - center.y) * 0.35)
    }

    const handleMouseLeave = () => {
        x.set(0)
        y.set(0)
    }

    const content = (
        <div
            className={cn(
                "relative overflow-hidden group px-8 py-3 rounded-full min-w-[140px] inline-flex items-center justify-center text-sm font-medium transition-all duration-300 cursor-pointer",
                variant === 'primary' 
                    ? "bg-white text-black hover:bg-blue-50" 
                    : "bg-black text-white border border-white/20 hover:border-white/50",
                className
            )}
        >
            <div className="relative z-10 flex items-center gap-2">
                {children}
                {variant === 'primary' && (
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                )}
            </div>
            
            {/* Hover Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 to-indigo-500/10" />
        </div>
    )

    return (
        <motion.div 
            ref={ref}
            style={{ x, y }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
        >
            {href ? (
                <Link href={href}>
                    {content}
                </Link>
            ) : (
                content
            )}
        </motion.div>
    )
}
