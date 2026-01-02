"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion"
import { services } from "@/lib/data"
import { CTABanner } from "@/components/layout/CTABanner"
import { cn } from "@/lib/utils"
import { Brain, Shield, Cpu, Globe, ArrowRight, Database, Code } from "lucide-react" // Importing icons to map dynamically

// Map icons to services (assuming order or IDs)
const iconMap: Record<string, any> = {
  "ai-strategy": Brain,
  "custom-development": Code,
  "infrastructure": Database,
  "scaling": Globe // Fallback or specific mapping
}

export default function ServicesPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
  })

  return (
    <div className="bg-black relative">
       {/* Hero Section */}
       <div className="h-[50vh] flex flex-col items-center justify-center border-b border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/10 via-black to-black" />
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 text-center px-4">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8 }}
            >
                <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md">
                     <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                     <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
                        System Modules
                     </span>
                </div>
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter mb-4">
                   CORE <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">SYSTEMS</span>
                </h1>
                <p className="text-xl text-blue-200/60 font-light max-w-2xl mx-auto">
                   Advanced neural architectures for enterprise deployment.
                </p>
            </motion.div>
          </div>
       </div>

       {/* Horizontal Scroll Deck */}
       <section ref={containerRef} className="relative h-[400vh] bg-black">
          <div className="sticky top-0 flex h-screen items-center overflow-hidden">
             
             {/* Background Context */}
             <div className="absolute inset-0 flex items-center justify-center">
                 <div className="w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-3xl animate-pulse" />
             </div>

             <motion.div 
                style={{ x: useTransform(scrollYProgress, [0, 1], ["0%", "-85%"]) }} 
                className="flex gap-12 sm:gap-24 px-12 sm:px-24"
             >
                {services.map((service, index) => (
                   <ServiceCard key={service.id} service={service} index={index} />
                ))}
             </motion.div>
          </div>
       </section>

       <CTABanner 
         headline="Initialize Deployment"
         description="Integrate these systems into your infrastructure."
         primaryCTA="Start Project"
       />
    </div>
  )
}

function ServiceCard({ service, index }: { service: any, index: number }) {
    const Icon = iconMap[service.id] || Brain
    
    return (
        <div className="relative w-[85vw] md:w-[60vw] max-w-4xl h-[70vh] flex-shrink-0 group perspective-1000">
            <div className="relative h-full w-full bg-[#0a0a0a] border border-white/10 rounded-[2rem] overflow-hidden transition-all duration-500 hover:border-blue-500/50 hover:shadow-[0_0_50px_rgba(59,130,246,0.1)] flex flex-col md:flex-row">
                
                {/* Visual Side (Left/Top) */}
                <div className="w-full md:w-2/5 h-1/3 md:h-full relative overflow-hidden bg-gradient-to-b from-blue-900/10 to-black border-b md:border-b-0 md:border-r border-white/5 p-8 flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    
                    {/* Floating Holographic Icon */}
                    <motion.div 
                        className="relative z-10"
                        animate={{ y: [0, -20, 0], rotateY: [0, 180, 360] }}
                        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    >
                        <div className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/5 backdrop-blur-sm shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                            <Icon className="w-16 h-16 md:w-24 md:h-24 text-blue-400 stroke-[1]" />
                        </div>
                    </motion.div>

                    {/* Number */}
                    <div className="absolute bottom-4 left-4 text-6xl md:text-9xl font-bold text-white/5 font-mono">
                        0{index + 1}
                    </div>
                </div>

                {/* Content Side (Right/Bottom) */}
                <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col justify-between relative bg-white/[0.02]">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
                    
                    <div className="relative z-10 space-y-6">
                        <div>
                            <span className="text-blue-500 font-mono text-xs uppercase tracking-widest mb-2 block">System // {service.id}</span>
                            <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight">{service.name}</h3>
                        </div>
                        <p className="text-lg md:text-xl text-blue-100/70 font-light leading-relaxed">
                            {service.tagline}
                        </p>
                        
                        <div className="flex flex-wrap gap-3">
                            {service.benefits.map((benefit: string) => (
                                <span key={benefit} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-blue-200/60 font-mono">
                                    {benefit}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="relative z-10 pt-8">
                        <div className="h-px w-full bg-gradient-to-r from-blue-500/50 to-transparent mb-6" />
                        <button className="group/btn flex items-center gap-4 text-white hover:text-blue-400 transition-colors">
                            <span className="text-sm font-bold uppercase tracking-widest">Access Protocol</span>
                            <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-2" />
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}
