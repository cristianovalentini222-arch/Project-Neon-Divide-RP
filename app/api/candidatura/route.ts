import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log("[v0] Received candidatura data:", data)

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL
    console.log("[v0] Webhook URL exists:", !!webhookUrl)

    if (!webhookUrl) {
      console.error("[v0] DISCORD_WEBHOOK_URL not configured")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    const roleLabels: Record<string, string> = {
      "lore-designer": "Lore Designer",
      "systems-designer": "Systems Designer",
      "lead-builder": "Lead Builder",
      "builder": "Builder",
      "technical-lead": "Technical Lead",
      "plugin-configurator": "Plugin Configurator",
    }

    const embed = {
      title: "Nuova Candidatura Staff",
      color: 0x9333ea, // Purple
      fields: [
        {
          name: "Nome / Nickname",
          value: data.nome || "Non specificato",
          inline: true,
        },
        {
          name: "Età",
          value: data.eta || "Non specificata",
          inline: true,
        },
        {
          name: "Discord",
          value: data.discord || "Non specificato",
          inline: true,
        },
        {
          name: "Ruolo Desiderato",
          value: roleLabels[data.ruolo] || data.ruolo || "Non specificato",
          inline: false,
        },
        {
          name: "Esperienza",
          value: data.esperienza || "Non specificata",
          inline: false,
        },
        {
          name: "Motivazione",
          value: data.motivazione || "Non specificata",
          inline: false,
        },
        {
          name: "Disponibilità",
          value: data.disponibilita || "Non specificata",
          inline: true,
        },
        {
          name: "Portfolio",
          value: data.portfolio || "Non specificato",
          inline: false,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Neon Divide - Candidature Staff",
      },
    }

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        embeds: [embed],
      }),
    })

    console.log("[v0] Discord response status:", response.status)

    if (!response.ok) {
      const errorText = await response.text()
      console.error("[v0] Discord webhook error:", response.status, errorText)
      return NextResponse.json(
        { error: "Failed to send to Discord" },
        { status: 500 }
      )
    }

    console.log("[v0] Candidatura sent successfully")
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing candidatura:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
