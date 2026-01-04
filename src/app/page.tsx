import { Hero } from "@/components/sections/Hero"
import { ServiceGrid } from "@/components/sections/ServiceGrid"
import { PortfolioShowcase } from "@/components/sections/PortfolioShowcase"
import { Stats } from "@/components/sections/Stats"
import { ProcessTimeline } from "@/components/sections/ProcessTimeline"
import { CTABanner } from "@/components/layout/CTABanner"
import { services, portfolio, company, process } from "@/lib/data"
import { ScrollReveal } from "@/components/animations/ScrollReveal"

export default function Home() {
  return (
    <>
      <Hero 
        headline="Custom AI Solutions That Transform Your Business"
        subheadline="We build intelligent automation and AI-powered products for forward-thinking companies."
        primaryCTA="Start Your Project"
        secondaryCTA="View Our Work"
      />
      

      
      <ScrollReveal width="100%" className="w-full">
        <ServiceGrid 
          headline="How We Can Help"
          description="We bring AI expertise to solve your toughest business challenges"
          services={services.map(s => ({
            icon: s.icon,
            image: s.image,
            title: s.name,
            description: s.description,
            link: `/services/${s.slug}`
          }))}
        />
      </ScrollReveal>
      
      <PortfolioShowcase 
        headline="Results That Matter"
        subheadline="Real projects, measurable impact"
        projects={portfolio.filter(p => p.featured)}
      />
      
      <Stats 
        headline="Delivering Excellence"
        stats={company.stats}
      />
      
      <ScrollReveal width="100%" className="w-full">
        <ProcessTimeline 
          headline="How We Work"
          description="A proven process that delivers results"
          phases={process.phases.slice(0, 3)}
        />
      </ScrollReveal>
      
      <CTABanner 
        headline="Ready to Transform Your Business with AI?"
        description="Let's discuss your project and how we can help"
        primaryCTA="Schedule a Call"
        secondaryCTA="Send Us a Message"
      />
    </>
  );
}
