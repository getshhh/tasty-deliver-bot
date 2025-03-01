
import React, { useState, useRef, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { Send, Clock, Image, FilePlus, Info } from 'lucide-react';
import { toast } from 'sonner';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'seller';
  timestamp: Date;
  isRead: boolean;
}

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Здравствуйте! Ваш заказ принят в обработку. Примерное время доставки 40-60 минут. Если у вас есть вопросы, пишите в этот чат.',
      sender: 'seller',
      timestamp: new Date(Date.now() - 1000 * 60 * 30),
      isRead: true,
    },
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [lastMessageTime, setLastMessageTime] = useState(Date.now());
  const messageEndRef = useRef<HTMLDivElement>(null);
  
  // Автоматическая прокрутка к последнему сообщению
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSendMessage = () => {
    if (!newMessage.trim()) return;
    
    // Проверка анти-спам (не более 1 сообщения в 5 секунд)
    const now = Date.now();
    if (now - lastMessageTime < 5000) {
      toast.error('Пожалуйста, подождите 5 секунд перед отправкой нового сообщения');
      return;
    }
    
    setLastMessageTime(now);
    
    const message: Message = {
      id: Date.now().toString(),
      text: newMessage.trim(),
      sender: 'user',
      timestamp: new Date(),
      isRead: false,
    };
    
    setMessages(prev => [...prev, message]);
    setNewMessage('');
    
    // Имитация ответа продавца
    if (Math.random() > 0.5) {
      setTimeout(() => {
        const replies = [
          'Спасибо за сообщение! Ваш заказ готовится и скоро будет отправлен.',
          'Заказ передан курьеру, ожидайте доставку в течение 15-20 минут.',
          'Да, можно добавить столовые приборы к заказу. Курьер привезет их.',
          'Если у вас будут еще вопросы, пожалуйста, напишите.',
        ];
        
        const replyMessage: Message = {
          id: Date.now().toString(),
          text: replies[Math.floor(Math.random() * replies.length)],
          sender: 'seller',
          timestamp: new Date(),
          isRead: true,
        };
        
        setMessages(prev => [...prev, replyMessage]);
      }, 1000 + Math.random() * 2000);
    }
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const handleFileUpload = () => {
    toast.info('Загрузка файлов будет доступна в ближайшее время');
  };
  
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="mx-auto flex min-h-screen max-w-3xl flex-col bg-background">
      {/* Заголовок чата */}
      <div className="sticky top-0 z-10 border-b bg-background p-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg" alt="Продавец" />
            <AvatarFallback>Р</AvatarFallback>
          </Avatar>
          <div className="ml-3">
            <h2 className="font-semibold">Ресторан "Вкусная еда"</h2>
            <p className="text-sm text-muted-foreground">Чат заказа #R{Math.floor(Math.random() * 10000)}</p>
          </div>
        </div>
      </div>
      
      {/* Область сообщений */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="flex justify-center">
          <div className="mb-6 rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground">
            <Clock className="mr-1 inline-block h-3 w-3" /> История чата
          </div>
        </div>
        
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            {message.sender === 'seller' && (
              <Avatar className="mr-2 h-8 w-8 self-end">
                <AvatarImage src="/placeholder.svg" alt="Продавец" />
                <AvatarFallback>Р</AvatarFallback>
              </Avatar>
            )}
            
            <div
              className={`rounded-lg px-4 py-2 ${
                message.sender === 'user'
                  ? 'rounded-br-none bg-primary text-primary-foreground'
                  : 'rounded-bl-none bg-secondary text-secondary-foreground'
              }`}
            >
              <div className="max-w-xs break-words sm:max-w-md">
                {message.text}
              </div>
              <div className="mt-1 text-right text-xs opacity-70">
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}
        
        <div ref={messageEndRef} />
      </div>
      
      <Separator />
      
      {/* Поле ввода сообщения */}
      <div className="sticky bottom-0 border-t bg-background p-4">
        <div className="flex space-x-2">
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleFileUpload}
            title="Отправить изображение"
          >
            <Image className="h-5 w-5" />
          </Button>
          
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleFileUpload}
            title="Отправить файл"
          >
            <FilePlus className="h-5 w-5" />
          </Button>
          
          <div className="relative flex-1">
            <Input
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Введите сообщение..."
              className="pr-10"
            />
          </div>
          
          <Button
            type="button"
            size="icon"
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        
        <div className="mt-2 flex items-center justify-center text-xs text-muted-foreground">
          <Info className="mr-1 h-3 w-3" /> 
          Ограничение: не более 1 сообщения каждые 5 секунд
        </div>
      </div>
    </div>
  );
};

export default Chat;
