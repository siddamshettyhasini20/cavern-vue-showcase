import React from 'react';
import { Card } from '@/components/ui/card';
import { Clock, MapPin, Phone, Award } from 'lucide-react';

const HoursSection: React.FC = () => {
  const hours = [
    { day: "Monday", time: "5:00 PM - 10:00 PM" },
    { day: "Tuesday", time: "5:00 PM - 10:00 PM" },
    { day: "Wednesday", time: "5:00 PM - 10:00 PM" },
    { day: "Thursday", time: "5:00 PM - 11:00 PM" },
    { day: "Friday", time: "5:00 PM - 11:00 PM" },
    { day: "Saturday", time: "4:00 PM - 11:00 PM" },
    { day: "Sunday", time: "4:00 PM - 9:00 PM" },
  ];

  const highlights = [
    { icon: Award, title: "Michelin Recommended", description: "Recognized for exceptional dining experience" },
    { icon: MapPin, title: "Unique Location", description: "The only underground fine dining in the city" },
    { icon: Clock, title: "Dinner Only", description: "Exclusive evening dining experience" },
  ];

  return (
    <section id="hours" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Hours & <span className="text-primary">Information</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Plan your underground dining experience. We're open for dinner service 
            with an exclusive atmosphere you won't find anywhere else.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours Card */}
          <Card className="p-8 bg-card/50 backdrop-blur-sm border-border shadow-elegant">
            <div className="flex items-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="font-display text-2xl font-semibold text-foreground">Operating Hours</h3>
            </div>
            <div className="space-y-3">
              {hours.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border/50 last:border-b-0">
                  <span className="font-medium text-foreground">{item.day}</span>
                  <span className="text-muted-foreground">{item.time}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm text-primary font-medium">
                Reservations highly recommended. Walk-ins accepted based on availability.
              </p>
            </div>
          </Card>

          {/* Highlights */}
          <div className="space-y-6">
            <h3 className="font-display text-2xl font-semibold text-foreground mb-6">Why Cave Dining?</h3>
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-card/30 backdrop-blur-sm border-border hover:bg-card/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/20 rounded-lg">
                    <highlight.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">{highlight.title}</h4>
                    <p className="text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Quick Info */}
            <Card className="p-6 bg-accent/20 backdrop-blur-sm border-primary/30">
              <h4 className="font-display text-xl font-semibold text-primary mb-4">Quick Information</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">123 Underground Avenue, Deep City, DC 12345</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">(555) 123-CAVE</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;