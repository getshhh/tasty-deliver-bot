
import React from 'react';
import { Button } from '@/components/ui/button';

interface TelegramAuthProps {
  onLogin: (userData: any) => void;
}

const TelegramAuth: React.FC<TelegramAuthProps> = ({ onLogin }) => {
  const handleTelegramLogin = () => {
    // Since we can't directly implement Telegram login without the actual API,
    // we'll simulate a successful login with mock data
    const mockUserData = {
      id: "123456789",
      first_name: "Demo",
      last_name: "User",
      username: "demouser",
      photo_url: "https://t.me/i/userpic/320/demouser.jpg",
      auth_date: Math.floor(Date.now() / 1000),
      hash: "mock_hash_value"
    };
    
    // Simulate a network delay
    setTimeout(() => {
      onLogin(mockUserData);
    }, 500);
  };

  return (
    <Button 
      size="sm" 
      onClick={handleTelegramLogin}
      className="bg-[#0088cc] text-white hover:bg-[#0088cc]/90"
    >
      Login with Telegram
    </Button>
  );
};

export default TelegramAuth;
