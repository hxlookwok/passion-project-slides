"use client"

import { useCallback, useEffect, useState } from "react"
import { ChevronLeft, ChevronRight, Presentation } from "lucide-react"
import { lessons } from "@/lib/slides-data"
import { TitleSlide } from "@/components/slides/title-slide"
import { HookSlide } from "@/components/slides/hook-slide"
import { FormulaSlide } from "@/components/slides/formula-slide"
import { BuildTogetherSlide } from "@/components/slides/build-together-slide"
import { WhereThisGoesSlide } from "@/components/slides/where-this-goes-slide"
import { OverviewSlide } from "@/components/slides/overview-slide"
import { LessonSlide } from "@/components/slides/lesson-slide"
import { OutcomeSlide } from "@/components/slides/outcome-slide"
import { cn } from "@/lib/utils"

type SlideItem = { id: string; label: string; render: () => React.ReactNode }

const slides: SlideItem[] = [
  { id: "title", label: "Title", render: () => <TitleSlide /> },
  { id: "hook", label: "Mini · Hook", render: () => <HookSlide /> },
  { id: "formula", label: "Mini · Formula", render: () => <FormulaSlide /> },
  { id: "build", label: "Mini · Build It", render: () => <BuildTogetherSlide /> },
  { id: "where", label: "Mini · Where It Goes", render: () => <WhereThisGoesSlide /> },
  { id: "overview", label: "Overview", render: () => <OverviewSlide /> },
  ...lessons.map((lesson) => ({
    id: `lesson-${lesson.number}`,
    label: `Lesson ${lesson.number}`,
    render: () => <LessonSlide lesson={lesson} />,
  })),
  { id: "outcome", label: "Outcome", render: () => <OutcomeSlide /> },
]

export function Deck() {
  const [index, setIndex] = useState(0)
  const total = slides.length

  const next = useCallback(() => setIndex((i) => Math.min(i + 1, total - 1)), [total])
  const prev = useCallback(() => setIndex((i) => Math.max(i - 1, 0)), [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") {
        e.preventDefault()
        next()
      } else if (e.key === "ArrowLeft") {
        e.preventDefault()
        prev()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [next, prev])

  return (
    <main className="flex min-h-svh flex-col bg-background">
      {/* Top bar */}
      <header className="flex items-center justify-between border-b border-border px-4 py-3 md:px-8">
        <div className="flex items-center gap-2 text-foreground">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Presentation className="h-4 w-4" />
          </div>
          <span className="text-sm font-bold tracking-tight">Curious Cardinals · Demo Deck</span>
        </div>
        <span className="text-sm font-medium tabular-nums text-muted-foreground">
          {index + 1} / {total}
        </span>
      </header>

      {/* Slide stage */}
      <div className="flex flex-1 items-stretch px-3 py-4 md:px-8 md:py-8">
        <section
          key={slides[index].id}
          aria-label={slides[index].label}
          className="animate-in fade-in slide-in-from-bottom-2 mx-auto flex w-full max-w-5xl flex-1 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-foreground/5 duration-300"
        >
          <div className="h-full w-full overflow-y-auto">{slides[index].render()}</div>
        </section>
      </div>

      {/* Controls */}
      <footer className="border-t border-border px-4 py-3 md:px-8">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <button
            onClick={prev}
            disabled={index === 0}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-4 py-2 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-4 w-4" />
            Prev
          </button>

          {/* Progress dots */}
          <div className="flex flex-1 items-center justify-center gap-1.5 overflow-x-auto">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Go to ${s.label}`}
                aria-current={i === index}
                className={cn(
                  "h-2 rounded-full transition-all",
                  i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground/50",
                )}
              />
            ))}
          </div>

          <button
            onClick={next}
            disabled={index === total - 1}
            className="inline-flex items-center gap-1.5 rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </footer>
    </main>
  )
}
