import heroWorker from "@/assets/hero-worker.jpg";
import { Phone, Send } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, open mailto with the form data
    const subject = encodeURIComponent(`Free Estimate Request - ${formData.service || "General"}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nService: ${formData.service}\nMessage: ${formData.message}`
    );
    window.location.href = `mailto:info@veteranselitecontractors.com?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="home"
      className="relative bg-primary pt-28 md:pt-32"
    >
      <div className="container mx-auto grid lg:grid-cols-2 gap-10 items-start px-4 py-12 md:py-20">
        {/* Left — Hero content */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Veteran-Owned · Licensed #1140407 · Del Mar, CA
          </div>
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-foreground">
            Restoration &<br />
            Construction with<br />
            <span className="text-accent">Military Precision</span>
          </h1>
          <p className="text-primary-foreground/60 max-w-md">
            Veterans Elite Contractors delivers fast, reliable restoration and
            construction services across San Diego County — available 24/7 for
            emergencies.
          </p>
          <a
            href="tel:3109906999"
            className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/5 transition-colors"
          >
            <Phone className="h-4 w-4" /> (310) 990-6999
          </a>

          <div className="flex gap-10 pt-6 border-t border-primary-foreground/10">
            {[
              { value: "24/7", label: "Emergency Response" },
              { value: "6+", label: "Service Lines" },
              { value: "So. Cal", label: "Service Area" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-heading text-2xl md:text-3xl font-bold text-accent">
                  {stat.value}
                </p>
                <p className="text-xs text-primary-foreground/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right — CTA Form */}
        <div className="relative">
          {/* Background image peek on large screens */}
          <div className="hidden lg:block absolute -top-8 -right-8 w-64 h-64 rounded-2xl overflow-hidden opacity-30">
            <img
              src={heroWorker}
              alt=""
              className="w-full h-full object-cover"
              aria-hidden="true"
            />
          </div>

          <div className="relative bg-background rounded-2xl shadow-2xl p-6 md:p-8">
            <div className="text-center mb-6">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-foreground">
                Request a <span className="text-accent">Free Estimate</span>
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                Fill out the form and we'll get back to you within 24 hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                required
                maxLength={100}
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone *"
                  required
                  maxLength={20}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email *"
                  required
                  maxLength={255}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
                />
              </div>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-accent/50"
              >
                <option value="" disabled>
                  Select a Service *
                </option>
                <option value="Restoration">Emergency Restoration</option>
                <option value="Roofing">Roofing Services</option>
                <option value="Epoxy Flooring">Epoxy Flooring</option>
                <option value="HVAC & Electrical">HVAC, Electrical & Plumbing</option>
                <option value="Custom Glass">Custom Glass Solutions</option>
                <option value="Asphalt">Asphalt Solutions</option>
                <option value="Other">Other</option>
              </select>
              <textarea
                name="message"
                placeholder="How can we help? (optional)"
                rows={3}
                maxLength={1000}
                value={formData.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-border bg-secondary px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 resize-none"
              />
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3.5 text-sm font-bold text-accent-foreground hover:bg-accent/90 transition-colors"
              >
                <Send className="h-4 w-4" /> Schedule Today
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
