"use client"

import { useState, useRef, useEffect } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"
import { portfolio } from "@/lib/data"
import { CTABanner } from "@/components/layout/CTABanner"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowUpRight, Plus, Rocket, BarChart3, Code2, Globe } from "lucide-react"
import Image from "next/image"

const categories = ["All", "Financial Services", "Healthcare", "Retail", "Technology"]

export default function WorkPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All" 
    ? portfolio 
    : portfolio.filter(p => p.industry === activeCategory)

  return (
    <div className="min-h-screen bg-black selection:bg-blue-500/30 selection:text-blue-100">
       
       <div className="pt-32 pb-20 px-4 md:px-8 max-w-[1600px] mx-auto">
          {/* Header */}
          <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8 border-b border-white/10 pb-8">
             <div>
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md"
                >
                     <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                     <span className="text-xs font-mono text-blue-400 tracking-widest uppercase">
                        Mission Log
                     </span>
                </motion.div>
                <h1 className="text-5xl md:text-8xl font-bold text-white tracking-tighter">
                   DEPLOYED <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">SYSTEMS</span>
                </h1>
             </div>
             
             {/* Filters */}
             <div className="flex flex-wrap gap-2 justify-end">
                {categories.map(cat => (
                    <button
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={cn(
                            "px-4 py-2 rounded-lg text-xs font-mono tracking-widest uppercase transition-all duration-300 border",
                            activeCategory === cat
                                ? "bg-white text-black border-white"
                                : "bg-white/5 text-white/50 border-white/10 hover:border-white/30 hover:text-white hover:bg-white/10"
                        )}
                    >
                        {cat}
                    </button>
                ))}
             </div>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {filteredProjects.map((project, i) => (
                <BentoCard 
                    key={project.id} 
                    project={project} 
                    className={cn(
                        // Make every 4th item span 2 cols for asymmetry
                        (i % 4 === 0 || i % 4 === 3) ? "lg:col-span-2" : "lg:col-span-1"
                    )}
                />
             ))}
          </div>
       </div>

       <CTABanner 
         headline="Your Vision, Authenticated"
         description="Let's build the next industry-defining platform."
         primaryCTA="Start Project"
       />
    </div>
  )
}

function BentoCard({ project, className }: { project: any, className?: string }) {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect()
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
    }

    return (
        <Link 
            href={`/work/${project.id}`}
            className={cn(
                "group relative rounded-3xl bg-white/[0.02] border border-white/10 overflow-hidden min-h-[400px] flex flex-col justify-between transition-all duration-500 hover:border-white/20 hover:shadow-2xl hover:shadow-blue-500/10",
                className
            )}
            onMouseMove={handleMouseMove}
        >
            {/* Spotlight Effect */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
                        radial-gradient(
                        650px circle at ${mouseX}px ${mouseY}px,
                        rgba(59, 130, 246, 0.15),
                        transparent 80%
                        )
                    `,
                }}
            />

            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image 
                    src={project.image || "/images/generated/cosmic-glass-1.jpg"} 
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-50"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
            </div>

            {/* Content Top */}
            <div className="relative z-10 p-8 flex justify-between items-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md shadow-lg">
                     <span className="text-[10px] font-mono text-blue-300 tracking-widest uppercase">
                        {project.industry}
                     </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-blue-500 group-hover:border-blue-500 transition-colors duration-300 backdrop-blur-md">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
            </div>

            {/* Content Bottom */}
            <div className="relative z-10 p-8 pt-0 mt-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight group-hover:text-blue-100 transition-colors drop-shadow-md">
                    {project.title}
                </h2>
                <div className="h-px w-full bg-white/20 mb-6 group-hover:bg-blue-500/50 transition-colors" />
                
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <div className="text-xs font-mono text-blue-200/80 uppercase tracking-wider">Metrics</div>
                        <div className="text-lg font-bold text-white group-hover:text-blue-200">
                            {project.results?.[0]?.metric || "N/A"}
                        </div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-xs font-mono text-blue-200/80 uppercase tracking-wider">Tech</div>
                        <div className="flex gap-3">
                             {project.technologies?.slice(0, 3).map((t: string) => (
                                 <div key={t} title={t} className="p-1.5 rounded-md bg-white/10 border border-white/10 backdrop-blur-sm group-hover:border-blue-500/30 transition-colors">
                                     {t.includes("React") ? <Code2 className="w-5 h-5 text-blue-300" /> : 
                                      t.includes("AI") || t.includes("Python") ? <Rocket className="w-5 h-5 text-purple-300" /> :
                                      <Globe className="w-5 h-5 text-emerald-300" />}
                                 </div>
                             ))}
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
