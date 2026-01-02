"use client"

import { PageHeader } from "@/components/layout/PageHeader"
import { CTABanner } from "@/components/layout/CTABanner"
import { ClientLogos } from "@/components/sections/ClientLogos"
import { company, clients } from "@/lib/data"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform, useSpring, useInView, AnimatePresence } from "framer-motion"

export default function AboutPage() {
  return (
    <>
      {/* COSMIC HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
         <div className="absolute inset-0 z-0">
            <Image 
                src="/images/generated/cosmic-network.png" 
                alt="Cosmic Network" 
                fill
                className="object-cover"
                priority
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
         </div>

         <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
            <ScrollReveal>
                <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md">
                    <span className="text-xs font-mono text-blue-300 tracking-widest uppercase">The Vision</span>
                </div>
                <h1 className="text-7xl md:text-9xl font-bold text-white tracking-tighter mb-8 drop-shadow-[0_0_50px_rgba(59,130,246,0.5)]">
                    FUTURE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">INTEL</span>
                </h1>
                <p className="text-xl text-blue-100/80 max-w-2xl mx-auto font-light leading-relaxed">
                    We are architecting the neural infrastructure of tomorrow's enterprise.
                </p>
            </ScrollReveal>
         </div>
         
         <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-blue-500/50">
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-blue-500" />
         </div>
      </section>

      {/* PARALLAX NARRATIVE */}
      <section className="bg-black py-32 relative">
          <NarrativeSection />
      </section>

      {/* DIGITAL HUD STATS */}
      <StatsHUD />

      {/* HOLOGRAPHIC VALUES */}
      <section className="bg-black py-32 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
           <ScrollReveal>
             <div className="text-center mb-24">
               <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Core <span className="text-blue-500">Protocols</span></h2>
               <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full" />
             </div>
           </ScrollReveal>
           
           <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 perspective-[1000px]">
             {company.values.map((val, index) => (
               <HolographicCard key={val.title} val={val} index={index} />
             ))}
           </div>
        </div>
      </section>

      <section className="bg-black py-24 border-t border-white/5">
        <ClientLogos 
             headline="Strategic Partners"
             logos={clients}
        />
      </section>

      <CTABanner 
         headline="Join the network"
         description="We are currently deploying intelligence across 12 countries. Initialize contact."
         primaryCTA="Initialize"
         primaryHref="/contact" 
         secondaryCTA="View Careers"
         secondaryHref="#"
      />
    </>
  )
}

function NarrativeSection() {
    return (
        <div className="bg-black relative">
            {company.story.paragraphs.map((para, i) => (
                <NarrativeCard 
                    key={i} 
                    index={i} 
                    text={para} 
                    image={[
                        "/images/generated/narrative-concept.png",
                        "/images/generated/narrative-build.png",
                        "/images/generated/narrative-impact.png"
                    ][i]}
                />
            ))}
        </div>
    )
}

function NarrativeCard({ index, text, image }: { index: number, text: string, image: string }) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "start start"]
    })

    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

    return (
        <div 
            ref={containerRef}
            className="sticky top-0 h-screen flex items-center justify-center overflow-hidden" 
            style={{ zIndex: index + 1 }}
        >
            {/* Card Container */}
            <motion.div 
                style={{ scale }}
                className="relative w-full h-full md:w-[90vw] md:h-[90vh] rounded-[3rem] overflow-hidden bg-[#050505] border border-white/10 shadow-2xl"
            >
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image 
                        src={image} 
                        alt="Background" 
                        fill 
                        className="object-cover opacity-60 mix-blend-screen transition-transform duration-1000 hover:scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24 max-w-4xl">
                    <ScrollReveal>
                        <div className="inline-flex items-center gap-3 mb-6">
                            <span className="h-[1px] w-12 bg-blue-500" />
                            <span className="text-blue-400 font-mono tracking-widest uppercase">
                                Phase 0{index + 1}
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tighter">
                            {["THE INCEPTION", "THE CONSTRUCTION", "THE EXPANSION"][index]}
                        </h2>
                        <p className="text-xl md:text-3xl text-blue-100/90 leading-relaxed font-light backdrop-blur-sm p-4 rounded-xl bg-black/20 border border-white/5 inline-block">
                            {text}
                        </p>
                    </ScrollReveal>
                </div>
            </motion.div>
        </div>
    )
}

function HolographicCard({ val, index }: { val: any, index: number }) {
    return (
        <ScrollReveal delay={index * 0.1}>
            <div className="group h-full relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10">
                    <div className="mx-auto h-16 w-16 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 group-hover:text-white group-hover:scale-110 transition-all duration-500 mb-8 border border-blue-500/30 group-hover:shadow-[0_0_20px_#3b82f6]">
                        <DynamicIcon name={val.icon} size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">{val.title}</h3>
                    <p className="text-white/60 group-hover:text-white/80 transition-colors">{val.description}</p>
                </div>
            </div>
        </ScrollReveal>
    )
}

function StatsHUD() {
    return (
        <section className="bg-black border-y border-white/10 py-20 relative overflow-hidden">
             
             {/* Scrolling Grid Background */}
             <div className="absolute inset-0 opacity-20" 
                  style={{ backgroundImage: 'linear-gradient(rgba(59, 130, 246, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.2) 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
             />

             <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                     {company.stats.map((stat, i) => (
                         <StatItem key={stat.label} stat={stat} index={i} />
                     ))}
                </div>
             </div>
        </section>
    )
}

function StatItem({ stat, index }: { stat: any, index: number }) {
    const [displayValue, setDisplayValue] = useState("0")
    const isInView = useRef(false)
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start end", "center center"] })

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange(v => {
            if (v > 0.5 && !isInView.current) {
                isInView.current = true
                scrambleText()
            }
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    const scrambleText = () => {
        let iterations = 0
        const interval = setInterval(() => {
            if (iterations > 10) {
                setDisplayValue(stat.value)
                clearInterval(interval)
            } else {
                setDisplayValue(Math.random().toString(36).substring(2, 4 + Math.floor(Math.random()*4)).toUpperCase())
                iterations++
            }
        }, 50)
    }

    return (
        <div ref={containerRef} className="text-center">
            <div className="text-4xl md:text-5xl font-mono font-bold text-white mb-2 tracking-tighter tabular-nums">
                {displayValue}
            </div>
            <div className="text-xs md:text-sm font-mono text-blue-400 uppercase tracking-widest">
                {stat.label}
            </div>
        </div>
    )
}
