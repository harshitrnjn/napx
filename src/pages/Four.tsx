import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { ProductData } from "@/assests/ProductData";

const Four = () => {
  return (
    <div
      className="sm:w-full w-[100vw] sm:h-[90vh] h-[280vh] bg-white flex flex-col border-t-2 border-b-2 pt-12
    "
    >
      <div className="products w-full h-full flex-col flex justify-start items-center gap-y-5">
        <h1 className="text-center sm:text-7xl text-[11vw]   tracking-tight font-semibold text-customBlue ">
          OUR PRODUCTS
        </h1>
        <div className="w-full sm:h-[25vw] h-[360vh] flex lg:flex-row flex-col justify-center gap-x-[4vw]  items-center gap-y-12 sm:gap-y-0  sm:px-7 ">
          {ProductData.map((product) => (
            <div
              className="container sm:w-[25vw] w-[75vw] h-[90vw] sm:h-[20vw] flex flex-col justify-center items-center sm:gap-y-2 gap-y-5 hover:cursor-pointer"
            >
              <Image
                src={product.src}
                alt="image_404"
                width={500}
                height={500}
                className="img sm:w-full sm:h-full w-[85%] h-[75%] object-cover rounded-2xl"
              />
              <h1 className="sm:text-lg text-2xl font-semibold text-customBlue">
                {product.name}
              </h1>
            </div>
          ))}
        </div>
        <button className="sm:mb-5 mb-10 sm:px-7 sm:py-4 px-6 py-4 bg-customBlue text-white sm:text-xl text-xl rounded-full flex justify-center items-center gap-2 hover:scale-105 transition-all duration-100">
          Explore More <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Four;
