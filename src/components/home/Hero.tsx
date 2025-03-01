
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=2070"
          alt="Gourmet food background"
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
      </div>

      <div className="container relative z-10 flex min-h-[90vh] items-center py-16">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          <div className="inline-block rounded-full bg-white/10 px-3 py-1 backdrop-blur-sm">
            <span className="text-sm font-medium tracking-wide text-white/90">
              Gourmet Dishes Delivered to Your Door
            </span>
          </div>
          
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Exquisite Cuisine From Top Restaurants
          </h1>
          
          <p className="text-balance text-lg text-white/80 md:text-xl">
            Experience restaurant-quality meals in the comfort of your home. Our curated selection
            brings the finest culinary creations directly to your table.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button 
              size="lg"
              onClick={() => navigate('/menu')}
              className="group rounded-full bg-white text-black hover:bg-white/90"
            >
              Explore Menu
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => navigate('/about')}
              className="rounded-full border-white/30 bg-transparent text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
