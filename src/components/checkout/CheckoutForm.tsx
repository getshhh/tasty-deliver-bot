
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { CreditCard, Wallet, Truck } from 'lucide-react';
import { CartItem, DeliveryAddress } from '@/utils/types';
import { toast } from 'sonner';

interface CheckoutFormProps {
  cartItems: CartItem[];
  onCheckoutComplete: () => void;
}

const CheckoutForm = ({ cartItems, onCheckoutComplete }: CheckoutFormProps) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'cash' | 'crypto'>('cash');
  const [isProcessing, setIsProcessing] = useState(false);
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    fullName: '',
    address: '',
    phone: '',
    zipCode: '',
    comments: ''
  });

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity, 0
  );
  const deliveryFee = 4.99;
  const total = subtotal + deliveryFee;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setDeliveryAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = () => {
    if (!deliveryAddress.fullName.trim()) {
      toast.error('Пожалуйста, укажите ФИО получателя');
      return false;
    }
    if (!deliveryAddress.address.trim()) {
      toast.error('Пожалуйста, укажите адрес доставки');
      return false;
    }
    if (!deliveryAddress.phone.trim()) {
      toast.error('Пожалуйста, укажите контактный телефон');
      return false;
    }
    if (!deliveryAddress.zipCode.trim()) {
      toast.error('Пожалуйста, укажите почтовый индекс');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsProcessing(true);
    
    // Имитация обработки заказа
    setTimeout(() => {
      setIsProcessing(false);
      toast.success('Заказ успешно оформлен!');
      onCheckoutComplete();
      navigate('/order-confirmation');
    }, 1500);
  };

  return (
    <div className="mx-auto max-w-3xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-bold">Оформление заказа</h1>
      
      <div className="mb-8 rounded-lg border bg-background p-6 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">Ваш заказ</h2>
        {cartItems.map((item) => (
          <div key={item.product.id} className="mb-3 flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src={item.product.image} 
                alt={item.product.name}
                className="mr-3 h-12 w-12 rounded-md object-cover"
              />
              <div>
                <p className="font-medium">{item.product.name}</p>
                <p className="text-sm text-muted-foreground">
                  {item.quantity} × ${item.product.price.toFixed(2)}
                </p>
              </div>
            </div>
            <p className="font-medium">
              ${(item.quantity * item.product.price).toFixed(2)}
            </p>
          </div>
        ))}
        
        <Separator className="my-4" />
        
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span>Подытог</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Стоимость доставки</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Итого</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
      </div>
      
      <form onSubmit={handleSubmit}>
        <div className="mb-8 rounded-lg border bg-background p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Адрес доставки</h2>
          
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="fullName">ФИО получателя</Label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="Введите полное имя"
                value={deliveryAddress.fullName}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="address">Адрес</Label>
              <Input
                id="address"
                name="address"
                placeholder="Улица, дом, квартира"
                value={deliveryAddress.address}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                name="phone"
                placeholder="+7 (XXX) XXX-XX-XX"
                value={deliveryAddress.phone}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="zipCode">Почтовый индекс</Label>
              <Input
                id="zipCode"
                name="zipCode"
                placeholder="XXXXXX"
                value={deliveryAddress.zipCode}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="comments">Комментарии к заказу</Label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="Особые пожелания, код домофона и т.д."
                value={deliveryAddress.comments}
                onChange={handleInputChange}
                className="h-24 resize-none"
              />
            </div>
          </div>
        </div>
        
        <div className="mb-8 rounded-lg border bg-background p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold">Способ оплаты</h2>
          
          <RadioGroup
            value={paymentMethod}
            onValueChange={(value) => setPaymentMethod(value as 'card' | 'cash' | 'crypto')}
            className="space-y-4"
          >
            <div className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-secondary">
              <RadioGroupItem value="cash" id="cash" />
              <Label htmlFor="cash" className="flex flex-1 cursor-pointer items-center space-x-3">
                <Wallet className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Наличными при получении</p>
                  <p className="text-sm text-muted-foreground">
                    Оплата курьеру при доставке
                  </p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-secondary">
              <RadioGroupItem value="card" id="card" />
              <Label htmlFor="card" className="flex flex-1 cursor-pointer items-center space-x-3">
                <CreditCard className="h-5 w-5 text-gray-500" />
                <div>
                  <p className="font-medium">Банковская карта</p>
                  <p className="text-sm text-muted-foreground">
                    Visa, MasterCard, Мир
                  </p>
                </div>
              </Label>
            </div>
            
            <div className="flex items-center space-x-3 rounded-lg border p-4 transition-colors hover:bg-secondary">
              <RadioGroupItem value="crypto" id="crypto" />
              <Label htmlFor="crypto" className="flex flex-1 cursor-pointer items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-gray-500"
                >
                  <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.16-6.2L12.32 3.3" />
                </svg>
                <div>
                  <p className="font-medium">Криптовалюта</p>
                  <p className="text-sm text-muted-foreground">
                    BTC, ETH, USDT
                  </p>
                </div>
              </Label>
            </div>
          </RadioGroup>
        </div>
        
        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <span className="flex items-center">
              <svg className="mr-2 h-4 w-4 animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Обработка...
            </span>
          ) : (
            <span className="flex items-center">
              <Truck className="mr-2 h-5 w-5" />
              Оформить заказ
            </span>
          )}
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;
