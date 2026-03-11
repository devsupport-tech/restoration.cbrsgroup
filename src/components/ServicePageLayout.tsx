import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Phone, ArrowLeft, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import type { LucideIcon } from "lucide-react";

interface ServicePageLayoutProps {
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  features: string[];
  details: { title: string; description: string; icon: LucideIcon }[];
  ctaText?: string;
}

const ServicePageLayout = ({
  title,
  subtitle,
  description,
  heroImage,
  features,
  details,
  ctaText = "Get a Free Estimate",
}: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-20">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/80" />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
          <p className="text-sm font-semibold text-accent mb-3">{subtitle}</p>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 max-w-2xl">
            {title}
          </h1>
          <p className="text-primary-foreground/70 max-w-xl text-lg mb-8">{description}</p>
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:8326080535"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground hover:bg-accent/90 transition-colors"
            >
              <Phone className="h-4 w-4" />
              Schedule a Consultation
            </a>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
            >
              {ctaText} <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features list */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">What We Offer</h2>
              <p className="text-muted-foreground mb-8">
                CBRS Group delivers every project with professional precision, quality materials, and expert workmanship.
              </p>
            </div>
            <ul className="space-y-4">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Detail cards */}
      <section className="bg-secondary py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-12 text-center">How We Help</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {details.map((detail) => (
              <div key={detail.title} className="rounded-2xl bg-card p-8 shadow-sm">
                <detail.icon className="h-8 w-8 text-accent mb-4" />
                <h3 className="font-heading font-semibold text-foreground mb-2">{detail.title}</h3>
                <p className="text-sm text-muted-foreground">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-accent-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-accent-foreground/80 mb-6 max-w-md mx-auto">
            Contact CBRS Group today for a free consultation and estimate.
          </p>
          <a
            href="tel:8326080535"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Phone className="h-4 w-4" /> Call (832) 608-0535
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicePageLayout;
