import heroWorker from "@/assets/hero-worker.jpg";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative bg-primary pt-20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center px-4 py-16 md:py-24">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Veteran-Owned Construction Company
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Building excellence<br />
            <span className="text-accent">One project</span> at a time
          </h1>
          <p className="text-primary-foreground/60 max-w-md">
            Veterans Elite Contractors LLC delivers high-quality commercial construction with precision, discipline, and excellence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="flex gap-10 pt-6 border-t border-primary-foreground/10">
            {[
              { value: "500+", label: "Projects Completed" },
              { value: "100+", label: "Expert Team" },
              { value: "2M+", label: "Sq. Ft. Built" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl md:text-3xl font-bold text-accent">{stat.value}</p>
                <p className="text-xs text-primary-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden md:block">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={heroWorker}
              alt="Construction worker at commercial building site"
              className="w-full h-[500px] object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 h-24 w-24 rounded-xl bg-accent/20" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
