"use client"

import { services } from "@/lib/data"
import { CTABanner } from "@/components/layout/CTABanner"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ServicesPage() {
  return (
    <div className="bg-black min-h-screen">
       {/* Hero Section */}
       <section className="relative py-32 overflow-hidden border-b border-white/10">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
             <img 
               src="/images/services_hero_bg.png" 
               alt="Services Background" 
               className="w-full h-full object-cover opacity-40"
             />
             <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
          </div>
          
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 text-center">
             <div className="inline-flex items-center gap-2 mb-8 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
                 <span className="w-2 h-2 rounded-full bg-[--brand-green] animate-pulse" />
                 <span className="text-xs font-mono text-gray-400 tracking-widest uppercase">
                    Our Expertise
                 </span>
             </div>
             
             <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-amber-100 to-amber-600 mb-8 max-w-5xl mx-auto leading-[1.1] drop-shadow-[0_0_25px_rgba(251,191,36,0.3)]">
               INTELLIGENT <br className="hidden md:block" /> SYSTEMS
             </h1>
             <p className="text-xl text-amber-100/60 font-light max-w-2xl mx-auto leading-relaxed">
               We build production-grade AI solutions that solve complex business challenges.
             </p>
          </div>
       </section>

       {/* Services List */}
       <section className="py-32 space-y-32">
          {services.map((service, index) => (
             <div key={service.id} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className={`flex flex-col gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                   
                   {/* Visual Side */}
                   <div className="w-full lg:w-1/2">
                      <div className="relative aspect-square md:aspect-[4/3] w-full bg-white/5 rounded-3xl border border-white/10 overflow-hidden group">
                         {/* Static Standard Image - Full Cover */}
                         {service.image && (
                            <div className="relative w-full h-full transition-transform duration-700 group-hover:scale-105">
                                <img 
                                   src={service.image}
                                   alt={service.name}
                                   className="w-full h-full object-cover"
                                />
                                {/* Overlay gradient for text readability if needed, or just style */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                         )}
                      </div>
                   </div>

                   {/* Content Side */}
                   <div className="w-full lg:w-1/2">
                      <div className="space-y-8">
                         <div>
                            <span className="text-[--brand-green] font-mono text-xs uppercase tracking-widest mb-4 block">
                               0{index + 1} / {service.slug.replace('-', ' ')}
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                               {service.name}
                            </h2>
                            <p className="text-xl text-gray-400 font-light leading-relaxed">
                               {service.tagline}
                            </p>
                         </div>
                         
                         <p className="text-gray-400 leading-relaxed text-lg border-l-2 border-[--brand-green]/30 pl-6">
                            {service.description}
                         </p>

                         {/* Benefits Grid */}
                         <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                            {service.benefits?.slice(0, 4).map((benefit) => (
                               <div key={benefit} className="flex items-start gap-3">
                                  <CheckCircle2 className="h-5 w-5 text-[--brand-green] flex-shrink-0 mt-0.5" />
                                  <span className="text-sm text-gray-300">{benefit}</span>
                               </div>
                            ))}
                         </div>

                         <div className="pt-4">
                            <Button size="lg" className="bg-white text-black hover:bg-gray-200 group" asChild>
                               <Link href={`/services/${service.slug}`}>
                                  Explore Service
                                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                               </Link>
                            </Button>
                         </div>
                      </div>
                   </div>

                </div>
             </div>
          ))}
       </section>

       <CTABanner 
         headline="Ready to Transform?"
         description="Let's build the future of your business together."
         primaryCTA="Start Your Project"
         primaryHref="/contact"
       />
    </div>
  )
}
