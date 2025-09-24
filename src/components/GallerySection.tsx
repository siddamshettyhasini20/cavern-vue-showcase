import React from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import diningAtmosphere from '@/assets/dining-atmosphere.jpg';

const GallerySection: React.FC = () => {
  const galleryImages = [
    { src: gallery1, alt: "Elegant stone dining room with arched ceilings and candlelit ambiance" },
    { src: gallery2, alt: "Underground wine cellar with natural rock formations" },
    { src: gallery3, alt: "Professional kitchen with chefs crafting gourmet dishes" },
    { src: diningAtmosphere, alt: "Romantic cave dining atmosphere with golden lighting" },
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cave <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Step into our world of underground elegance. Experience the unique atmosphere 
            that makes Cave Dining unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-deep transition-smooth cursor-pointer"
            >
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-64 object-cover transition-smooth group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-smooth"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-smooth"></div>
            </div>
          ))}
        </div>

        {/* Featured Gallery Grid */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={gallery1} 
                alt="Main dining room with elegant stone architecture"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <h3 className="font-display text-2xl font-semibold mb-2">Underground Elegance</h3>
                <p className="text-white/90">Where ancient stone meets modern luxury</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={gallery2} 
                alt="Wine cellar with natural formations"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={gallery3} 
                alt="Professional kitchen in cave setting"
                className="w-full h-36 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;