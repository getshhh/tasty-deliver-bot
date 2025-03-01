
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Clock,
  CheckCircle2,
  Truck,
  ShoppingBag,
  Package,
  X,
  MessageSquare,
  Star
} from 'lucide-react';
import { toast } from 'sonner';

interface OrderStatus {
  status: 'pending' | 'confirmed' | 'preparing' | 'delivering' | 'delivered' | 'cancelled';
  label: string;
  icon: React.ReactNode;
  color: string;
}

const getStatusDetails = (status: string): OrderStatus => {
  switch (status) {
    case 'pending':
      return {
        status: 'pending',
        label: 'В обработке',
        icon: <Clock className="h-5 w-5" />,
        color: 'text-amber-500'
      };
    case 'confirmed':
      return {
        status: 'confirmed',
        label: 'Подтвержден',
        icon: <CheckCircle2 className="h-5 w-5" />,
        color: 'text-blue-500'
      };
    case 'preparing':
      return {
        status: 'preparing',
        label: 'Готовится',
        icon: <Package className="h-5 w-5" />,
        color: 'text-purple-500'
      };
    case 'delivering':
      return {
        status: 'delivering',
        label: 'В пути',
        icon: <Truck className="h-5 w-5" />,
        color: 'text-indigo-500'
      };
    case 'delivered':
      return {
        status: 'delivered',
        label: 'Доставлен',
        icon: <CheckCircle2 className="h-5 w-5" />,
        color: 'text-green-500'
      };
    case 'cancelled':
      return {
        status: 'cancelled',
        label: 'Отменен',
        icon: <X className="h-5 w-5" />,
        color: 'text-red-500'
      };
    default:
      return {
        status: 'pending',
        label: 'В обработке',
        icon: <Clock className="h-5 w-5" />,
        color: 'text-amber-500'
      };
  }
};

const mockOrders = [
  {
    id: 'R1234',
    date: new Date(Date.now() - 1000 * 60 * 30),
    status: 'delivering',
    items: [
      { name: 'Пицца "Маргарита"', quantity: 1, price: 12.99 },
      { name: 'Кока-Кола', quantity: 2, price: 2.50 }
    ],
    totalAmount: 17.99,
    paymentMethod: 'cash',
    address: 'ул. Ленина, 123, кв. 45'
  },
  {
    id: 'R0982',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2),
    status: 'delivered',
    items: [
      { name: 'Бургер "Классический"', quantity: 2, price: 8.99 },
      { name: 'Картофель фри', quantity: 1, price: 3.50 },
      { name: 'Милкшейк', quantity: 1, price: 4.99 }
    ],
    totalAmount: 26.47,
    paymentMethod: 'card',
    address: 'ул. Пушкина, 45, кв. 12'
  },
  {
    id: 'R0768',
    date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 7),
    status: 'cancelled',
    items: [
      { name: 'Суши-сет "Филадельфия"', quantity: 1, price: 28.99 }
    ],
    totalAmount: 28.99,
    paymentMethod: 'card',
    address: 'ул. Гагарина, 78, кв. 65'
  }
];

const Orders = () => {
  const handleLeaveReview = (orderId: string) => {
    toast.success(`Отзыв для заказа ${orderId} будет доступен в следующей версии`);
  };
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };
  
  return (
    <div className="min-h-screen bg-background px-4 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Мои заказы</h1>
          <Button asChild>
            <Link to="/menu">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Заказать еще
            </Link>
          </Button>
        </div>
        
        {mockOrders.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-12 text-center">
            <ShoppingBag className="mb-4 h-12 w-12 text-muted-foreground" />
            <h2 className="mb-2 text-xl font-semibold">У вас пока нет заказов</h2>
            <p className="mb-6 text-muted-foreground">
              Когда вы сделаете заказ, он будет отображаться здесь.
            </p>
            <Button asChild>
              <Link to="/menu">Перейти в меню</Link>
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {mockOrders.map((order) => {
              const statusDetails = getStatusDetails(order.status);
              
              return (
                <div key={order.id} className="overflow-hidden rounded-lg border bg-background shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-4 bg-secondary/30 p-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Заказ #{order.id}</p>
                      <p className="text-sm text-muted-foreground">{formatDate(order.date)}</p>
                    </div>
                    
                    <div className={`flex items-center rounded-full bg-white px-3 py-1 ${statusDetails.color}`}>
                      {statusDetails.icon}
                      <span className="ml-2 text-sm font-medium">{statusDetails.label}</span>
                    </div>
                  </div>
                  
                  <div className="p-4">
                    <div className="space-y-3">
                      {order.items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                          <div>
                            <span className="font-medium">{item.name}</span>
                            <span className="ml-2 text-sm text-muted-foreground">x{item.quantity}</span>
                          </div>
                          <span>${(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Separator className="my-4" />
                    
                    <div className="grid gap-2 sm:grid-cols-2">
                      <div>
                        <p className="text-sm font-medium">Адрес доставки</p>
                        <p className="text-sm text-muted-foreground">{order.address}</p>
                      </div>
                      
                      <div>
                        <p className="text-sm font-medium">Метод оплаты</p>
                        <p className="text-sm capitalize text-muted-foreground">
                          {order.paymentMethod === 'cash' ? 'Наличными при получении' : 
                           order.paymentMethod === 'card' ? 'Банковская карта' : 'Криптовалюта'}
                        </p>
                      </div>
                    </div>
                    
                    <div className="mt-4 flex justify-between">
                      <span className="font-semibold">Итого:</span>
                      <span className="font-semibold">${order.totalAmount.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 border-t bg-secondary/30 p-4">
                    <Button asChild variant="outline" size="sm">
                      <Link to="/chat">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        Чат
                      </Link>
                    </Button>
                    
                    {order.status === 'delivered' && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleLeaveReview(order.id)}
                      >
                        <Star className="mr-2 h-4 w-4" />
                        Оставить отзыв
                      </Button>
                    )}
                    
                    {(order.status === 'pending' || order.status === 'confirmed') && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="text-red-500 hover:bg-red-50 hover:text-red-600"
                        onClick={() => toast.info('Функция отмены заказа будет доступна в следующей версии')}
                      >
                        <X className="mr-2 h-4 w-4" />
                        Отменить заказ
                      </Button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
