import React from "react";
import Card from "@/app/_shared-components/card";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { ProductCardProps } from "./product-card";

const schema = yup.object({
  img: yup.string().optional(),
  title: yup.string().required().min(5),
  desc: yup.string().required().min(10),
  price: yup.number().required(),
}).required();

interface ProductUploaderProps {
  proData: ProductCardProps[];
  setData: React.Dispatch<React.SetStateAction<ProductCardProps[]>>;
}

const ProductUploader: React.FC<ProductUploaderProps> = ({ setData }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data: ProductCardProps) => {
    setData((prevData) => [...prevData, data]);
    reset();
  };

  return (
    <div className="flex flex-row gap-4 ">
        <Card>
          <div className='flex gap-3 h-screen w-full items-center justify-around bg-slate-300'>
            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-3 space-y-3'>
              <h1 className='text-slate-900 font-extrabold text-center text-2xl'>
                Product Uploader
              </h1>
              <div className='space-y-3'>
              <div className='flex flex-col p-2'>
                  <label>Image</label>
                  <input className='p-1 rounded-md' placeholder='image' type="text" {...register("img")} />
                  <div className="text-red-500 text-sm">{errors.img?.message as string}</div>
                </div>
                <div className='flex flex-col p-2'>
                  <label>Title</label>
                  <input className='p-1 rounded-md' placeholder='title' type="text" {...register("title")} />
                  <div className="text-red-500 text-sm">{errors.title?.message as string}</div>
                </div>
                <div className='flex flex-col p-2'>
                  <label>Description</label>
                  <input className='p-1 rounded-md' placeholder='desc' type="text" {...register("desc")} />
                  <div className="text-red-500 text-sm">{errors.desc?.message as string}</div>
                </div>
                <div className='flex flex-col p-2'>
                  <label>Price</label>
                  <input className='p-1 rounded-md' placeholder="Enter price" type="number" {...register("price")} />
                  <div className="text-red-500 text-sm">{errors.price?.message as string}</div>
                </div>
              </div>
              <button className='w-full bg-slate-800 text-violet-50 rounded-md' type="submit">Submit</button>
            </form>
          </div>
        </Card>
      </div>
  );
};

export default ProductUploader;
