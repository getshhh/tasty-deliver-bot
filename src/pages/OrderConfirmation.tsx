
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, ShoppingBag, MessageSquare } from 'lucide-react';

const OrderConfirmation = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 py-24 text-center">
      <div className="mx-auto max-w-md">
        <div className="mb-6 rounded-full bg-green-100 p-3 text-green-600">
          <CheckCircle className="mx-auto h-16 w-16" />
        </div>
        
        <h1 className="mb-3 text-3xl font-bold">Заказ успешно оформлен!</h1>
        
        <p className="mb-8 text-lg text-muted-foreground">
          Спасибо за ваш заказ! Номер вашего заказа: <strong>#R{Math.floor(Math.random() * 10000)}</strong>. 
          Вы получите уведомление о статусе вашего заказа.
        </p>
        
        <div className="mb-6 rounded-lg border bg-background p-6 text-left shadow-sm">
          <h3 className="mb-3 text-lg font-semibold">Статус заказа</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Статус</span>
              <span className="font-medium text-amber-600">В обработке</span>
            </div>
            <div className="flex justify-between">
              <span>Время доставки</span>
              <span className="font-medium">~40-60 минут</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col space-y-3 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Button asChild variant="outline" className="flex-1">
            <Link to="/orders">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Мои заказы
            </Link>
          </Button>
          
          <Button asChild className="flex-1">
            <Link to="/chat">
              <MessageSquare className="mr-2 h-5 w-5" />
              Чат с продавцом
            </Link>
          </Button>
        </div>
        
        <div className="mt-8">
          <Button asChild variant="ghost" className="text-muted-foreground">
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
