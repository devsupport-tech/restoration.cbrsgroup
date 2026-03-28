import { Helmet } from "react-helmet-async";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Phone, Clock, Shield, CheckCircle, MapPin, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

interface LocationServicePageProps {
  city: string;
  county?: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroSubtitle: string;
  introParagraph: string;
  areaDescription: string;
  commonProblems: string[];
  neighborhoods?: string[];
  nearbyAreas?: { name: string; slug: string }[];
}

const LocationServicePage = ({
  city,
  county = "Harris County",
  metaTitle,
  metaDescription,
  heroTitle,
  heroSubtitle,
  introParagraph,
  areaDescription,
  commonProblems,
  neighborhoods = [],
  nearbyAreas = [],
}: LocationServicePageProps) => {
  const services = [
    "24/7 Emergency Water Extraction",
    "Flood Damage Cleanup & Restoration",
    "Burst Pipe & Plumbing Leak Repair",
    "Storm & Hurricane Damage Restoration",
    "Sewage Backup Cleanup",
    "Structural Drying & Dehumidification",
    "Mold Inspection & Remediation",
    "Content Pack-Out & Restoration",
    "Insurance Claims Assistance",
    "Complete Reconstruction & Rebuild",
  ];

  const whyChooseUs = [
    { title: "24/7 Emergency Response", description: `Fast response times throughout ${city} and surrounding areas` },
    { title: "Licensed & Insured", description: "Fully licensed, bonded, and insured for your protection" },
    { title: "Insurance Experts", description: "We work directly with your insurance company" },
    { title: "One Contractor", description: "From water extraction to full rebuild - one team, one point of contact" },
    { title: "Local Experts", description: `We know ${city} and the unique water damage challenges in this area` },
    { title: "Free Estimates", description: "No-obligation assessments for all water damage situations" },
  ];

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`https://restoration.cbrsgroup.com/water-damage/${city.toLowerCase().replace(/\s+/g, '-')}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`https://restoration.cbrsgroup.com/water-damage/${city.toLowerCase().replace(/\s+/g, '-')}`} />
      </Helmet>

      <div className="min-h-screen">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/90">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full mb-6">
                <MapPin className="h-4 w-4" />
                <span className="text-sm font-semibold">Serving {city}, TX</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground mb-4">
                {heroTitle}
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8">
                {heroSubtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:8326080535"
                  className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  (832) 608-0535
                </a>
                <Link
                  to="/#contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors border border-primary-foreground/20"
                >
                  Get Free Estimate
                </Link>
              </div>
              <div className="flex items-center justify-center gap-6 mt-8 text-primary-foreground/70 text-sm">
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  24/7 Emergency Service
                </span>
                <span className="flex items-center gap-2">
                  <Shield className="h-4 w-4" />
                  Licensed & Insured
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Intro Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {introParagraph}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4">
                  {areaDescription}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                Water Damage Restoration Services in {city}
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service) => (
                  <div key={service} className="flex items-start gap-3 bg-background p-4 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5 shrink-0" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                Common Water Damage Problems in {city}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {commonProblems.map((problem, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Droplets className="h-5 w-5 text-accent mt-1 shrink-0" />
                    <p className="text-muted-foreground">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-heading font-bold text-primary-foreground mb-8 text-center">
                Why {city} Homeowners Choose CBRS Group
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="bg-primary-foreground/10 p-6 rounded-lg">
                    <h3 className="text-lg font-bold text-primary-foreground mb-2">{item.title}</h3>
                    <p className="text-primary-foreground/70 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Neighborhoods Section */}
        {neighborhoods.length > 0 && (
          <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-heading font-bold text-foreground mb-8 text-center">
                  Neighborhoods We Serve in {city}
                </h2>
                <div className="flex flex-wrap justify-center gap-3">
                  {neighborhoods.map((neighborhood) => (
                    <span
                      key={neighborhood}
                      className="bg-muted px-4 py-2 rounded-full text-sm text-muted-foreground"
                    >
                      {neighborhood}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-16 bg-accent">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-accent-foreground mb-4">
                Need Water Damage Restoration in {city}?
              </h2>
              <p className="text-accent-foreground/80 mb-8">
                Don't wait — water damage gets worse every hour. Call now for immediate 24/7 emergency response.
              </p>
              <a
                href="tel:8326080535"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-lg font-bold text-lg transition-colors"
              >
                <Phone className="h-5 w-5" />
                Call (832) 608-0535 Now
              </a>
            </div>
          </div>
        </section>

        {/* Nearby Areas Section */}
        {nearbyAreas.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-xl font-heading font-semibold text-foreground mb-4 text-center">
                  Water Damage Restoration in Nearby Areas
                </h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {nearbyAreas.map((area) => (
                    <Link
                      key={area.slug}
                      to={`/water-damage/${area.slug}`}
                      className="text-accent hover:text-accent/80 underline text-sm"
                    >
                      {area.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        <Footer />
      </div>
    </>
  );
};

export default LocationServicePage;
