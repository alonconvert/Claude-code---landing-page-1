"use client";

import { AnimatedSection } from "@/components/animated-section";

const highlights = [
  {
    icon: "🎯",
    title: "אסטרטגיה שיווקית",
    text: "כל דף נבנה על בסיס הבנה עמוקה של קהל היעד, המסר השיווקי ומסע הלקוח.",
  },
  {
    icon: "⚡",
    title: "ביצועים ומהירות",
    text: "דפים מהירים שנטענים ברגע, מותאמים למובייל ומדורגים גבוה בגוגל.",
  },
  {
    icon: "🎨",
    title: "עיצוב ברמה גבוהה",
    text: "עיצוב מודרני ומתוחכם שיוצר אמון מיידי ומבדל אותך מהמתחרים.",
  },
];

export function About() {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                למה <span className="text-primary">דווקא אני?</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                אני לא &quot;רק מעצב&quot; ולא &quot;רק מפתח&quot;. בתור יוצא גוגל עם ניסיון
                עשיר בשיווק דיגיטלי, אני מבין מה גורם לאנשים ללחוץ, למלא טופס
                ולהפוך ללקוחות משלמים.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                כל דף נחיתה שאני בונה הוא שילוב של עיצוב מרהיב, טכנולוגיה
                מתקדמת וחשיבה שיווקית שמתורגמת לתוצאות אמיתיות — לידים
                איכותיים במחיר נמוך.
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {highlights.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.15}>
                <div className="flex gap-4 p-5 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/30 transition-colors duration-300">
                  <span className="text-3xl shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
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
