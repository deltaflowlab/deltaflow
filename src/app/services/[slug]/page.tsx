import { notFound } from "next/navigation"
import { services } from "@/lib/data"
import { CTABanner } from "@/components/layout/CTABanner"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { TechStack } from "@/components/sections/TechStack"
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
  
  // Transform string process steps to Phase objects for compatibility
  const processPhases = service.process.map((step, idx) => ({
    number: `0${idx + 1}`,
    name: step,
    duration: "Phase",
    description: "Key implementation phase focused on delivering value.",
  }))

  return (
    <>
      <section className="bg-[--color-gray-50] py-20 border-b border-[--color-gray-100]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-[--color-gray-900] sm:text-5xl lg:text-6xl mb-6">
            {service.name}
          </h1>
          <p className="text-xl text-[--brand-green] font-medium mb-6">
            {service.tagline}
          </p>
          <p className="mx-auto max-w-2xl text-lg text-[--color-gray-400] mb-10">
            {service.description}
          </p>
          <div className="flex justify-center">
             <Button size="lg" asChild>
                <Link href={service.cta.href}>{service.cta.text}</Link>
             </Button>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
             <h2 className="text-3xl font-extrabold text-[--color-gray-900]">What We Build</h2>
             <p className="mt-4 text-lg text-[--color-gray-400]">Real-world applications of {service.name}</p>
           </div>
           <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
             {service.useCases.map((useCase) => (
               <Card key={useCase.title} className="bg-[--color-gray-50] border-none">
                 <h3 className="text-xl font-bold text-[--color-gray-900] mb-3">{useCase.title}</h3>
                 <p className="text-[--color-gray-400]">{useCase.description}</p>
               </Card>
             ))}
           </div>
        </div>
      </section>

      {/* Process */}
      <ProcessTimeline 
         headline="Implementation Process"
         description="How we bring your solution to life"
         phases={processPhases}
      />

      {/* Tech Stack */}
      <TechStack 
        headline="Technologies We Use"
        technologies={service.technologies}
      />

      <CTABanner 
        headline="Start Your Project"
        description={service.description}
        primaryCTA={service.cta.text}
        primaryHref={service.cta.href}
      />
    </>
  )
}
