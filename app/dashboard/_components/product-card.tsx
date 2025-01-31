import Image from 'next/image';
import React from 'react';
import Card from '@/app/_shared-components/card';

export interface ProductCardProps {
  img?: string;
  title: string;
  desc: string;
  price: number;
}

const ProductCard = ({ img, title, desc, price }: ProductCardProps) => {
  return (
    <Card>
      <div className="flex flex-col items-center">
        {img && (
          <Image 
            className="w-full rounded-t-lg" 
            src={img} 
            alt={title} 
            unoptimized 
            width={300} 
            height={200} 
          />
        )}
        <div className="px-6 py-4 bg-slate-200 text-center w-full">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{desc}</p>
          <div className="w-full bg-slate-800 text-lime-50 rounded-xl p-1 text-center text-sm mt-3">
            ${price}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
