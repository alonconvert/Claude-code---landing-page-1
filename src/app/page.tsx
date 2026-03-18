import { Hero } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { Process } from "@/components/sections/process";
import { Testimonials } from "@/components/sections/testimonials";
import { ShowcaseCarousel } from "@/components/sections/showcase-carousel";
import { BeforeAfter } from "@/components/sections/before-after";
import { About } from "@/components/sections/about";
import { FAQ } from "@/components/sections/faq";
import { LeadForm } from "@/components/sections/lead-form";
import { ScrollProgressBar } from "@/components/scroll-progress-bar";
import { WhatsAppCTA } from "@/components/whatsapp-cta";
import { StickyCTABar } from "@/components/sticky-cta-bar";
import { CustomCursor } from "@/components/custom-cursor";
import { ExitIntentPopup } from "@/components/exit-intent-popup";

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <CustomCursor />
      <WhatsAppCTA />
      <StickyCTABar />
      <ExitIntentPopup />

      <main>
        <Hero />
        <TrustIndicators />
        <Process />
        <Testimonials />
        <ShowcaseCarousel />
        <BeforeAfter />
        <About />
        <FAQ />
        <LeadForm />

        <footer className="py-10 border-t border-border/40">
          <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground/50">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-black text-xs">C</span>
              </div>
              <span className="font-bold text-muted-foreground/70">Coverty AI</span>
            </div>
            <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות</p>
          </div>
        </footer>
      </main>
    </>
  );
}
