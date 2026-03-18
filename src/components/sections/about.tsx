"use client";

import { AnimatedSection } from "@/components/animated-section";

const highlights = [
  {
    number: "01",
    title: "אסטרטגיה שיווקית",
    text: "כל דף נבנה על בסיס הבנה עמוקה של קהל היעד, המסר השיווקי, ומסע הלקוח מרגע החשיפה ועד ההמרה.",
  },
  {
    number: "02",
    title: "ביצועים ומהירות",
    text: "ציון ירוק ב-Google PageSpeed. טעינה מיידית, מותאם מובייל, קוד נקי שלא מאט את הקמפיין.",
  },
  {
    number: "03",
    title: "עיצוב ברמה גבוהה",
    text: "עיצוב מתוחכם שיוצר אמון מיידי ומבדל אותך מהמתחרים — כי המראה הוא חלק מהמסר.",
  },
];

export function About() {
  return (
    <section id="about" className="py-28 md:py-36">
      <div className="container mx-auto px-6">

        {/* Section label */}
        <AnimatedSection>
          <div className="flex items-center gap-4 mb-16">
            <span className="w-6 h-px bg-primary" />
            <span className="text-xs text-primary font-semibold" style={{ letterSpacing: "0.14em" }}>
              למה דווקא אני
            </span>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — pull quote */}
          <AnimatedSection direction="right">
            <div className="space-y-8">
              <blockquote
                className="font-black leading-tight tracking-tight text-foreground"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
              >
                "אני לא רק מעצב.
                <br />
                <span className="text-primary">אני איש שיווק</span>
                <br />
                שיודע לבנות."
              </blockquote>

              <p className="text-muted-foreground leading-relaxed text-lg max-w-md">
                בתור יוצא גוגל עם ניסיון עשיר בשיווק דיגיטלי, אני מבין מה גורם
                לאנשים ללחוץ, למלא טופס, ולהפוך ללקוחות משלמים. כל דף שאני
                בונה הוא שילוב של עיצוב מרהיב וחשיבה שיווקית שמתורגמת לתוצאות.
              </p>

              {/* Decorative line */}
              <div className="w-16 h-px bg-border" />

              <p className="text-muted-foreground/60 text-sm font-medium" style={{ letterSpacing: "0.1em" }}>
                COVERTY AI · SINCE 2024
              </p>
            </div>
          </AnimatedSection>

          {/* Right — highlights */}
          <div className="space-y-0">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.number} delay={index * 0.1}>
                <div className="group flex gap-6 py-8 border-b border-border/30 last:border-0">
                  <span
                    className="text-xs font-black text-primary/50 pt-1 shrink-0 font-mono"
                    style={{ letterSpacing: "0.08em" }}
                  >
                    {item.number}
                  </span>
                  <div>
                    <h3 className="font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
