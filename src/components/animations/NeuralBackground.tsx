"use client"

import { useEffect, useRef } from "react"

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let width = canvas.width = window.innerWidth
    let height = canvas.height = window.innerHeight

    // Configuration
    const particleCount = 200 // More particles for density
    const particleSpeed = 2
    const connectionRadius = 150
    const flowFieldResolution = 20
    let rows = Math.floor(height / flowFieldResolution)
    let cols = Math.floor(width / flowFieldResolution)
    let flowField: number[] = []

    class Particle {
      x: number
      y: number
      history: {x: number, y: number}[]
      maxLength: number
      speed: number
      angle: number
      timer: number
      color: string

      constructor() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.history = []
        this.maxLength = Math.floor(Math.random() * 20 + 10)
        this.speed = Math.random() * 1 + 0.5
        this.angle = 0
        this.timer = this.maxLength * 2
        this.color = Math.random() > 0.8 ? "#fbbf24" : "#78350f" // Brand gold mix
      }

      reset() {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.history = []
        this.timer = this.maxLength * 2
      }

      update(flowField: number[]) {
        this.timer--
        if (this.timer < 1) {
            this.reset()
        }

        let x = Math.floor(this.x / flowFieldResolution)
        let y = Math.floor(this.y / flowFieldResolution)
        let index = x + y * cols
        
        if (flowField[index]) {
            this.angle = flowField[index]
        }
        
        this.x += Math.cos(this.angle) * this.speed
        this.y += Math.sin(this.angle) * this.speed

        // Boundary check
        if (this.x > width || this.x < 0 || this.y > height || this.y < 0) {
            this.reset()
        }

        // History trail
        this.history.push({ x: this.x, y: this.y })
        if (this.history.length > this.maxLength) {
          this.history.shift()
        }
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.moveTo(this.history[0].x, this.history[0].y)
        for(let i = 0; i < this.history.length; i++){
            ctx.lineTo(this.history[i].x, this.history[i].y)
        }
        ctx.strokeStyle = this.color
        ctx.lineWidth = 1
        ctx.stroke()
      }
    }

    const particles: Particle[] = []
    const init = () => {
        particles.length = 0
        for (let i = 0; i < 400; i++) {
            particles.push(new Particle())
        }
    }
    init()

    let time = 0
    const animate = () => {
      // Trail effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, width, height)
      
      // Calculate flow field (simple noise-like pattern)
      time += 0.005
      flowField = []
      for (let y = 0; y < rows; y++) {
          for (let x = 0; x < cols; x++) {
              let angle = (Math.cos(x * 0.1) + Math.sin(y * 0.1 + time)) * Math.PI 
              flowField.push(angle)
          }
      }

      particles.forEach(particle => {
        particle.update(flowField)
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      rows = Math.floor(height / flowFieldResolution)
      cols = Math.floor(width / flowFieldResolution)
      init()
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 bg-black opacity-60"
    />
  )
}
