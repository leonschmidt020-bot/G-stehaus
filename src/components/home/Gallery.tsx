import Image from "next/image";

const images = [
  "/images/exterior.jpg",
  "/images/room.jpg",
  "/images/breakfast.jpg",
  "/images/room.jpg", // Repeating for now to fill grid
  "/images/exterior.jpg",
  "/images/breakfast.jpg"
];

export default function Gallery() {
  return (
    <section className="py-24 bg-soft-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-sans font-semibold tracking-wider uppercase text-sm">Galerie</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-3">Impressionen</h2>
          <p className="max-w-xl mx-auto text-neutral-500 mt-4">
            Einblicke in unser Haus und die wunderschöne Umgebung des Markgräflerlands.
          </p>
        </div>

        {/* Masonry-ish Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
          {images.map((src, i) => (
            <div key={i} className="break-inside-avoid relative rounded-2xl overflow-hidden group shadow-soft-ui hover:shadow-floating transition-all duration-500">
              <Image
                src={src}
                alt="Impression"
                width={600}
                height={400}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
