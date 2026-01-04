import Link from "next/link"
import { siteConfig, navigation } from "@/lib/data"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Github, Linkedin, Twitter, Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-[--color-gray-100] bg-[--color-gray-50] relative z-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tight">
              <span className="text-[--brand-green] text-2xl">▲</span>
              <span className="text-[--color-gray-900]">{siteConfig.name}</span>
            </Link>
            <p className="text-sm text-[--color-gray-400] max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex space-x-4">
              <a href={siteConfig.social.twitter} className="text-[--color-gray-400] hover:text-[--brand-green]">
                <Twitter className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.linkedin} className="text-[--color-gray-400] hover:text-[--brand-green]">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href={siteConfig.social.github} className="text-[--color-gray-400] hover:text-[--brand-green]">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-sm font-semibold text-[--color-gray-900]">Services</h3>
            <ul className="mt-4 space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[--color-gray-400] hover:text-[--brand-green]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-[--color-gray-900]">Company</h3>
            <ul className="mt-4 space-y-3">
              {navigation.main.filter(i => !['Services', 'Contact'].includes(i.name)).map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[--color-gray-400] hover:text-[--brand-green]">
                    {item.name}
                  </Link>
                </li>
              ))}
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-[--color-gray-400] hover:text-[--brand-green]">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-[--color-gray-900]">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-center gap-2 text-sm text-[--color-gray-400]">
                <MapPin className="h-4 w-4 text-[--brand-green]" />
                {siteConfig.address.city}, {siteConfig.address.country}
              </li>
              <li className="flex items-center gap-2 text-sm text-[--color-gray-400]">
                <Mail className="h-4 w-4 text-[--brand-green]" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-[--brand-green]">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-[--color-gray-400]">
                <Phone className="h-4 w-4 text-[--brand-green]" />
                <a href={`tel:${siteConfig.phone}`} className="hover:text-[--brand-green]">
                  {siteConfig.phone}
                </a>
              </li>
            </ul>
          </div>
          
        </div>
        <div className="mt-12 border-t border-[--color-gray-200] pt-8 text-center">
          <p className="text-sm text-[--color-gray-400]">
            &copy; {currentYear} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
