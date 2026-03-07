import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "Nexus Tower", category: "Office Complex", img: project1 },
  { title: "Metro Warehouse", category: "Industrial", img: project2 },
  { title: "Gallery Mall", category: "Retail Center", img: project3 },
  { title: "Grand Horizon Hotel", category: "Hospitality", img: project4 },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-sm font-semibold text-accent mb-2">Portfolio</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Proven results in<br />commercial construction.
            </h2>
          </div>
          <a
            href="#projects"
            className="hidden md:inline-flex items-center gap-1 text-sm font-semibold text-foreground hover:text-accent transition-colors"
          >
            View all projects <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="group cursor-pointer">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-[240px] object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="text-xs text-accent font-semibold mb-1">{project.category}</p>
              <h3 className="font-heading font-semibold text-foreground">{project.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
