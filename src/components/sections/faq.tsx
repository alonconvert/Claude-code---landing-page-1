"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/animated-section";

const faqs = [
  {
    q: "מה כולל המחיר של 989₪?",
    a: "שיחת אפיון, עיצוב מלא, פיתוח, אופטימיזציה למובייל, חיבור לווב-הוק לניהול לידים, ושני סבבי תיקונים. ללא עלויות נסתרות.",
  },
  {
    q: "כמה זמן לוקח לבנות דף?",
    a: "בדרך כלל 3–5 ימי עסקים מרגע שיחת האפיון. עבור פרויקטים דחופים — ניתן לדון.",
  },
  {
    q: "האם אני צריך להכין תמונות ותכנים?",
    a: "לא חייב. אני עוזר לנסח את הטקסטים השיווקיים ומשתמש בתמונות stock מקצועיות. אם יש לך תמונות משלך — אפילו יותר טוב.",
  },
  {
    q: "על איזו פלטפורמה בנוי הדף?",
    a: "Next.js עם Tailwind CSS — הטכנולוגיות המהירות ביותר היום. הדף ניתן לאחסון בחינם על Vercel או כל שרת אחר.",
  },
  {
    q: "איך הדף מחובר לקמפיינים?",
    a: "הדף מוכן מראש לחיבור ל-Meta Pixel, Google Ads tag, ולכל כלי אנליטיקס. הלידים מגיעים ישירות ל-CRM, Zapier, Make, או WhatsApp.",
  },
  {
    q: "מה אם אני לא מרוצה מהתוצאה?",
    a: "מציע 2 סבבי תיקונים כלולים במחיר. אם אחרי זה עדיין לא מרוצה — מחזיר 50% מהתשלום. פשוט כך.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <AnimatedSection delay={index * 0.07}>
      <motion.div
        className="border-b border-border/30 last:border-0"
        animate={{ borderColor: open ? "oklch(0.64 0.29 294 / 0.3)" : undefined }}
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="w-full flex items-center justify-between gap-4 py-6 text-start group cursor-pointer"
        >
          <span className="font-semibold text-base text-foreground group-hover:text-primary transition-colors duration-200">
            {q}
          </span>
          <motion.div
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="shrink-0 w-6 h-6 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground group-hover:border-primary/50 group-hover:text-primary transition-colors duration-200"
          >
            <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
            </svg>
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <p className="text-muted-foreground leading-relaxed pb-6 text-sm max-w-2xl">
                {a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </AnimatedSection>
  );
}

export function FAQ() {
  return (
    <section id="faq" className="py-28 md:py-36 bg-card/10">
      <div className="container mx-auto px-6">
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              שאלות נפוצות
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 items-start">
          <AnimatedSection direction="right">
            <h2
              className="font-black leading-tight tracking-tight text-foreground"
              style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
            >
              יש לך
              <br />
              <span className="text-primary">שאלות?</span>
            </h2>
            <p className="text-muted-foreground mt-6 leading-relaxed">
              אם לא מצאת את מה שחיפשת — פשוט שלח הודעה.
            </p>
          </AnimatedSection>

          <div>
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
