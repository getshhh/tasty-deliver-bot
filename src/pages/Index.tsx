
import React, { useState } from 'react';
import Hero from '@/components/home/Hero';
import FeaturedProducts from '@/components/home/FeaturedProducts';
import Categories from '@/components/home/Categories';
import { products, categories } from '@/utils/data';
import { Product } from '@/utils/types';

interface IndexProps {
  onAddToCart: (product: Product) => void;
}

const Index = ({ onAddToCart }: IndexProps) => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      
      <div className="py-12">
        <div className="container space-y-20">
          <FeaturedProducts products={products} onAddToCart={onAddToCart} />
          
          <div className="relative py-16">
            <div className="absolute inset-0 flex items-center" aria-hidden="true">
              <div className="w-full border-t border-gray-200" />
            </div>
            <div className="relative flex justify-center">
              <span className="bg-background px-4 text-sm font-semibold text-muted-foreground">
                EXPLORE BY CATEGORY
              </span>
            </div>
          </div>
          
          <Categories categories={categories} />
          
          <section className="bg-white py-16">
            <div className="container">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                  How It Works
                </h2>
                <p className="mt-4 text-lg text-muted-foreground">
                  Enjoy the convenience of restaurant-quality meals delivered to your doorstep
                </p>
              </div>
              
              <div className="mt-16 grid gap-10 md:grid-cols-3">
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    1
                  </div>
                  <h3 className="text-xl font-medium">Browse The Menu</h3>
                  <p className="mt-2 text-muted-foreground">
                    Explore our diverse selection of dishes from top restaurants in your area.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    2
                  </div>
                  <h3 className="text-xl font-medium">Place Your Order</h3>
                  <p className="mt-2 text-muted-foreground">
                    Select your favorite dishes, customize as needed, and proceed to checkout.
                  </p>
                </div>
                
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                    3
                  </div>
                  <h3 className="text-xl font-medium">Enjoy Your Meal</h3>
                  <p className="mt-2 text-muted-foreground">
                    Our delivery team brings your order right to your door, fresh and ready to enjoy.
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="relative overflow-hidden py-16">
            <div className="absolute inset-0 bg-black/5" />
            <div className="container relative">
              <div className="mx-auto max-w-5xl rounded-2xl bg-white p-8 shadow-elevated sm:p-12">
                <div className="flex flex-col items-center text-center sm:flex-row sm:text-left">
                  <div className="sm:flex-1">
                    <h2 className="text-2xl font-bold sm:text-3xl">
                      Ready to order your first meal?
                    </h2>
                    <p className="mt-2 text-muted-foreground">
                      Start your culinary journey with GourmetGo today and experience 
                      exceptional dining at home.
                    </p>
                  </div>
                  <div className="mt-6 sm:mt-0 sm:ml-6">
                    <a 
                      href="/menu" 
                      className="inline-block rounded-full bg-primary px-8 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary/90"
                    >
                      Explore Our Menu
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Index;
