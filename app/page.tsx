import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Map,
  MessageSquare,
  Rocket,
  Sparkles,
  ThumbsUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const loop = [
  { icon: MessageSquare, label: "Post" },
  { icon: ThumbsUp, label: "Vote" },
  { icon: Map, label: "Roadmap" },
  { icon: Rocket, label: "Ship" },
] as const;

export default function HomePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-12 pb-16 md:space-y-14">
      <div className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center py-16 md:py-24">
        <div className="mx-auto flex max-w-lg flex-col items-center text-center">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/40 px-3 py-1 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" aria-hidden />
            Community-driven product ideas
          </p>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
            Shape what we build next
          </h1>
          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Feed Fizz is a simple space to share feedback, vote on ideas, and
            follow the roadmap—nothing extra.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            
          </div>

          <div
            className="relative mt-12 w-full max-w-lg"
            role="img"
            aria-label="Flow from post to ship"
          >
            <div className="absolute left-[8%] right-[8%] top-5 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent sm:block" />
            <ul className="flex flex-wrap items-start justify-center gap-x-1 gap-y-4 sm:flex-nowrap sm:justify-between">
              {loop.map(({ icon: Icon, label }, i) => (
                <li key={label} className="contents">
                  <div className="flex w-[4.25rem] flex-col items-center gap-1.5 sm:w-auto">
                    <div className="relative z-[1] flex size-11 items-center justify-center rounded-xl border border-border/80 bg-card text-primary shadow-xs">
                      <Icon className="size-[1.125rem]" strokeWidth={2} aria-hidden />
                    </div>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-muted-foreground">
                      {label}
                    </span>
                  </div>
                  {i < loop.length - 1 && (
                    <ChevronRight
                      className="mx-0.5 mb-6 hidden size-3.5 text-muted-foreground/40 sm:block"
                      aria-hidden
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <section
        className="rounded-2xl border border-border/80 bg-muted/20 px-5 py-6 md:px-6 md:py-7"
        aria-label="Demand by votes"
      >
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <p className="text-sm font-medium text-foreground">Demand</p>
            <p className="text-xs text-muted-foreground">Higher bars = more votes.</p>
          </div>
          <div className="flex h-24 flex-1 items-end justify-center gap-2 sm:max-w-[220px] sm:justify-end">
            {[35,62,100].map((pct, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-1 sm:flex-initial sm:w-8">
                <div
                  className="w-full max-w-[2rem] rounded-t bg-primary/80 sm:max-w-none"
                  style={{ height: `${(pct / 100) * 3.25}rem` }}
                />
                <span className="text-[10px] tabular-nums text-muted-foreground">
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
