
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Category } from '@/utils/types';
import { cn } from '@/lib/utils';

interface CategoriesProps {
  categories: Category[];
}

const Categories = ({ categories }: CategoriesProps) => {
  const navigate = useNavigate();

  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Browse By Category
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">
            Discover our diverse range of culinary options, categorized for your convenience.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category, index) => (
            <div 
              key={category.id} 
              className={cn(
                "group cursor-pointer overflow-hidden rounded-xl bg-white shadow-subtle transition-all duration-300 hover:shadow-elevated",
                "animate-fade-in opacity-0"
              )}
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
              onClick={() => navigate(`/menu?category=${category.name.toLowerCase()}`)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                <h3 className="text-lg font-medium">{category.name}</h3>
                <p className="text-sm font-light">{category.count} items</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
