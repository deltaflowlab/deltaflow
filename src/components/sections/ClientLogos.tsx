"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface ClientLogosProps {
  headline: string
  logos: Array<{ name: string; logo: string; id: string }>
}

export function ClientLogos({ headline, logos }: ClientLogosProps) {
  return (
    <section className="bg-black py-24 relative overflow-hidden">
        {/* Background Network FX */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />
        </div>

      <div className="container mx-auto px-4 relative z-10">
         <div className="text-center mb-20">
            <h3 className="text-sm font-mono text-blue-500 tracking-widest uppercase mb-4">
                Global Network
            </h3>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
               Powering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Industry Leaders</span>
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-transparent mx-auto rounded-full" />
         </div>

         <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
            {logos.map((client, i) => (
                <PartnerNode key={client.id} client={client} index={i} />
            ))}
         </div>
      </div>
    </section>
  )
}

function PartnerNode({ client, index }: { client: { name: string }, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            whileHover={{ scale: 1.1 }}
            className="group relative"
        >
            {/* Connection Lines (Pseudo) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:via-blue-500/50 transition-all duration-500 -z-10 opacity-0 group-hover:opacity-100 rotate-45" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent group-hover:via-blue-500/50 transition-all duration-500 -z-10 opacity-0 group-hover:opacity-100 -rotate-45" />

            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center p-4 group-hover:border-blue-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)] transition-all duration-500">
                {/* Rotating Ring */}
                <div className="absolute inset-0 rounded-full border border-blue-500/10 border-t-blue-500/50 rotate-0 group-hover:rotate-180 transition-transform duration-1000 ease-in-out" />
                
                {/* Inner Glow */}
                <div className="absolute inset-2 rounded-full bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <span className="text-center font-mono text-xs md:text-sm text-blue-200/60 group-hover:text-white font-bold tracking-widest uppercase transition-colors">
                    {client.name}
                </span>
            </div>
        </motion.div>
    )
}
