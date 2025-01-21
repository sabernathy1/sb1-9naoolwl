export interface User {
  id: string;
  email: string;
  full_name?: string;
  avatar_url?: string;
  created_at: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  customizable: boolean;
  created_at: string;
}

export interface CartItem {
  id: string;
  product_id: string;
  quantity: number;
  customization?: {
    design_url?: string;
    text?: string;
    color?: string;
    size?: string;
  };
}

export interface Order {
  id: string;
  user_id: string;
  status: 'pending' | 'processing' | 'completed' | 'cancelled';
  total: number;
  items: CartItem[];
  shipping_address: {
    street: string;
    city: string;
    state: string;
    postal_code: string;
    country: string;
  };
  created_at: string;
}