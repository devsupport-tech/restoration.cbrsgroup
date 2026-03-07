import expertise1 from "@/assets/expertise-1.jpg";
import project1 from "@/assets/project-1.jpg";

const ExpertiseSection = () => {
  return (
    <section id="services" className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Our expertise in<br />commercial construction
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={expertise1}
              alt="Commercial construction site aerial view"
              className="w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Tenant Buildouts", img: project1 },
              { label: "Ground-Up Construction", img: expertise1 },
              { label: "Renovations", img: project1 },
              { label: "Design-Build", img: expertise1 },
            ].map((item) => (
              <div key={item.label} className="group relative rounded-2xl overflow-hidden">
                <img
                  src={item.img}
                  alt={item.label}
                  className="w-full h-[180px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <p className="absolute bottom-4 left-4 text-sm font-semibold text-primary-foreground">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
