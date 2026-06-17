"use client"

import { useState } from "react"
import { buildExample, passionExamples } from "@/lib/slides-data"
import { HeartHandshake, Brain, Rocket, Wand2, RotateCcw } from "lucide-react"

export function BuildTogetherSlide() {
  const [passion, setPassion] = useState("")
  const [problem, setProblem] = useState("")
  const [project, setProject] = useState("")

  const fillExample = () => {
    setPassion(buildExample.passion)
    setProblem(buildExample.problem)
    setProject(buildExample.project)
  }

  const reset = () => {
    setPassion("")
    setProblem("")
    setProject("")
  }

  return (
    <div className="flex h-full flex-col justify-center px-6 py-8 md:px-16">
      <p className="text-sm font-semibold uppercase tracking-wide text-primary">Build It Together</p>
      <h2 className="mt-2 text-balance text-2xl font-bold tracking-tight text-foreground md:text-4xl">
        Let&apos;s turn your idea into a project
      </h2>

      <div className="mt-6 grid flex-1 gap-4 md:grid-cols-3 md:content-start">
        {/* Passion */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-primary">
            <HeartHandshake className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wide">1. Passion</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {passionExamples.map((ex) => (
              <button
                key={ex}
                onClick={() => setPassion(ex)}
                className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                {ex}
              </button>
            ))}
          </div>
          <input
            value={passion}
            onChange={(e) => setPassion(e.target.value)}
            placeholder="What do you care about?"
            className="mt-3 w-full rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 placeholder:text-muted-foreground focus:ring-2"
          />
        </div>

        {/* Problem */}
        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-primary">
            <Brain className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wide">2. Problem</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            What problem do people have in this area?
          </p>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="Something frustrating or broken..."
            rows={3}
            className="mt-3 w-full resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 placeholder:text-muted-foreground focus:ring-2"
          />
        </div>

        {/* Project */}
        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
          <div className="flex items-center gap-2 text-primary">
            <Rocket className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wide">3. Project</p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            One small thing you could create to help?
          </p>
          <textarea
            value={project}
            onChange={(e) => setProject(e.target.value)}
            placeholder="What could you build or start?"
            rows={3}
            className="mt-3 w-full resize-none rounded-xl border border-input bg-background px-3 py-2 text-sm text-foreground outline-none ring-primary/40 placeholder:text-muted-foreground focus:ring-2"
          />
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-pretty text-sm italic text-muted-foreground">
          We didn&apos;t start with &ldquo;start a nonprofit&rdquo; — we started with something you care about.
        </p>
        <div className="flex gap-2">
          <button
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold text-card-foreground transition-colors hover:bg-secondary"
          >
            <RotateCcw className="h-4 w-4" />
            Reset
          </button>
          <button
            onClick={fillExample}
            className="inline-flex items-center gap-1.5 rounded-xl bg-accent px-3 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
          >
            <Wand2 className="h-4 w-4" />
            Show example
          </button>
        </div>
      </div>
    </div>
  )
}
