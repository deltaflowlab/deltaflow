import Link from "next/link"
import { Card } from "@/components/ui/Card"
import { DynamicIcon } from "@/components/ui/DynamicIcon"
import { ArrowRight } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

interface ServiceGridProps {
  headline: string
  description: string
  services: Array<{
    icon: string
    image?: string
    title: string
    description: string
    link: string
  }>
}

export function ServiceGrid({ headline, description, services }: ServiceGridProps) {
  return (
    <section className="bg-black py-24 sm:py-32 relative overflow-hidden">
      {/* Background glow for ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[--brand-green] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center mb-20">
        <ScrollReveal width="100%">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            {headline}
          </h2>
          <p className="mx-auto max-w-2xl text-lg md:text-xl text-[--color-gray-400]">
            {description}
          </p>
        </ScrollReveal>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* BENTO GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[450px]">
          {services.map((service, index) => {
            // Alternating Bento Layout for 4 items:
            // Row 1: [Wide 2/3] [Narrow 1/3]
            // Row 2: [Narrow 1/3] [Wide 2/3]
            // Logic: Indices 0 and 3 are wide. Indices 1 and 2 are narrow.
            const isWide = index % 4 === 0 || index % 4 === 3;

            return (
              <ScrollReveal 
                key={service.title} 
                delay={index * 0.15} 
                width="100%"
                className={`h-full ${isWide ? 'md:col-span-2' : 'md:col-span-1'}`}
              >
                <div className="group relative h-full w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 hover:border-[--brand-green]/20 transition-all duration-500">
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 z-20 flex flex-col justify-between p-8 md:p-10 bg-gradient-to-b from-transparent via-black/20 to-black/90">
                    
                    <div className="flex items-start justify-between">
                       <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/10">
                          <DynamicIcon name={service.icon} size={20} />
                       </div>
                    </div>

                    <div>
                      <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-[--brand-green] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-[--color-gray-400] text-sm md:text-base leading-relaxed mb-6 max-w-[90%]">
                        {service.description}
                      </p>
                      
                      <Link 
                        href={service.link}
                        className="inline-flex items-center text-sm font-mono font-medium text-white hover:text-[--brand-green] transition-colors"
                      >
                        [ EXPLORE ] <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  {/* 3D Asset Background - Pushed nicely */}
                  <div className={`absolute z-10 transition-transform duration-700 group-hover:scale-110 
                      ${isWide ? 'top-0 right-0 h-full w-3/4 opacity-60 translate-x-[20%]' : 'top-0 right-0 h-3/4 w-full opacity-50 -translate-y-[10%] translate-x-[20%]'}
                  `}>
                     {service.image && (
                       <img 
                         src={service.image} 
                         alt={service.title}
                         className="w-full h-full object-contain"
                       />
                     )}
                  </div>
                  
                  {/* Glass Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
