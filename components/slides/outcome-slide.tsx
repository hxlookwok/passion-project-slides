"use client"

import { finalOutcomes, keySkills } from "@/lib/slides-data"

export function OutcomeSlide() {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-10 md:px-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">The Final Outcome</p>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        What success looks like
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
        By week 8, the student walks away with something real they built and launched themselves.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {finalOutcomes.map((o) => {
          const Icon = o.icon
          return (
            <div key={o.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Icon className="h-6 w-6" />
              </div>
              <p className="mt-4 text-lg font-bold text-card-foreground">{o.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{o.description}</p>
            </div>
          )
        })}
      </div>

      <div className="mt-8 rounded-2xl bg-accent/30 p-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-accent-foreground">Key skills students learn</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {keySkills.map((s) => {
            const Icon = s.icon
            return (
              <span
                key={s.title}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-card-foreground"
              >
                <Icon className="h-4 w-4 text-primary" />
                {s.title}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
