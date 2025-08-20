import { ReactNode } from 'react';

export interface Property {
  id: string;
  title: string;
  description: string;
  pricePerNight: number;
  location: string;
  images: string[];
  amenities: string[];
  rating: number;
  reviewsCount: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  profilePicture: string;
  isSuperhost: boolean;
}

export interface Booking {
  id: string;
  propertyId: string;
  userId: string;
  startDate: Date;
  endDate: Date;
  totalPrice: number;
}

export interface Review {
  id: string;
  propertyId: string;
  userId: string;
  rating: number;
  comment: string;
  createdAt: Date;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export interface ThemeContextType {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export interface PropsWithChildren {
  children: ReactNode;
}

export default {}; // Default export to avoid TypeScript errors