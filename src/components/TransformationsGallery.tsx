import transform1 from "@/assets/transform-1.jpeg";
import transform2 from "@/assets/transform-2.jpeg";
import transform3 from "@/assets/transform-3.jpeg";
import transform4 from "@/assets/transform-4.jpeg";
import transform5 from "@/assets/transform-5.jpeg";
import transform6 from "@/assets/transform-6.jpeg";

const images = [
  { src: transform1, alt: "Transformação 1" },
  { src: transform2, alt: "Transformação 2" },
  { src: transform3, alt: "Transformação 3" },
  { src: transform4, alt: "Transformação 4" },
  { src: transform5, alt: "Transformação 5" },
  { src: transform6, alt: "Transformação 6" },
];

const TransformationsGallery = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <span className="text-primary font-medium tracking-widest text-xs md:text-sm mb-3 md:mb-4 block uppercase">
            Resultados que falam por si
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-gradient-neon mb-4 md:mb-6 leading-none">
            OUTRAS MULHERES QUE<br />DECIDIRAM MUDAR
          </h2>
        </div>

        {/* Gallery - large images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border-2 border-border/50 hover:border-primary/50 transition-all duration-300"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TransformationsGallery;
