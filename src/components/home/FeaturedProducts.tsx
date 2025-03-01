
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ui/ProductCard';
import { Product, CartItem } from '@/utils/types';
import { ArrowRight } from 'lucide-react';
import { toast } from 'sonner';

interface FeaturedProductsProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
}

const FeaturedProducts = ({ products, onAddToCart }: FeaturedProductsProps) => {
  const navigate = useNavigate();
  const [favorites, setFavorites] = useState<string[]>([]);

  const featuredProducts = products.filter(product => product.featured);

  const handleToggleFavorite = (productId: string) => {
    setFavorites(prev => {
      if (prev.includes(productId)) {
        toast.success("Удалено из избранного");
        return prev.filter(id => id !== productId);
      } else {
        toast.success("Добавлено в избранное");
        return [...prev, productId];
      }
    });
  };

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    toast.success(`${product.name} добавлено в корзину`);
  };

  return (
    <section className="bg-white py-16">
      <div className="container">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Популярные блюда</h2>
            <p className="mt-2 text-lg text-muted-foreground">
              Наши самые популярные кулинарные творения, выбранные специально для вас
            </p>
          </div>
          
          <Button 
            variant="link" 
            className="group flex items-center text-primary"
            onClick={() => navigate('/menu')}
          >
            Посмотреть все меню
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
        
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onToggleFavorite={handleToggleFavorite}
              isFavorite={favorites.includes(product.id)}
              className="animate-fade-in opacity-0"
              style={{ animationDelay: `${featuredProducts.indexOf(product) * 0.1}s`, animationFillMode: 'forwards' }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
