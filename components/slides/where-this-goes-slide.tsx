"use client"

import { projectPath, whereThisGoesOutcomes } from "@/lib/slides-data"
import { ArrowRight, CheckCircle2, MessageCircleQuestion } from "lucide-react"

export function WhereThisGoesSlide() {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-8 md:px-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Where This Goes</p>
      <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
        What we build in 8 sessions
      </h2>

      {/* Timeline */}
      <div className="mt-8 flex flex-wrap items-center gap-2 md:flex-nowrap">
        {projectPath.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.label} className="flex flex-1 items-center gap-2">
              <div className="flex w-full flex-1 flex-col items-center gap-2 rounded-2xl border border-border bg-card p-4 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-card-foreground">{step.label}</span>
              </div>
              {i < projectPath.length - 1 && (
                <ArrowRight className="hidden h-5 w-5 shrink-0 text-muted-foreground md:block" />
              )}
            </div>
          )
        })}
      </div>

      {/* Outcomes */}
      <div className="mt-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">
          Where it could lead
        </p>
        <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {whereThisGoesOutcomes.map((o) => (
            <div key={o} className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
              <span className="text-sm font-medium text-card-foreground">{o}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-start gap-3 rounded-2xl border border-primary/30 bg-primary/5 p-5">
        <MessageCircleQuestion className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-primary">Reflection question</p>
          <p className="mt-1 text-pretty text-base font-medium italic leading-relaxed text-foreground md:text-lg">
            &ldquo;If we continued this project, what would be the first step you&apos;d want to try this week?&rdquo;
          </p>
        </div>
      </div>
    </div>
  )
}
