import { ChangeEvent, ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export interface ProductCardProps {
  id: number;
  title: string;
  price: number;
  category: string;
  image: string;
  addToCart: () => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface ErrorProps {
  msg: string;
}

export interface SearchAndFilterContainerProps {
  children: ReactNode;
  className?: string;
}

export interface SearchBarProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: ChangeEvent) => void;
}

export interface ButtonProps {
  type: "button" | "reset" | "submit" | undefined;
  children?: string;
  handleClick?: () => void;
  className?: string;
}

export interface SelectProps {
  children: ReactNode;
  onChange: (value: ChangeEvent) => void;
}

export interface ContainerProps {
  children: ReactNode;
}
