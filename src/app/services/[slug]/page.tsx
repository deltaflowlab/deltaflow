import { CheckCircle2, ArrowRight, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { services } from "@/lib/data"
import { CTABanner } from "@/components/layout/CTABanner"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { use } from "react"

export default function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params)
  const service = services.find((s) => s.slug === slug)

  if (!service) {
    notFound()
  }

  return (
    <>
      <section className="relative min-h-[85vh] flex items-center bg-black overflow-hidden py-24">
        {/* Ambient Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[--brand-green] opacity-[0.05] blur-[150px] rounded-full pointer-events-none" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
          
          {/* Breadcrumb */}
          <Link href="/services" className="inline-flex items-center text-sm text-gray-500 hover:text-white transition-colors mb-8 group">
            <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Services
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className="relative z-20">
              <div className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-4 py-1.5 rounded-full backdrop-blur-md mb-8">
                 <span className="h-1.5 w-1.5 rounded-full bg-[--brand-green] animate-pulse"></span>
                 <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">
                   Services / {service.slug.replace('-', ' ')}
                 </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6 leading-[1.05]">
                {service.name.split(' ').map((word, i) => (
                  <span key={i} className="block">{word}</span>
                ))}
              </h1>
              <p className="text-xl md:text-2xl text-[--brand-green] font-light mb-8 tracking-wide">
                {service.tagline}
              </p>
              <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-xl font-light">
                {service.description}
              </p>
              <div className="flex flex-wrap gap-4">
                 <Button size="lg" className="bg-white text-black hover:bg-gray-200 border-none" asChild>
                    <Link href={service.cta.href}>{service.cta.text}</Link>
                 </Button>
              </div>
            </div>

            {/* Right Image - Floating */}
            <div className="relative h-[500px] w-full flex items-center justify-center perspective-[2000px]">
               {service.image && (
                 <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-contain drop-shadow-[0_0_80px_rgba(251,191,36,0.15)]"
                 />
               )}
            </div>

          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-24 bg-zinc-900/50 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="sticky top-24">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Why Partner with DeltaFlow?</h2>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  We combine technical excellence with deep industry knowledge to deliver solutions that are not just "smart", but strategically transformative.
                </p>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {service.benefits?.map((benefit, index) => (
                   <div key={benefit} className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-[--brand-green]/20 transition-colors group">
                      <div className="mt-1 flex-shrink-0 text-[--brand-green]">
                         <CheckCircle2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium text-lg mb-1">Benefit {index + 1}</h3>
                        <p className="text-gray-400 leading-relaxed">{benefit}</p>
                      </div>
                   </div>
                ))}
              </div>
           </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 bg-black relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
           <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
             <div>
               <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4">What We Build</h2>
               <p className="text-gray-400 text-lg max-w-xl">Real-world applications and solutions we engineer for {service.name}.</p>
             </div>
             <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" asChild>
                <Link href="/contact">Request Custom Solution</Link>
             </Button>
           </div>
           
           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
             {service.useCases.map((useCase) => (
               <div key={useCase.title} className="group p-8 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between h-full min-h-[280px]">
                 <div>
                   <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300">
                     <ArrowRight className="h-4 w-4 -rotate-45" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[--brand-green] transition-colors">{useCase.title}</h3>
                   <p className="text-gray-400 leading-relaxed text-sm">{useCase.description}</p>
                 </div>
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
