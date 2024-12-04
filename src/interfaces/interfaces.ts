import { ReactNode } from "react";

export interface ProductDto {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
}

export interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

export interface CartContextType {
    cart: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    getTotalPrice: () => number;
    increaseQuantity: (id: number) => void;
    decreaseQuantity: (id: number) => void;
}

export interface CartProviderType {
  children: ReactNode;
}