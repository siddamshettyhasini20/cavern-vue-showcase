import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">C</span>
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">Cave Dining</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Experience the extraordinary in our underground fine dining restaurant. 
              Where culinary artistry meets ancient stone formations.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Information</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">123 Underground Avenue, Deep City, DC 12345</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">(555) 123-CAVE</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">reservations@cavedining.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Operating Hours</h4>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Mon - Wed</span>
                <span className="text-muted-foreground text-sm">5:00 PM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Thu - Fri</span>
                <span className="text-muted-foreground text-sm">5:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Saturday</span>
                <span className="text-muted-foreground text-sm">4:00 PM - 11:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground text-sm">Sunday</span>
                <span className="text-muted-foreground text-sm">4:00 PM - 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 Cave Dining. All rights reserved. | Crafted with passion for extraordinary dining experiences.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;