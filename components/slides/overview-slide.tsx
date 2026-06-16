"use client"

import { roadmapPhases } from "@/lib/slides-data"
import { ArrowRight } from "lucide-react"

export function OverviewSlide() {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-10 md:px-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Program Overview</p>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        From idea to launch in 8 sessions
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
        Every week builds on the last: you will create, test, iterate, and
        launch something real.
      </p>

      <div className="mt-12 flex flex-col gap-4 md:flex-row md:items-stretch">
        {roadmapPhases.map((phase, i) => {
          const Icon = phase.icon
          return (
            <div key={phase.label} className="flex flex-1 items-center gap-4 md:flex-col md:gap-0">
              <div className="flex w-full flex-1 flex-col rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-accent-foreground">
                  Lessons {phase.lessons}
                </p>
                <p className="mt-1 text-xl font-bold text-card-foreground">{phase.label}</p>
              </div>
              {i < roadmapPhases.length - 1 && (
                <ArrowRight className="hidden h-6 w-6 shrink-0 self-center text-muted-foreground md:block md:-mx-1 md:rotate-0" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
