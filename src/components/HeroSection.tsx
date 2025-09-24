import React from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-cave-restaurant.jpg';

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onSectionChange }) => {
  const scrollToSection = (sectionId: string) => {
    onSectionChange(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Cave restaurant interior with elegant dining atmosphere"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/60 gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 text-foreground">
          Cave <span className="text-primary">Dining</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Experience fine dining in the mystical depths of our underground restaurant. 
          Where culinary excellence meets ancient stone formations.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="hero" 
            size="lg" 
            onClick={() => scrollToSection('menu')}
            className="text-lg px-8 py-3"
          >
            Explore Menu
          </Button>
          <Button 
            variant="cave" 
            size="lg" 
            onClick={() => scrollToSection('contact')}
            className="text-lg px-8 py-3"
          >
            Make Reservation
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;