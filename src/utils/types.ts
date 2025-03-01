
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  reviewCount: number;
  featured?: boolean;
  preparationTime?: string;
  tags?: string[];
  ingredients?: string[];
  nutritionalInfo?: {
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
  };
}

export interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  telegramId?: string;
  username?: string;
  role: 'user' | 'admin';
  favorites: string[];
  orders: Order[];
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered' | 'cancelled';
  totalAmount: number;
  deliveryAddress: DeliveryAddress;
  createdAt: string;
  paymentMethod: 'cash' | 'card' | 'crypto';
}

export interface DeliveryAddress {
  fullName: string;
  address: string;
  phone: string;
  zipCode: string;
  comments?: string;
}
