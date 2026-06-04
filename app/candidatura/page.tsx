"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/sections"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

type FormState = "idle" | "submitting" | "success" | "error"

export default function CandidaturaPage() {
  const [formState, setFormState] = useState<FormState>("idle")
  const [formData, setFormData] = useState({
    nome: "",
    eta: "",
    discord: "",
    ruolo: "",
    esperienza: "",
    motivazione: "",
    disponibilita: "",
    portfolio: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormState("submitting")

    try {
      const response = await fetch("/api/candidatura", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormState("success")
      } else {
        setFormState("error")
      }
    } catch {
      setFormState("error")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  if (formState === "success") {
    return (
      <main className="relative min-h-screen">
        <Navbar />
        <div className="min-h-screen flex items-center justify-center px-4 pt-16">
          <div className="max-w-md text-center">
            <CheckCircle className="h-12 w-12 text-neon-cyan mx-auto mb-6" />
            <h1 className="text-2xl font-bold mb-4 text-glow-purple" style={{ fontFamily: 'var(--font-heading)' }}>
              Candidatura inviata
            </h1>
            <p className="text-muted-foreground mb-8">
              Grazie per il tuo interesse! Ti contatteremo su Discord il prima possibile.
            </p>
            <a
              href="/"
              className="inline-flex items-center gap-2 border border-neon-purple bg-neon-purple/10 px-6 py-3 text-sm font-medium text-foreground hover:bg-neon-purple/20 transition-all box-glow-purple"
            >
              Torna alla home
            </a>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="relative min-h-screen">
      <Navbar />
      
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-neon-cyan/10 rounded-full blur-3xl" />
      </div>

      <section className="relative pt-24 pb-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-neon-cyan tracking-widest uppercase mb-4 font-mono">
              Candidature Staff
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-glow-purple" style={{ fontFamily: 'var(--font-heading)' }}>
              Unisciti al team
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl">
              Compila il form qui sotto per candidarti. Leggi attentamente i requisiti
              per ogni ruolo prima di inviare la tua candidatura.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Info */}
            <div className="border border-neon-purple/30 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="text-sm text-neon-cyan tracking-widest uppercase mb-6 font-mono">
                Informazioni personali
              </h2>

              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium mb-2 text-foreground">
                    Nome / Nickname *
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full border border-neon-purple/30 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label htmlFor="eta" className="block text-sm font-medium mb-2 text-foreground">
                    Et&agrave; *
                  </label>
                  <input
                    type="number"
                    id="eta"
                    name="eta"
                    required
                    min="13"
                    max="99"
                    value={formData.eta}
                    onChange={handleChange}
                    className="w-full border border-neon-purple/30 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="La tua et&agrave;"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="discord" className="block text-sm font-medium mb-2 text-foreground">
                    Username Discord *
                  </label>
                  <input
                    type="text"
                    id="discord"
                    name="discord"
                    required
                    value={formData.discord}
                    onChange={handleChange}
                    className="w-full border border-neon-purple/30 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="es. username"
                  />
                </div>
              </div>
            </div>

            {/* Role Selection */}
            <div className="border border-neon-cyan/30 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="text-sm text-neon-cyan tracking-widest uppercase mb-6 font-mono">
                Ruolo desiderato
              </h2>

              <div>
                <label htmlFor="ruolo" className="block text-sm font-medium mb-2 text-foreground">
                  Seleziona un ruolo *
                </label>
                <select
                  id="ruolo"
                  name="ruolo"
                  required
                  value={formData.ruolo}
                  onChange={handleChange}
                  className="w-full border border-neon-cyan/30 bg-background/50 px-4 py-3 text-sm text-foreground focus:border-neon-cyan focus:outline-none transition-colors"
                >
                  <option value="">Seleziona un ruolo...</option>
                  <option value="lore-designer">Lore Designer</option>
                  <option value="systems-designer">Systems Designer</option>
                  <option value="lead-builder">Lead Builder</option>
                  <option value="builder">Builder</option>
                  <option value="technical-lead">Technical Lead</option>
                  <option value="plugin-configurator">Plugin Configurator</option>
                </select>
              </div>
            </div>

            {/* Experience */}
            <div className="border border-neon-purple/30 bg-card/50 p-6 backdrop-blur-sm">
              <h2 className="text-sm text-neon-cyan tracking-widest uppercase mb-6 font-mono">
                Esperienza e motivazione
              </h2>

              <div className="space-y-6">
                <div>
                  <label htmlFor="esperienza" className="block text-sm font-medium mb-2 text-foreground">
                    Descrivi la tua esperienza *
                  </label>
                  <textarea
                    id="esperienza"
                    name="esperienza"
                    required
                    rows={4}
                    value={formData.esperienza}
                    onChange={handleChange}
                    className="w-full border border-neon-purple/30 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none transition-colors resize-none"
                    placeholder="Racconta la tua esperienza relativa al ruolo per cui ti candidi..."
                  />
                </div>

                <div>
                  <label htmlFor="motivazione" className="block text-sm font-medium mb-2 text-foreground">
                    Perch&eacute; vuoi unirti a noi? *
                  </label>
                  <textarea
                    id="motivazione"
                    name="motivazione"
                    required
                    rows={4}
                    value={formData.motivazione}
                    onChange={handleChange}
                    className="w-full border border-neon-purple/30 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none transition-colors resize-none"
                    placeholder="Cosa ti attrae di questo progetto? Cosa puoi portare al team?"
                  />
                </div>

                <div>
                  <label htmlFor="disponibilita" className="block text-sm font-medium mb-2 text-foreground">
                    Disponibilit&agrave; settimanale *
                  </label>
                  <input
                    type="text"
                    id="disponibilita"
                    name="disponibilita"
                    required
                    value={formData.disponibilita}
                    onChange={handleChange}
                    className="w-full border border-neon-purple/30 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="es. 10-15 ore a settimana, principalmente sera"
                  />
                </div>

                <div>
                  <label htmlFor="portfolio" className="block text-sm font-medium mb-2 text-foreground">
                    Portfolio / Link *
                  </label>
                  <input
                    type="text"
                    id="portfolio"
                    name="portfolio"
                    required
                    value={formData.portfolio}
                    onChange={handleChange}
                    className="w-full border border-neon-purple/30 bg-background/50 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="Link a portfolio, GitHub, PlanetMinecraft, ecc."
                  />
                  <p className="text-xs text-muted-foreground mt-2">
                    Inserisci un link che mostri i tuoi lavori precedenti
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
              <p className="text-xs text-muted-foreground">
                * Campi obbligatori
              </p>

              <button
                type="submit"
                disabled={formState === "submitting"}
                className="border border-neon-purple bg-neon-purple/10 px-8 py-4 text-sm font-medium text-foreground hover:bg-neon-purple/20 transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed box-glow-purple"
              >
                {formState === "submitting" ? (
                  <>
                    <span className="h-4 w-4 border-2 border-neon-purple border-t-transparent rounded-full animate-spin" />
                    Invio in corso...
                  </>
                ) : (
                  <>
                    Invia candidatura
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>

            {formState === "error" && (
              <div className="flex items-center gap-2 text-destructive text-sm">
                <AlertCircle className="h-4 w-4" />
                Si &egrave; verificato un errore. Riprova pi&ugrave; tardi.
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </main>
  )
}
