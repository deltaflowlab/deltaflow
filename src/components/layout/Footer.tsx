import Link from "next/link"
import { siteConfig, navigation } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black border-t border-white/10 relative z-10 pt-20 pb-10 shadow-[0_-1px_10px_rgba(251,191,36,0.1)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          
          {/* Brand Column (Span 4) */}
          <div className="md:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <span className="text-2xl text-white font-black tracking-tighter uppercase group-hover:text-amber-400 transition-colors">DeltaFlow</span>
            </Link>
            <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            
            <div className="flex gap-4 pt-2">
               {/* Minimal Social Icons */}
               <SocialLink href={siteConfig.social.twitter} icon={Twitter} />
               <SocialLink href={siteConfig.social.linkedin} icon={Linkedin} />
               <SocialLink href={siteConfig.social.github} icon={Github} />
            </div>
          </div>

          {/* Links Columns (Span 8 - Grid of 3) */}
          <div className="md:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
             
             {/* Services */}
             <div>
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-6">Capabilities</h3>
                <ul className="space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-500 hover:text-amber-400 transition-colors block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Company */}
             <div>
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-6">Company</h3>
                <ul className="space-y-4">
                  {navigation.main.filter(i => !['Services', 'Contact'].includes(i.name)).map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-500 hover:text-amber-400 transition-colors block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
             </div>

             {/* Legal & Contact */}
             <div>
                <h3 className="text-xs font-mono font-bold text-white uppercase tracking-widest mb-6">Legal</h3>
                <ul className="space-y-4">
                   {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="text-sm text-gray-500 hover:text-amber-400 transition-colors block">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                   <li>
                      <Link href="/contact" className="text-sm text-gray-500 hover:text-amber-400 transition-colors block mt-8">
                        Contact Support
                      </Link>
                   </li>
                </ul>
             </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
           <p className="text-xs text-gray-600 font-mono">
             &copy; {currentYear} DeltaFlow Intelligence Lab. All systems operational.
           </p>
           <div className="flex gap-6">
              <span className="flex items-center gap-2 text-xs text-amber-500/50 font-mono uppercase">
                 <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
                 Dhaka, Bangladesh
              </span>
           </div>
        </div>

      </div>
    </footer>
  )
}

function SocialLink({ href, icon: Icon }: any) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-amber-400 hover:border-amber-400/50 hover:bg-amber-400/10 hover:shadow-[0_0_20px_rgba(251,191,36,0.2)] transition-all duration-300"
    >
      <Icon className="w-4 h-4" />
    </a>
  )
}

