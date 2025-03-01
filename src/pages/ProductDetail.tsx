
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Clock, 
  ArrowLeft, 
  Plus, 
  Minus,
  Flame,
  Leaf,
  Wheat
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { products } from '@/utils/data';
import { Product } from '@/utils/types';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

interface ProductDetailProps {
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductDetail = ({ onAddToCart }: ProductDetailProps) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    // Simulate API fetch with a slight delay
    const timer = setTimeout(() => {
      const foundProduct = products.find(p => p.id === id);
      setProduct(foundProduct || null);
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [id]);
  
  const handleAddToCart = () => {
    if (product) {
      onAddToCart(product, quantity);
      toast.success(`${quantity} × ${product.name} added to cart`);
    }
  };
  
  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toast.success(isFavorite ? 'Removed from favorites' : 'Added to favorites');
  };
  
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="loader" />
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="container mx-auto flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h2 className="mb-4 text-2xl font-bold">Product Not Found</h2>
        <p className="mb-6 text-muted-foreground">
          The product you're looking for doesn't exist or has been removed.
        </p>
        <Button onClick={() => navigate('/menu')}>Back to Menu</Button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="container mx-auto px-4">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center text-sm" 
          onClick={() => navigate(-1)}
        >
          <ArrowLeft size={16} className="mr-2" />
          Back
        </Button>
        
        <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
          {/* Product Image */}
          <div className="relative overflow-hidden rounded-xl bg-white">
            <img 
              src={product.image} 
              alt={product.name}
              className="h-full w-full object-cover"
            />
          </div>
          
          {/* Product Details */}
          <div className="flex flex-col">
            {product.featured && (
              <div className="mb-4 inline-block w-fit rounded-full bg-secondary px-3 py-1">
                <span className="text-xs font-medium text-secondary-foreground">
                  Featured
                </span>
              </div>
            )}
            
            <h1 className="mb-2 text-3xl font-bold md:text-4xl">{product.name}</h1>
            
            <div className="mb-4 flex items-center space-x-2">
              <div className="flex items-center">
                <span className="text-amber-500">★</span>
                <span className="ml-1 font-medium">{product.rating}</span>
                <span className="ml-1 text-sm text-muted-foreground">
                  ({product.reviewCount} reviews)
                </span>
              </div>
              
              {product.preparationTime && (
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock size={14} className="mr-1" />
                  <span>{product.preparationTime}</span>
                </div>
              )}
            </div>
            
            <div className="mb-6 text-xl font-bold">${product.price.toFixed(2)}</div>
            
            <p className="mb-6 text-muted-foreground">{product.description}</p>
            
            {product.tags && (
              <div className="mb-6 flex flex-wrap gap-2">
                {product.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="rounded-full bg-secondary px-3 py-1 text-sm font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            <Separator className="mb-6" />
            
            {product.ingredients && (
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                  Ingredients
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-sm">
                  {product.ingredients.map((ingredient) => (
                    <li key={ingredient} className="flex items-center">
                      <Leaf size={14} className="mr-2 text-green-600" />
                      {ingredient}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {product.nutritionalInfo && (
              <div className="mb-6">
                <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide">
                  Nutritional Information
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  <div className="rounded-lg bg-secondary p-3 text-center">
                    <Flame size={16} className="mx-auto mb-1 text-orange-500" />
                    <span className="block font-medium">{product.nutritionalInfo.calories}</span>
                    <span className="text-xs text-muted-foreground">calories</span>
                  </div>
                  <div className="rounded-lg bg-secondary p-3 text-center">
                    <Wheat size={16} className="mx-auto mb-1 text-amber-600" />
                    <span className="block font-medium">{product.nutritionalInfo.carbs}g</span>
                    <span className="text-xs text-muted-foreground">carbs</span>
                  </div>
                  <div className="rounded-lg bg-secondary p-3 text-center">
                    <div className="mx-auto mb-1 h-4 w-4 text-purple-600">P</div>
                    <span className="block font-medium">{product.nutritionalInfo.protein}g</span>
                    <span className="text-xs text-muted-foreground">protein</span>
                  </div>
                  <div className="rounded-lg bg-secondary p-3 text-center">
                    <div className="mx-auto mb-1 h-4 w-4 text-yellow-600">F</div>
                    <span className="block font-medium">{product.nutritionalInfo.fat}g</span>
                    <span className="text-xs text-muted-foreground">fat</span>
                  </div>
                </div>
              </div>
            )}
            
            <div className="mt-auto flex flex-wrap items-center gap-4">
              <div className="flex items-center rounded-full border">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-l-full"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  aria-label="Decrease quantity"
                >
                  <Minus size={16} />
                </Button>
                <span className="flex w-10 items-center justify-center text-sm font-medium">
                  {quantity}
                </span>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-r-full"
                  onClick={() => setQuantity(quantity + 1)}
                  aria-label="Increase quantity"
                >
                  <Plus size={16} />
                </Button>
              </div>
              
              <Button 
                className="flex-1" 
                size="lg"
                onClick={handleAddToCart}
              >
                Add to Cart
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className={cn(
                  "h-12 w-12 rounded-full",
                  isFavorite && "border-red-200 bg-red-50 text-red-500"
                )}
                onClick={handleToggleFavorite}
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
              >
                <Heart size={20} className={cn(isFavorite && "fill-red-500")} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
