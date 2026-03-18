"use client";

import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { AnimatedSection } from "@/components/animated-section";

const showcaseItems = [
  {
    title: "קליניקה פרטית",
    category: "בריאות",
    stat: "+180% המרות",
    gradient: "from-violet-600/20 via-purple-500/10 to-transparent",
    accent: "oklch(0.64 0.29 294)",
  },
  {
    title: "קורס דיגיטלי",
    category: "חינוך",
    stat: "עלות ליד -55%",
    gradient: "from-indigo-600/20 via-violet-500/10 to-transparent",
    accent: "oklch(0.58 0.28 280)",
  },
  {
    title: "עסק מקומי",
    category: "שירותים",
    stat: "+220% לידים",
    gradient: "from-purple-600/20 via-fuchsia-500/10 to-transparent",
    accent: "oklch(0.6 0.28 310)",
  },
  {
    title: "אירוע מיוחד",
    category: "אירועים",
    stat: "100% כרטיסים",
    gradient: "from-fuchsia-600/20 via-pink-500/10 to-transparent",
    accent: "oklch(0.63 0.27 325)",
  },
  {
    title: "SaaS Product",
    category: "טכנולוגיה",
    stat: "+160% signups",
    gradient: "from-violet-700/20 via-indigo-600/10 to-transparent",
    accent: "oklch(0.6 0.3 265)",
  },
];

export function ShowcaseCarousel() {
  return (
    <section id="showcase" className="py-28 md:py-36 bg-card/20">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              תיק עבודות
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-black leading-tight tracking-tight text-foreground mb-16 max-w-xl"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            דפים שעובדים
            <br />
            <span className="text-muted-foreground/40">בכל תחום.</span>
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Carousel
            opts={{ align: "start", loop: true, direction: "rtl" }}
            className="w-full"
          >
            <CarouselContent className="-ms-5">
              {showcaseItems.map((item) => (
                <CarouselItem key={item.title} className="ps-5 md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    className="group h-full"
                  >
                    <div className="rounded-2xl border border-border/40 bg-card/60 overflow-hidden h-full backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                      {/* Mockup area */}
                      <div className={`aspect-[4/3] bg-gradient-to-br ${item.gradient} relative overflow-hidden`}>
                        {/* Browser chrome */}
                        <div className="absolute top-4 inset-x-4 rounded-xl overflow-hidden shadow-2xl">
                          {/* Browser bar */}
                          <div className="bg-background/90 backdrop-blur-sm px-3 py-2 flex items-center gap-2 border-b border-border/30">
                            <div className="flex gap-1.5">
                              <div className="w-2 h-2 rounded-full bg-red-500/60" />
                              <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                              <div className="w-2 h-2 rounded-full bg-green-500/60" />
                            </div>
                            <div className="flex-1 h-4 rounded-full bg-white/5 mx-2" />
                          </div>
                          {/* Page content mock */}
                          <div className="bg-background/80 p-3 space-y-2">
                            <div className="h-3 w-3/4 rounded-full" style={{ background: `${item.accent}40` }} />
                            <div className="h-2 w-1/2 rounded-full bg-white/10" />
                            <div className="h-16 rounded-lg bg-white/5 mt-3" />
                            <div className="h-6 w-1/3 rounded-lg mt-2" style={{ background: `${item.accent}30` }} />
                          </div>
                        </div>

                        {/* Stat badge */}
                        <div
                          className="absolute bottom-4 end-4 px-3 py-1.5 rounded-full text-xs font-bold backdrop-blur-sm border"
                          style={{
                            background: `${item.accent}20`,
                            borderColor: `${item.accent}40`,
                            color: item.accent,
                          }}
                        >
                          {item.stat}
                        </div>
                      </div>

                      {/* Card footer */}
                      <div className="p-5 flex items-center justify-between">
                        <div>
                          <p className="text-xs text-primary/70 font-semibold mb-0.5" style={{ letterSpacing: "0.08em" }}>
                            {item.category}
                          </p>
                          <h3 className="font-bold text-base text-foreground">{item.title}</h3>
                        </div>
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ background: "oklch(0.64 0.29 294 / 0.15)" }}
                        >
                          <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex items-center gap-2 mt-8">
              <CarouselPrevious className="relative static translate-y-0 translate-x-0" />
              <CarouselNext className="relative static translate-y-0 translate-x-0" />
            </div>
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
