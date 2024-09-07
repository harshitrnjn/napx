import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { ProductData } from "@/assests/ProductData";
import Link from "next/link";

const Four = () => {
  return (
    <div
      className="sm:w-full w-[100vw] lg:h-[90vh] md:h-[175vh] h-[280vh] bg-white flex flex-col border-t-2 border-b-2 pt-12
    "
    >
      <div className="products w-full h-full flex-col flex justify-start items-center gap-y-5">
        <h1 className="text-center sm:text-7xl text-[11vw]   tracking-tight font-semibold text-customBlue ">
          OUR PRODUCTS
        </h1>
        <div className="w-full lg:h-[25vw] h-[360vh] flex lg:flex-row flex-col justify-center gap-x-[4vw]  items-center gap-y-12 md:gap-y-[10vw] lg:gap-y-0  sm:px-7 ">
          {ProductData.map((product) => (
            <div
              className="container md:h-[30vw] md:w-[55vw] lg:w-[25vw] w-[75vw] h-[90vw] lg:h-[20vw] flex flex-col justify-center items-center sm:gap-y-2 gap-y-5 hover:cursor-pointer"
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
       <Link href={"https://online.fliphtml5.com/lxbqg/xsxs/#p=2"}> <button className="lg:mb-5 md:mb-[10vw] mb-10 sm:px-7 sm:py-4 px-6 py-4 bg-customBlue text-white sm:text-xl text-xl rounded-full flex justify-center items-center gap-2 hover:scale-105 transition-all duration-100">
          Explore More <FaArrowRight />
        </button></Link>
      </div>
    </div>
  );
};

export default Four;
