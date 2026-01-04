"use client"

import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"
import { StarField } from "@/components/animations/StarField"

interface HeroProps {
  headline: string
  subheadline: string
  primaryCTA: string
  secondaryCTA: string
}

export function Hero({ headline, subheadline, primaryCTA, secondaryCTA }: HeroProps) {
  return (
    <section className="relative h-screen min-h-[800px] w-full overflow-hidden bg-black flex items-center justify-center">
      {/* 1. Immersive Background Layer */}
      <StarField />
      
      {/* Subtle Glow - Center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-white/[0.02] blur-[150px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }} // "Apple/x.ai" ease
          className="max-w-5xl"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-10 flex justify-center"
          >
             <span className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-md">
               <span className="h-1.5 w-1.5 rounded-full bg-[--brand-green] animate-pulse"></span>
               <span className="text-xs font-mono tracking-[0.2em] text-[--color-gray-400] uppercase">
                 Systems Online
               </span>
             </span>
          </motion.div>
          
          {/* Main Headline - Massive & Tight */}
          <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
            {/* Split headline for visual impact if needed, or keeping it as prop */}
            DeltaFlow
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ delay: 0.5, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-[--brand-green] to-transparent mx-auto mb-10"
          />

          <p className="mx-auto max-w-2xl text-xl text-[--color-gray-400] mb-12 font-light leading-relaxed antialiased">
            {subheadline}
          </p>
          
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.4, duration: 0.8 }}
             className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <Button variant="primary" size="lg" className="min-w-[200px] h-14 text-base" asChild>
              <Link href="/contact">{primaryCTA}</Link>
            </Button>
            <Button variant="ghost" size="lg" className="min-w-[200px] h-14 text-base" asChild>
              <Link href="/work">{secondaryCTA} <span className="ml-2">→</span></Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </motion.div>
    </section>
  )
}
