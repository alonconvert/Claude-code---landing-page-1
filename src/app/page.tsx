import { Hero } from "@/components/sections/hero";
import { TrustIndicators } from "@/components/sections/trust-indicators";
import { ShowcaseCarousel } from "@/components/sections/showcase-carousel";
import { About } from "@/components/sections/about";
import { LeadForm } from "@/components/sections/lead-form";

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustIndicators />
      <ShowcaseCarousel />
      <About />
      <LeadForm />

      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} כל הזכויות שמורות</p>
        </div>
      </footer>
    </main>
  );
}
