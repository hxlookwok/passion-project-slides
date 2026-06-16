"use client"

import type { Lesson } from "@/lib/slides-data"
import { Flag, MessageCircleQuestion, Sparkles, Target, BookOpen } from "lucide-react"

export function LessonSlide({ lesson }: { lesson: Lesson }) {
  const Icon = lesson.icon
  return (
    <div className="flex h-full flex-col justify-center px-6 py-8 md:px-16">
      <div className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-md shadow-primary/25 md:h-16 md:w-16">
          <Icon className="h-7 w-7 md:h-8 md:w-8" />
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">Lesson {lesson.number}</p>
          <h2 className="text-balance text-2xl font-bold leading-tight tracking-tight text-foreground md:text-4xl">
            {lesson.title}
          </h2>
        </div>
      </div>

      <div className="mt-8 grid flex-1 gap-4 md:grid-cols-2 md:content-start">
        <InfoCard icon={Target} label="Session goal" tone="primary">
          {lesson.goal}
        </InfoCard>

        <div className="rounded-2xl border border-border bg-card p-5">
          <div className="flex items-center gap-2 text-accent-foreground">
            <Sparkles className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wide">Skills learned</p>
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {lesson.skills.map((s) => (
              <span
                key={s}
                className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        <InfoCard icon={Sparkles} label="Interactive activity">
          {lesson.activity}
        </InfoCard>

        <InfoCard icon={BookOpen} label="Homework">
          {lesson.homework}
        </InfoCard>

        <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 md:col-span-2">
          <div className="flex items-center gap-2 text-primary">
            <MessageCircleQuestion className="h-4 w-4" />
            <p className="text-xs font-semibold uppercase tracking-wide">Ask the student</p>
          </div>
          <p className="mt-2 text-pretty text-base font-medium italic leading-relaxed text-foreground md:text-lg">
            &ldquo;{lesson.prompt}&rdquo;
          </p>
        </div>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-2xl bg-accent/30 px-5 py-3">
        <Flag className="h-5 w-5 shrink-0 text-accent-foreground" />
        <p className="text-sm font-semibold text-accent-foreground md:text-base">
          Milestone: <span className="text-foreground">{lesson.milestone}</span>
        </p>
      </div>
    </div>
  )
}

function InfoCard({
  icon: Icon,
  label,
  children,
  tone = "muted",
}: {
  icon: typeof Target
  label: string
  children: React.ReactNode
  tone?: "muted" | "primary"
}) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5">
      <div className={tone === "primary" ? "flex items-center gap-2 text-primary" : "flex items-center gap-2 text-accent-foreground"}>
        <Icon className="h-4 w-4" />
        <p className="text-xs font-semibold uppercase tracking-wide">{label}</p>
      </div>
      <p className="mt-2 text-pretty text-sm leading-relaxed text-card-foreground md:text-base">{children}</p>
    </div>
  )
}
