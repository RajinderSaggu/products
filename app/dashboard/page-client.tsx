"use client";
import React, { useState } from "react";
import ProductUploader from "./_components/product-uploader";
import ProductList from "./_components/product-list";
import { ProductCardProps } from "./_components/product-card";

const DashboardClient = () => {
  const [proData, setData] = useState<ProductCardProps[]>([]);

  return (
    <div className="flex flex-col md:flex-row gap-6 p-4">
      <div className="w-full md:w-2/3">
        <h1 className="text-slate-900 font-extrabold text-center text-2xl mb-4">
          Product List
        </h1>
        <ProductList proData={proData} />
        </div>
        <div className="w-full md:w-1/3">
        <ProductUploader proData={proData} setData={setData} />
      </div>
    </div>
  );
};

export default DashboardClient;
