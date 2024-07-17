'use client'
import { useState } from 'react';
import { useCart } from '@/modules/context/CartContext';
import { Product, ProductHeader, ProductFooter, ProductContent, ProductTitle } from '@/modules/Product';
import Cart from '@/modules/Cart';
import { Product as ProductType } from '../types';
import Products from '../Products.json'
import Image from 'next/image';

const Home = () => {
  const { addToCart } = useCart();
  const [products] = useState<ProductType[]>(Products);

  return (
    <div>
      <header className='w-full bg-red-500 p-4 text-white flex items-center justify-center font-bold text-lg'>
        <h1>Product Catalog</h1>
      </header>
      <div className='grid grid-cols-3 gap-2 px-4 py-2 container max-w-[100vw] w-full'>
        {products.map((product) => (
          <Product key={product.code} className='flex flex-col'>
            <ProductHeader className='flex flex-col items-center'>
              <ProductTitle>{product.name}</ProductTitle>
              <Image src={product.image} alt={product.name} className='w-[170px] h-[165px]' width={170} height={165} />
            </ProductHeader>
            {product.details && (
              <ProductContent>
                <ul>
                  {product.details.map((detail, index) => (
                    <li key={index} className="capitalize">
                      {detail.key}: {detail.value}
                    </li>
                  ))}
                </ul>
              </ProductContent>
            )}
            {/* <p>EMB: {product.emb}</p> */}
            <ProductFooter className='mt-auto'>
              <button onClick={() => addToCart(product)} className='w-full'>Adicionar ao carrinho</button>
            </ProductFooter>
          </Product>
        ))}
      </div>
      <Cart />
    </div>
  );
};

export default Home;
