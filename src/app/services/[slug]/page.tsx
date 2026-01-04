import { notFound } from "next/navigation"
import { services } from "@/lib/data"
import { CTABanner } from "@/components/layout/CTABanner"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import Link from "next/link"

import { use } from "react"

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }
  


  return (
    <>
      <section className="relative min-h-[80vh] flex items-center bg-black overflow-hidden py-20">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[--brand-green] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-md mb-8">
                 <span className="h-1.5 w-1.5 rounded-full bg-[--brand-green] animate-pulse"></span>
                 <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                   Services
                 </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                {service.name}
              </h1>
              <p className="text-xl md:text-2xl text-[--brand-green] font-light mb-8">
                {service.tagline}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                 <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
                    <Link href={service.cta.href}>{service.cta.text}</Link>
                 </Button>
              </div>
            </div>

            {/* Right Image - Floating */}
            <div className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center perspective-[1000px]">
               {service.image && (
                 <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-contain animate-float drop-shadow-[0_0_50px_rgba(34,197,94,0.1)]"
                 />
               )}
               {/* Decorative Ring */}
               <div className="absolute inset-0 border border-white/5 rounded-full scale-[0.8] animate-spin-slow pointer-events-none" />
            </div>

          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-black/50 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose DeltaFlow?</h2>
                <p className="text-gray-400 mb-8 max-w-md">
                  We don't just build software; we build intelligent systems that drive measurable business growth.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                {service.benefits?.map((benefit) => (
                   <div key={benefit} className="flex items-start gap-3">
                      <div className="mt-1 h-5 w-5 rounded-full bg-[--brand-green]/20 flex items-center justify-center flex-shrink-0">
                         <div className="h-2 w-2 rounded-full bg-[--brand-green]" />
                      </div>
                      <span className="text-gray-300 font-medium">{benefit}</span>
                   </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-black relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">What We Build</h2>
             <p className="text-gray-400 text-lg">Real-world applications of {service.name}</p>
           </div>
           
           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
             {service.useCases.map((useCase) => (
               <div key={useCase.title} className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:border-[--brand-green]/30 transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.1)]">
                 <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[--brand-green] transition-colors">{useCase.title}</h3>
                 <p className="text-gray-400 leading-relaxed text-sm">{useCase.description}</p>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Sections removed per request */}

      <CTABanner 
        headline="Start Your Project"
        description={service.longDescription || service.description}
        primaryCTA={service.cta.text}
        primaryHref={service.cta.href}
      />
    </>
  )
}
