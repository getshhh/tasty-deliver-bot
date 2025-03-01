
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Product } from '@/utils/types';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  onToggleFavorite?: (productId: string) => void;
  className?: string;
  isFavorite?: boolean;
  style?: React.CSSProperties;
}

const ProductCard = ({ 
  product, 
  onAddToCart, 
  onToggleFavorite, 
  className,
  isFavorite = false,
  style
}: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl bg-white transition-all duration-300 hover:shadow-elevated",
        className
      )}
      style={style}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {product.featured && (
          <div className="absolute left-4 top-4 rounded-full bg-black/80 px-3 py-1 text-xs font-medium text-white">
            Рекомендуем
          </div>
        )}
        
        <button 
          onClick={() => onToggleFavorite && onToggleFavorite(product.id)}
          className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-gray-700 transition-all hover:bg-white hover:text-red-500"
          aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
        >
          <Heart size={18} className={cn(isFavorite && "fill-red-500 text-red-500")} />
        </button>
      </div>
      
      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center space-x-1">
            <span className="text-sm font-semibold text-amber-500">★</span>
            <span className="text-sm font-medium">{product.rating}</span>
            <span className="text-xs text-muted-foreground">({product.reviewCount})</span>
          </div>
          
          {product.preparationTime && (
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock size={14} className="mr-1" />
              <span>{product.preparationTime}</span>
            </div>
          )}
        </div>
        
        <Link to={`/product/${product.id}`} className="group-hover:text-primary">
          <h3 className="line-clamp-1 text-base font-semibold">{product.name}</h3>
        </Link>
        
        <p className="mt-1 line-clamp-2 flex-1 text-sm text-muted-foreground">
          {product.description}
        </p>
        
        {product.tags && (
          <div className="mt-3 flex flex-wrap gap-1">
            {product.tags.slice(0, 2).map((tag) => (
              <span 
                key={tag} 
                className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        <div className="mt-4 flex items-center justify-between">
          <div className="text-base font-semibold">{product.price.toFixed(2)} ₽</div>
          
          <Button 
            size="sm" 
            className="rounded-full" 
            onClick={() => onAddToCart && onAddToCart(product)}
          >
            <Plus size={16} className="mr-1" /> Добавить
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
