"use client"

import Link from "next/link"
import { Scroll, Settings, Hammer, Wrench, Code, Cog, ChevronRight, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"

function useInView(threshold: number) {
  const [isInView, setIsInView] = useState(false)
  const ref = (node: HTMLElement | null) => {
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }
  return { ref, isInView }
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background grid effect */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: `
              linear-gradient(oklch(0.7 0.25 300 / 0.1) 1px, transparent 1px),
              linear-gradient(90deg, oklch(0.7 0.25 300 / 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-cyan/15 rounded-full blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <p className="mb-6 text-sm text-neon-cyan tracking-widest uppercase font-mono">
          Server Minecraft Roleplay
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-8xl text-glow-purple animate-flicker" style={{ fontFamily: 'var(--font-heading)' }}>
          NEON DIVIDE
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Un mondo cyberpunk in costruzione. Una storia ancora da scrivere. 
          Un progetto ambizioso che ha bisogno delle persone giuste.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/candidatura"
            className="group border border-neon-purple bg-neon-purple/10 px-8 py-4 text-sm font-medium text-foreground hover:bg-neon-purple/20 transition-all flex items-center gap-2 box-glow-purple"
          >
            Candidati ora
            <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#progetto"
            className="border border-neon-cyan/50 px-8 py-4 text-sm font-medium text-neon-cyan hover:bg-neon-cyan/10 transition-all"
          >
            Scopri il progetto
          </Link>
        </div>
      </div>
    </section>
  )
}

export function ProjectSection() {
  const [isInView, setIsInView] = useState(true)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  const [selectedCard, setSelectedCard] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    const node = sectionRef.current
    if (!node) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.15 }
    )
    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      title: "Lore & Worldbuilding",
      description: "Un universo narrativo profondo con fazioni, conflitti e storie intrecciate. Ogni angolo della mappa racconta una storia.",
      color: "purple",
      details: {
        subtitle: "Un mondo da scoprire",
        content: [
          "Fazioni in lotta per il controllo della citta, ognuna con la propria storia e motivazioni.",
          "Personaggi iconici che hanno plasmato il destino di Neon Divide.",
          "Misteri nascosti nelle profondita della megalopoli, in attesa di essere svelati.",
          "Eventi storici che hanno portato alla situazione attuale - guerre, tradimenti, alleanze infrante."
        ],
        teaser: "La storia di Neon Divide e ancora in fase di scrittura. Vuoi contribuire?"
      }
    },
    {
      title: "Gameplay & Sistemi",
      description: "Meccaniche di gioco pensate per il roleplay: economia, progressione, reputazione e interazioni tra fazioni.",
      color: "cyan",
      details: {
        subtitle: "Meccaniche immersive",
        content: [
          "Sistema economico dinamico che riflette le azioni dei giocatori.",
          "Progressione basata sulle scelte roleplay, non sul grinding.",
          "Reputazione con le fazioni che influenza le opportunita disponibili.",
          "Sistemi di crafting e commercio integrati nella narrativa del mondo."
        ],
        teaser: "I sistemi sono in fase di progettazione. Cerchiamo Systems Designer!"
      }
    },
    {
      title: "Mappa & Costruzioni",
      description: "Non solo una megalopoli: zone industriali, quartieri dimenticati, e terre desolate oltre i confini della citta.",
      color: "pink",
      details: {
        subtitle: "Un mondo vasto da esplorare",
        content: [
          "La megalopoli centrale con i suoi grattacieli illuminati al neon.",
          "Quartieri periferici dove la legge non arriva.",
          "Zone industriali abbandonate, rifugio di fuorilegge e ribelli.",
          "Le Terre Desolate oltre le mura - un territorio ostile e misterioso."
        ],
        teaser: "La mappa e in costruzione. Cerchiamo Builder con esperienza!"
      }
    },
  ]

  return (
    <>
      <section id="progetto" ref={sectionRef} className="relative py-24 border-t border-border overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-neon-purple/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <p className="text-sm text-neon-cyan tracking-widest uppercase mb-4 font-mono">Project</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-purple" style={{ fontFamily: 'var(--font-heading)' }}>
            Neon Divide Roleplay
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-lg">
              Stiamo costruendo un <span className="text-neon-purple">server Minecraft roleplay</span>{" "}
              ambientato in un futuro cyberpunk. Una megalopoli in rovina, terre desolate ai suoi confini, 
              fazioni in lotta per il controllo e tecnologia che ha superato l&apos;umanita.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il mondo non si ferma alle mura della citta. Oltre i grattacieli e i neon, esistono 
              <span className="text-neon-cyan"> zone dimenticate</span>, territori ostili dove la legge 
              non esiste e solo i piu forti sopravvivono.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Il progetto e nelle sue fasi iniziali e cerchiamo persone motivate che vogliano 
              contribuire alla creazione di questo mondo. Non cerchiamo semplici volontari, 
              ma <span className="text-neon-pink">collaboratori</span> che credano nel progetto.
            </p>
          </div>

          <div className="space-y-4">
            {cards.map((card, index) => (
              <div
                key={card.title}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedCard(index)}
                className={`border bg-card/50 p-6 transition-all duration-300 cursor-pointer ${
                  card.color === "purple"
                    ? "border-neon-purple/30 hover:border-neon-purple"
                    : card.color === "cyan"
                    ? "border-neon-cyan/30 hover:border-neon-cyan"
                    : "border-neon-pink/30 hover:border-neon-pink"
                } ${
                  hoveredCard === index 
                    ? "scale-105 bg-card/80" 
                    : hoveredCard !== null 
                    ? "scale-98 opacity-60" 
                    : ""
                }`}
                style={{
                  boxShadow: hoveredCard === index
                    ? card.color === "purple"
                      ? "0 0 30px oklch(0.7 0.25 300 / 0.5), 0 0 60px oklch(0.7 0.25 300 / 0.25)"
                      : card.color === "cyan"
                      ? "0 0 30px oklch(0.7 0.2 195 / 0.5), 0 0 60px oklch(0.7 0.2 195 / 0.25)"
                      : "0 0 30px oklch(0.7 0.25 330 / 0.5), 0 0 60px oklch(0.7 0.25 330 / 0.25)"
                    : undefined,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <h4 
                  className={`font-medium mb-2 transition-all duration-300 ${
                    card.color === "purple" 
                      ? "text-neon-purple" 
                      : card.color === "cyan" 
                      ? "text-neon-cyan" 
                      : "text-neon-pink"
                  } ${hoveredCard === index ? "scale-105" : ""}`} 
                  style={{ fontFamily: 'var(--font-heading)', transformOrigin: 'left' }}
                >
                  {card.title}
                </h4>
                <p className={`text-sm text-muted-foreground transition-all duration-300 ${
                  hoveredCard === index ? "text-foreground/80" : ""
                }`}>
                  {card.description}
                </p>
                <p className={`text-xs mt-3 transition-all duration-300 ${
                  card.color === "purple" ? "text-neon-purple/70" : card.color === "cyan" ? "text-neon-cyan/70" : "text-neon-pink/70"
                }`}>
                  Clicca per saperne di piu
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Modal */}
    {selectedCard !== null && (
      <div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
        onClick={() => setSelectedCard(null)}
      >
        <div 
          className={`relative max-w-lg w-full border bg-background p-8 shadow-2xl ${
            cards[selectedCard].color === "purple"
              ? "border-neon-purple box-glow-purple"
              : cards[selectedCard].color === "cyan"
              ? "border-neon-cyan box-glow-cyan"
              : "border-neon-pink box-glow-pink"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setSelectedCard(null)}
            className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-5 w-5" />
          </button>

          <h3 
            className={`text-2xl font-bold mb-2 ${
              cards[selectedCard].color === "purple" 
                ? "text-neon-purple" 
                : cards[selectedCard].color === "cyan" 
                ? "text-neon-cyan" 
                : "text-neon-pink"
            }`}
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {cards[selectedCard].title}
          </h3>
          
          <p className="text-muted-foreground text-sm mb-6">
            {cards[selectedCard].details.subtitle}
          </p>

          <ul className="space-y-3 mb-6">
            {cards[selectedCard].details.content.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                  cards[selectedCard].color === "purple" 
                    ? "bg-neon-purple" 
                    : cards[selectedCard].color === "cyan" 
                    ? "bg-neon-cyan" 
                    : "bg-neon-pink"
                }`} />
                {item}
              </li>
            ))}
          </ul>

          <p className={`text-sm font-medium ${
            cards[selectedCard].color === "purple" 
              ? "text-neon-purple" 
              : cards[selectedCard].color === "cyan" 
              ? "text-neon-cyan" 
              : "text-neon-pink"
          }`}>
            {cards[selectedCard].details.teaser}
          </p>
        </div>
      </div>
    )}
    </>
  )
}

export function RolesSection() {
  const roles = [
    {
      icon: Scroll,
      title: "Lore Designer",
      description: "Scrivi e sviluppa la narrativa del mondo, le storie delle fazioni e gli eventi che daranno vita al server.",
      color: "purple" as const,
    },
    {
      icon: Settings,
      title: "Systems Designer",
      description: "Progetta i sistemi di gameplay: economia, progressione, fazioni e meccaniche roleplay.",
      color: "cyan" as const,
    },
    {
      icon: Hammer,
      title: "Lead Builder",
      description: "Coordina il team di builder e definisci la direzione artistica della mappa. Esperienza leadership richiesta.",
      color: "purple" as const,
    },
    {
      icon: Wrench,
      title: "Builder",
      description: "Costruisci la megalopoli: grattacieli, quartieri, zone industriali e molto altro. Portfolio richiesto.",
      color: "cyan" as const,
    },
    {
      icon: Code,
      title: "Technical Lead",
      description: "Guida le scelte tecniche del server, coordina lo sviluppo e definisci l'architettura dei sistemi.",
      color: "purple" as const,
    },
    {
      icon: Cog,
      title: "Plugin Configurator",
      description: "Configura e ottimizza i plugin del server per creare l'esperienza di gioco desiderata.",
      color: "cyan" as const,
    },
  ]

  return (
    <section className="relative py-24 border-t border-border bg-card/30">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-full bg-gradient-to-r from-neon-cyan/5 to-transparent pointer-events-none" />
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
        <div className="mb-16">
          <p className="text-sm text-neon-cyan tracking-widest uppercase mb-4 font-mono">Ruoli Disponibili</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-purple" style={{ fontFamily: 'var(--font-heading)' }}>
            Stiamo cercando
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            Abbiamo bisogno di persone motivate e competenti per costruire questo progetto insieme.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role) => (
            <div
              key={role.title}
              className={`border bg-background/50 p-6 transition-all hover:scale-[1.02] ${
                role.color === 'purple' 
                  ? 'border-neon-purple/30 hover:border-neon-purple/60 hover:box-glow-purple' 
                  : 'border-neon-cyan/30 hover:border-neon-cyan/60 hover:box-glow-cyan'
              }`}
            >
              <role.icon className={`h-6 w-6 mb-4 ${role.color === 'purple' ? 'text-neon-purple' : 'text-neon-cyan'}`} />
              <h3 className={`font-medium mb-2 ${role.color === 'purple' ? 'text-neon-purple' : 'text-neon-cyan'}`} style={{ fontFamily: 'var(--font-heading)' }}>
                {role.title}
              </h3>
              <p className="text-sm text-muted-foreground">{role.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/candidatura"
            className="inline-flex items-center gap-2 border border-neon-purple bg-neon-purple/10 px-8 py-4 text-sm font-medium text-foreground hover:bg-neon-purple/20 transition-all box-glow-purple"
          >
            Invia la tua candidatura
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <span className="text-sm font-medium text-neon-purple text-glow-purple" style={{ fontFamily: 'var(--font-heading)' }}>
              NEON DIVIDE
            </span>
            <p className="text-xs text-muted-foreground mt-1">Server Minecraft Roleplay</p>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              Home
            </Link>
            <Link href="/candidatura" className="text-sm text-muted-foreground hover:text-neon-cyan transition-colors">
              Candidature
            </Link>
          </div>

          <p className="text-xs text-muted-foreground font-mono">
            Project Neon Divide
          </p>
        </div>
      </div>
    </footer>
  )
}
