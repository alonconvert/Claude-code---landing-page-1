"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
    title: "דף נחיתה לקליניקה פרטית",
    category: "בריאות",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "דף נחיתה לקורס דיגיטלי",
    category: "חינוך",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "דף נחיתה לעסק מקומי",
    category: "עסקים קטנים",
    gradient: "from-amber-500/20 to-orange-500/20",
  },
  {
    title: "דף נחיתה לאירוע",
    category: "אירועים",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "דף נחיתה ל-SaaS",
    category: "טכנולוגיה",
    gradient: "from-violet-500/20 to-indigo-500/20",
  },
];

export function ShowcaseCarousel() {
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            תיק <span className="text-primary">עבודות</span>
          </h2>
          <p className="text-muted-foreground text-center mb-16 max-w-xl mx-auto">
            דוגמאות לדפי נחיתה שעוצבו ונבנו עבור לקוחות מתחומים שונים
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <Carousel
            opts={{
              align: "center",
              loop: true,
              direction: "rtl",
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ms-4">
              {showcaseItems.map((item) => (
                <CarouselItem
                  key={item.title}
                  className="ps-4 md:basis-1/2 lg:basis-1/3"
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Card className="border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden group cursor-pointer">
                      <CardContent className="p-0">
                        <div
                          className={`aspect-[3/4] bg-gradient-to-br ${item.gradient} flex items-center justify-center relative`}
                        >
                          {/* Mockup placeholder */}
                          <div className="w-4/5 h-4/5 rounded-lg bg-background/80 backdrop-blur-sm border border-border/30 shadow-2xl flex flex-col p-4 gap-3">
                            <div className="h-2 w-3/4 rounded-full bg-primary/30" />
                            <div className="h-2 w-1/2 rounded-full bg-muted-foreground/20" />
                            <div className="flex-1 rounded bg-muted/50 mt-2" />
                            <div className="h-8 rounded bg-primary/20" />
                          </div>

                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        <div className="p-5">
                          <span className="text-xs text-primary font-medium">
                            {item.category}
                          </span>
                          <h3 className="text-base font-bold mt-1">
                            {item.title}
                          </h3>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </AnimatedSection>
      </div>
    </section>
  );
}
