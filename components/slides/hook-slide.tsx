"use client"

import { miniHook } from "@/lib/slides-data"
import { Rocket, Building2, HeartHandshake, Megaphone, Globe, Lightbulb, MessageCircleQuestion } from "lucide-react"

const ideaIcons = [
  { icon: Rocket, label: "Startup" },
  { icon: HeartHandshake, label: "Nonprofit" },
  { icon: Megaphone, label: "Campaign" },
  { icon: Globe, label: "Website" },
  { icon: Lightbulb, label: "Invention" },
]

export function HookSlide() {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-8 text-center md:px-16">
      <div className="mx-auto mb-6 inline-flex items-center gap-2 rounded-full bg-accent/40 px-4 py-1.5 text-sm font-semibold text-accent-foreground">
        {miniHook.kicker}
      </div>

      <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-6xl">
        Build Your Own <span className="text-primary">Passion Project</span>
      </h1>
      <p className="mx-auto mt-4 max-w-xl text-pretty text-lg text-muted-foreground md:text-xl">
        {miniHook.subtitle}
      </p>

      <div className="mx-auto mt-10 flex flex-wrap items-center justify-center gap-3">
        {ideaIcons.map((item) => {
          const Icon = item.icon
          return (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-2xl border border-border bg-card px-5 py-4 shadow-sm"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </div>
              <span className="text-xs font-medium text-card-foreground">{item.label}</span>
            </div>
          )
        })}
      </div>

      <div className="mx-auto mt-10 flex max-w-2xl items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5 text-left">
        <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Think about this</p>
          <p className="mt-1 text-pretty text-base font-medium italic leading-relaxed text-foreground md:text-lg">
            &ldquo;{miniHook.studentQuestion}&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
