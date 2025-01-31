import React from "react";
import ProductCard, { ProductCardProps } from "./product-card";

interface ProductListProps {
  proData: ProductCardProps[];
}

const ProductList: React.FC<ProductListProps> = ({ proData }) => {
  return (
    <div className="basis-2/3 grid grid-cols-2 sm:grid-cols-3 gap-3 m-4 ">
        
      {proData?.map((item: ProductCardProps, index) => (
        <div key={index}>
          <ProductCard img={item?.img} title={item.title} desc={item.desc} price={item.price} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
