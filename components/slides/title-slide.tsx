"use client"

import { sessionType, studentProfile } from "@/lib/slides-data"
import { Rocket } from "lucide-react"

export function TitleSlide() {
  const SessionIcon = sessionType.icon
  return (
    <div className="flex h-full flex-col items-center justify-center px-6 text-center md:px-16">
      <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
        <SessionIcon className="h-4 w-4" />
        {sessionType.type}
      </div>

      <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-lg shadow-primary/30 md:h-24 md:w-24">
        <Rocket className="h-10 w-10 md:h-12 md:w-12" />
      </div>

      <h1 className="text-balance text-4xl font-bold leading-[1.05] tracking-tight text-foreground md:text-7xl">
        Build Your Own <span className="text-primary">Passion Project</span>
      </h1>
      <p className="mt-5 max-w-2xl text-pretty text-lg text-muted-foreground md:text-2xl">
        Lesson plan that helps turn your idea into reality in 8 weeks.
      </p>

      <div className="mt-12 grid w-full max-w-3xl grid-cols-2 gap-3 text-left md:grid-cols-4">
        {[
          { label: "Age", value: studentProfile.age },
          { label: "Grade", value: studentProfile.grade },
          { label: "Level", value: studentProfile.level },
          { label: "Personality", value: studentProfile.personality },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl border border-border bg-card p-4">
            <p className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">{item.label}</p>
            <p className="mt-1 text-sm font-medium leading-snug text-card-foreground">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
