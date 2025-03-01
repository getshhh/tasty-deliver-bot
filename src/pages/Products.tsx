
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ProductCard from '@/components/ui/ProductCard';
import { Product } from '@/utils/types';
import { products as allProducts } from '@/utils/data';
import { Search, Filter } from 'lucide-react';
import { toast } from 'sonner';

const Products = ({ onAddToCart }: { onAddToCart: (product: Product) => void }) => {
  const [searchParams] = useSearchParams();
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [activeFilter, setActiveFilter] = useState('all');

  // Extract category from URL if present
  const categoryParam = searchParams.get('category');

  useEffect(() => {
    let filtered = [...allProducts];
    
    // Filter by category if specified in URL
    if (categoryParam) {
      filtered = filtered.filter(
        product => product.category.toLowerCase() === categoryParam.toLowerCase()
      );
      setActiveFilter(categoryParam.toLowerCase());
    }
    
    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        product => 
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (product.tags && product.tags.some(tag => 
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          ))
      );
    }
    
    setDisplayedProducts(filtered);
  }, [categoryParam, searchTerm]);

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

  const filterOptions = [
    { id: 'all', label: 'Все' },
    { id: 'pizza', label: 'Пицца' },
    { id: 'burgers', label: 'Бургеры' },
    { id: 'asian', label: 'Азиатская' },
    { id: 'healthy', label: 'Здоровая еда' },
    { id: 'desserts', label: 'Десерты' },
  ];

  const applyFilter = (filter: string) => {
    setActiveFilter(filter);
    
    if (filter === 'all') {
      setDisplayedProducts(allProducts);
    } else {
      setDisplayedProducts(
        allProducts.filter(product => product.category.toLowerCase() === filter)
      );
    }
  };

  return (
    <div className="min-h-screen bg-background px-4 py-24 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="mb-10 space-y-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Наше меню</h1>
          <p className="max-w-3xl text-lg text-muted-foreground">
            Исследуйте наше разнообразное меню с блюдами, приготовленными из лучших ингредиентов. 
            От домашней классики до инновационных гастрономических решений — у нас есть блюда на любой вкус.
          </p>
          
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Поиск по названию, ингредиентам или кухне"
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex flex-wrap gap-2">
              {filterOptions.map((option) => (
                <Button
                  key={option.id}
                  variant={activeFilter === option.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => applyFilter(option.id)}
                >
                  {option.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
        
        {displayedProducts.length === 0 ? (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
            <Filter className="mb-4 h-12 w-12 text-muted-foreground" />
            <h2 className="text-xl font-semibold">Ничего не найдено</h2>
            <p className="mt-2 text-muted-foreground">
              Попробуйте изменить запрос или фильтры, чтобы найти то, что вы ищете.
            </p>
            <Button className="mt-4" onClick={() => {
              setSearchTerm('');
              applyFilter('all');
            }}>
              Сбросить фильтры
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onToggleFavorite={handleToggleFavorite}
                isFavorite={favorites.includes(product.id)}
                className="animate-fade-in opacity-0"
                style={{ 
                  animationDelay: `${displayedProducts.indexOf(product) * 0.05}s`, 
                  animationFillMode: 'forwards' 
                }}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
