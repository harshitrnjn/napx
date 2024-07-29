import Image from "next/image";
import React from "react";
import Product2 from "@/assests/Product2.jpg";
import { FaArrowRight } from "react-icons/fa";

const One = () => {
  return (
    <div className="sm:w-full w-screen h-screen  bg-customBlue sm:rounded-t-[50px] relative  flex justify-center items-center rounded-t-[25px]">
      <div className=" sm:w-[85%] w-[95%] sm:h-[95%]  flex items-center justify-center flex-col sm:flex-row  gap-[5vw] sm:pl-[7vw] pl-0 sm:mt-[2vw] mt-[10vh]">
        <Image src={Product2} alt="product_image_404" 
        className="sm:w-[33vw] sm:h-[30vw] w-full object-cover rounded-[25px] "
        />
        <div className="flex-col flex justify-center items-center">
          <h1 
          className="sm:text-[7vw] text-[12vw] sm:font-normal font-semibold sm:-tracking-[0.65vw] tracking-tighter sm:text-right text-white sm:leading-[7.5vw] leading-[12.5vw] font-sans absolute sm:top-[6%] sm:right-[16.5%]  top-[1.5%] right-[10%] text-center "
          >INTRODUCING 
          <br />
          PAPER NAPKINS</h1>
          <p className="sm:w-[90%]  text-white sm:mt-[8vw] sm:text-left text-center sm:text-xl w-full text-lg">
            Paper napkins are essential for maintaining hygiene and convenience
            in everyday life. They are used in homes, restaurants, and public
            places for cleaning hands and surfaces, making them vital for
            promoting cleanliness. Lightweight and disposable, they reduce the
            spread of germs compared to cloth alternatives. Their versatility
            and ease of use make them indispensable for personal hygiene,
            enhancing the quality of life by ensuring a quick and sanitary way
            to manage spills and messes.
          </p>
          <button className="mt-12 flex justify-center items-center gap-2 border-2 sm:px-5 sm:py-3 bg-white text-customBlue font-semibold rounded-full hover:scale-110 transition-all duration-150 ease-linear
         outline-none text-xl sm:text-xl
         px-4 py-3
          ">
            Explore More <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default One;
