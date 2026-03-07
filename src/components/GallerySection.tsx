import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const images = [
  { src: project1, alt: "Office building", span: "md:col-span-2 md:row-span-2" },
  { src: project2, alt: "Warehouse", span: "" },
  { src: project3, alt: "Retail center", span: "" },
  { src: project4, alt: "Hotel", span: "" },
  { src: project5, alt: "Headquarters", span: "" },
];

const GallerySection = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((img, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
