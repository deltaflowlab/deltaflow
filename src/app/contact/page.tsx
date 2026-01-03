"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { contactForm, siteConfig } from "@/lib/data"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden flex flex-col pt-20">
      <StarField />
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 container mx-auto px-4 flex-grow flex flex-col justify-center py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left Col: Signal Source */}
            <div className="space-y-12">
                <div>
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-900/10 backdrop-blur-md mb-6"
                    >
                         <span className="text-xs font-mono text-blue-400 tracking-widest uppercase flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                            Signal Active
                         </span>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-6"
                    >
                        Initialize <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                            Contact
                        </span>
                    </motion.h1>
                    
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl text-blue-200/60 font-light max-w-md leading-relaxed"
                    >
                        Ready to deploy your AI infrastructure? Our secure channels are open for encrypted transmission.
                    </motion.p>
                </div>

                <div className="space-y-6">
                    <ContactCard 
                        icon={Mail} 
                        label="Encrypted Mail" 
                        value={siteConfig.email} 
                        href={`mailto:${siteConfig.email}`}
                        delay={0.3}
                    />
                    <ContactCard 
                        icon={Phone} 
                        label="Secure Line" 
                        value={siteConfig.phone} 
                        href={`tel:${siteConfig.phone}`}
                        delay={0.4}
                    />
                    <ContactCard 
                        icon={MapPin} 
                        label="Command Base" 
                        value={`${siteConfig.address.city}, ${siteConfig.address.country}`} 
                        delay={0.5}
                    />
                </div>
            </div>

            {/* Right Col: Transmission Form */}
            <div className="lg:pt-12">
                <CosmicForm />
            </div>

        </div>
      </div>
    </div>
  )
}

function ContactCard({ icon: Icon, label, value, href, delay }: any) {
    return (
        <motion.a 
            href={href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay }}
            className={cn(
                "group block relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300",
                href ? "hover:border-blue-500/50 hover:bg-blue-900/10 cursor-pointer" : "cursor-default"
            )}
        >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30 group-hover:scale-110 transition-transform duration-500">
                    <Icon className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                    <div className="text-xs font-mono text-blue-500/70 tracking-widest uppercase mb-1">{label}</div>
                    <div className="text-lg text-white font-medium group-hover:text-blue-200 transition-colors">{value}</div>
                </div>
            </div>
        </motion.a>
    )
}

import { sendContactEmail } from "@/actions/contact";
import { useFormStatus } from "react-dom";

// ... existing imports ...

function CosmicForm() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);
    const [formErrors, setFormErrors] = useState<Record<string, string[]>>({});
    const formRef = useRef<HTMLFormElement>(null);

    const clientAction = async (formData: FormData) => {
        setServerError(null);
        setFormErrors({});
        
        const result = await sendContactEmail(null, formData);
        
        if (result?.success) {
            setIsSuccess(true);
            formRef.current?.reset();
        } else if (result?.errors) {
            setFormErrors(result.errors);
        } else {
            setServerError(result?.message || "Something went wrong. Please try again.");
        }
    };

    if (isSuccess) {
        return (
            <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full min-h-[500px] flex flex-col items-center justify-center text-center p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl"
            >
                <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Transmission Received</h3>
                <p className="text-blue-200/60 max-w-xs mb-8">
                    Our team is decoding your message. Expect a secure response within 24 hours.
                </p>
                <button 
                    onClick={() => setIsSuccess(false)}
                    className="text-sm font-mono text-blue-400 hover:text-white transition-colors uppercase tracking-widest"
                >
                    Send Another Transmission
                </button>
            </motion.div>
        )
    }

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-xl relative overflow-hidden"
        >
            {/* Form Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/2" />

            <form ref={formRef} action={clientAction} className="space-y-8 relative z-10">
                {serverError && (
                    <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-200 text-sm">
                        {serverError}
                    </div>
                )}
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <CosmicInput 
                        label="Identity" 
                        name="name" 
                        placeholder="Full Name" 
                        required 
                        error={formErrors.name?.[0]}
                    />
                    <CosmicInput 
                        label="Frequency" 
                        name="email" 
                        placeholder="Email Address" 
                        type="email" 
                        required 
                        error={formErrors.email?.[0]}
                    />
                </div>
                
                <CosmicInput 
                    label="Organization" 
                    name="organization" 
                    placeholder="Company Name" 
                    error={formErrors.organization?.[0]}
                />
                
                <div className="space-y-3">
                    <label className="text-xs font-mono text-blue-300/50 uppercase tracking-widest ml-1">Objective</label>
                    <select 
                        name="objective"
                        className="w-full bg-white/5 border-b border-white/10 rounded-none px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 appearance-none"
                    >
                        <option className="bg-black text-white" value="AI Strategy & Consulting">AI Strategy & Consulting</option>
                        <option className="bg-black text-white" value="Custom Model Development">Custom Model Development</option>
                        <option className="bg-black text-white" value="Infrastructure Engineering">Infrastructure Engineering</option>
                        <option className="bg-black text-white" value="Other Inquiry">Other Inquiry</option>
                    </select>
                </div>

                <div className="space-y-3">
                    <label className="text-xs font-mono text-blue-300/50 uppercase tracking-widest ml-1">Transmission</label>
                    <textarea 
                        name="message"
                        rows={4}
                        className="w-full bg-white/5 border-b border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/10 transition-all duration-300 resize-none"
                        placeholder="Project details..."
                        required
                    />
                     {formErrors.message && (
                        <p className="text-red-400 text-xs mt-1">{formErrors.message[0]}</p>
                    )}
                </div>

                <SubmitButton />
            </form>
        </motion.div>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus();
    
    return (
        <button 
            type="submit"
            disabled={pending}
            className="w-full group relative overflow-hidden rounded-full btn-gradient p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50"
        >
            <div className="relative bg-black h-full w-full rounded-full px-8 py-4 transition-all duration-300 group-hover:bg-transparent">
                <div className="flex items-center justify-center gap-3">
                    {pending ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <span className="font-bold text-white tracking-wide uppercase">Initiate Launch</span>
                            <Send className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                        </>
                    )}
                </div>
            </div>
        </button>
    );
}

function CosmicInput({ label, name, type = "text", placeholder, required, error }: any) {
    return (
        <div className="space-y-3 group">
            <label className="text-xs font-mono text-blue-300/50 uppercase tracking-widest ml-1 group-focus-within:text-blue-400 transition-colors">
                {label} {required && <span className="text-red-400">*</span>}
            </label>
            <input 
                name={name}
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full bg-transparent border-b border-white/10 px-4 py-2 text-white placeholder-white/20 focus:outline-none focus:border-blue-500 focus:bg-white/5 transition-all duration-300 rounded-t-lg"
            />
            {error && <p className="text-red-400 text-xs">{error}</p>}
        </div>
    )
}

function StarField() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
        const ctx = canvas.getContext('2d')
        if (!ctx) return

        let animationFrameId: number
        const stars: { x: number, y: number, size: number, opacity: number, speed: number }[] = []
        const numStars = 150

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        const initStars = () => {
             for (let i = 0; i < numStars; i++) {
                 stars.push({
                     x: Math.random() * canvas.width,
                     y: Math.random() * canvas.height,
                     size: Math.random() * 2,
                     opacity: Math.random(),
                     speed: Math.random() * 0.2 + 0.1
                 })
             }
        }

        const animate = () => {
             if (!ctx) return
             ctx.clearRect(0, 0, canvas.width, canvas.height)
             
             for (let i = 0; i < stars.length; i++) {
                 const star = stars[i]
                 star.y -= star.speed // Float upwards
                 
                 // Reset if off screen
                 if (star.y < 0) {
                     star.y = canvas.height
                     star.x = Math.random() * canvas.width
                 }

                 ctx.beginPath()
                 ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
                 ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
                 ctx.fill()
             }
             
             animationFrameId = requestAnimationFrame(animate)
        }

        resize()
        initStars()
        animate()
        
        window.addEventListener('resize', resize)
        return () => {
            window.removeEventListener('resize', resize)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-40 pointer-events-none" />
}
