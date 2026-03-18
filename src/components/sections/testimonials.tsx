"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

const testimonials = [
  {
    name: "דנה כהן",
    role: "מנהלת קליניקה",
    business: "קליניקת יופי · תל אביב",
    text: "לפני שעבדתי עם אלון, הייתי משלמת 80₪ לליד ומקבלת פחות מ-10% המרה. אחרי הדף החדש — 35₪ לליד ו-22% המרה. ההשקעה חזרה תוך שבוע.",
    avatar: "ד",
    color: "oklch(0.64 0.29 294)",
    stars: 5,
  },
  {
    name: "רון מזרחי",
    role: "בעלים",
    business: "שיפוץ ובנייה · ירושלים",
    text: "חשבתי שדף נחיתה זה דף נחיתה. לא ידעתי שיש הבדל כזה. הדף שאלון בנה לי נראה כמו של חברה גדולה, ואנשים פשוט סומכים יותר.",
    avatar: "ר",
    color: "oklch(0.83 0.16 85)",
    stars: 5,
  },
  {
    name: "מיה לוי",
    role: "מדריכת כושר",
    business: "סטודיו כושר · רמת גן",
    text: "הקמפיין שלי ב-Meta רץ חצי שנה בלי תוצאות. שינינו רק את דף הנחיתה — אותו קמפיין, אותו תקציב, פי 3 לידים. מטורף.",
    avatar: "מ",
    color: "oklch(0.64 0.29 294)",
    stars: 5,
  },
  {
    name: "יוסי ברק",
    role: "יזם",
    business: "קורס דיגיטלי · אונליין",
    text: "העיצוב מדהים, הקוד מהיר, והשירות היה מעל ומעבר. אלון הבין בדיוק מה אני צריך בלי שהסברתי יותר מדי.",
    avatar: "י",
    color: "oklch(0.83 0.16 85)",
    stars: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--gold)" }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-28 md:py-36">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              לקוחות מרוצים
            </span>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.05}>
          <h2
            className="font-black leading-tight tracking-tight text-foreground mb-16 max-w-lg"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            מה אומרים
            <br />
            <span className="text-primary">הלקוחות?</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {testimonials.map((t, index) => (
            <AnimatedSection key={t.name} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group h-full p-7 rounded-2xl border border-border/40 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300 flex flex-col gap-5"
              >
                {/* Stars */}
                <Stars count={t.stars} />

                {/* Quote */}
                <p className="text-foreground/85 leading-relaxed flex-1 text-base">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-3 pt-2 border-t border-border/30">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                    style={{
                      background: `${t.color}20`,
                      color: t.color,
                      border: `1px solid ${t.color}40`,
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <p className="font-bold text-sm text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.business}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
