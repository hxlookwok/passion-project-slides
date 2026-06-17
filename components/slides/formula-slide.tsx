"use client"

import { formulaSteps } from "@/lib/slides-data"
import { ArrowRight } from "lucide-react"

export function FormulaSlide() {
  return (
    <div className="flex h-full flex-col justify-center px-6 py-10 md:px-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">The Idea Formula</p>
      <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        The Passion Project Formula
      </h2>
      <p className="mt-4 max-w-2xl text-pretty text-base text-muted-foreground md:text-lg">
        Most real projects start with this simple formula. Let&apos;s try it with something you care about.
      </p>

      <div className="mt-12 flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        {formulaSteps.map((step, i) => {
          const Icon = step.icon
          return (
            <div key={step.word} className="flex flex-1 flex-col items-center gap-4 md:flex-row md:items-center">
              <div className="flex w-full flex-1 flex-col items-center rounded-2xl border border-border bg-card p-6 text-center shadow-sm">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/25">
                  <Icon className="h-7 w-7" />
                </div>
                <p className="mt-4 text-2xl font-bold text-card-foreground">{step.word}</p>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">{step.question}</p>
              </div>
              {i < formulaSteps.length - 1 && (
                <ArrowRight className="mx-auto h-7 w-7 shrink-0 rotate-90 text-primary md:rotate-0" />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
