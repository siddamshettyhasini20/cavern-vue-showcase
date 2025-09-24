import React from 'react';
import { Card } from '@/components/ui/card';
import gourmetImage from '@/assets/gourmet-dishes.jpg';

const MenuSection: React.FC = () => {
  const menuCategories = [
    {
      title: "Cave Appetizers",
      items: [
        { name: "Stone-Aged Oysters", description: "Fresh oysters aged in our limestone caves", price: "$24" },
        { name: "Truffle Mushroom Tartine", description: "Wild mushrooms on artisan bread with cave-aged cheese", price: "$18" },
        { name: "Smoke & Stone Charcuterie", description: "Cured meats and aged cheeses from local caves", price: "$32" },
      ]
    },
    {
      title: "Underground Mains",
      items: [
        { name: "Cavern Ribeye", description: "28-day aged ribeye with roasted root vegetables", price: "$54" },
        { name: "Depths Sea Bass", description: "Pan-seared bass with underground herb crust", price: "$42" },
        { name: "Earth & Fire Lamb", description: "Slow-roasted lamb shoulder with cave vegetables", price: "$48" },
      ]
    },
    {
      title: "Crystal Desserts",
      items: [
        { name: "Stalactite Chocolate", description: "Dark chocolate sculpture with gold leaf", price: "$16" },
        { name: "Cave Pearl Panna Cotta", description: "Vanilla bean panna cotta with crystallized fruits", price: "$14" },
        { name: "Underground Berry Tart", description: "Wild berry tart with cave honey ice cream", price: "$18" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our carefully crafted dishes, inspired by the depths of the earth 
            and elevated by culinary innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Menu Image */}
          <div className="relative">
            <img 
              src={gourmetImage} 
              alt="Elegant gourmet dishes beautifully plated"
              className="w-full h-96 object-cover rounded-lg shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-lg"></div>
          </div>

          {/* Menu Categories */}
          <div className="space-y-8">
            {menuCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6 bg-card/50 backdrop-blur-sm border-border shadow-elegant">
                <h3 className="font-display text-2xl font-semibold mb-4 text-primary">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-lg mb-1">
                          {item.name}
                        </h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <span className="font-display text-lg font-semibold text-primary whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;