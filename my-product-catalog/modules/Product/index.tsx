'use client'
import { Product as ProductType } from '@/types';
import { useCart } from '../context/CartContext';
import * as React from "react"
import { cn } from "@/lib/utils"

interface ProductProps {
  product: ProductType;
}

const ProductOld = ({ product }: ProductProps) => {
  const { addToCart } = useCart();

  return (
    <div>
      <h2>Code: {product.code}</h2>
      {product.details && (
        <ul>
          {product.details.map((detail, index) => (
            <li key={index}>{detail.key}: {detail.value}</li>
          ))}
        </ul>
      )}
      <p>EMB: {product.emb}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  );
};


const Product = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border border-solid border-slate-300 bg-white w-fit shadow-sm",
      className
    )}
    {...props}
  />
))
Product.displayName = "Product"

const ProductHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
ProductHeader.displayName = "ProductHeader"

const ProductTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
ProductTitle.displayName = "ProductTitle"

const ProductDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
ProductDescription.displayName = "ProductDescription"

const ProductContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
ProductContent.displayName = "ProductContent"

const ProductFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
ProductFooter.displayName = "ProductFooter"

export { Product, ProductHeader, ProductFooter, ProductTitle, ProductDescription, ProductContent }


export default Product;
