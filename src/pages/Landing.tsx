"use client";
import Image from "next/image";
import React, { useState } from "react";
import Image1 from "@/assests/Image1.png";
import Product2 from "@/assests/Product2.jpg";
import ScrollingText from "@/components/ScrollingText";
import TextGenerator from "@/components/TextGenerator";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
// import gsap from "gsap";

const Landing = () => {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="sm:w-full w-[100vw] h-screen  fixed -z-10  text-white  bg-black sm:px-0 px-1">
      <div className=" sm:mt-[7vw] w-full px-3 flex justify-center items-center sm:gap-[5vw]  mt-[35vw]">
        <h1 className="text sm:text-[7vw] sm:-tracking-[0.5vw] font-bold sm:font-normal tracking-tighter text-[7.5vw]">
          X-ACTLY! WHAT YOU NEED
        </h1>
        <Image
          className="img1 rounded-xl block sm:block sm:w-[15vw] sm:h-[10vw] h-[25vw] w-[35vw] object-cover"
          src={Image1}
          alt="Product_image"
          // height={10}
        />
      </div>
      <div className="scrollText sm:w-full w-full h-[2.5vw] py-4 sm:py-2 mt-5 flex items-center border-y-2 sm:border-zinc-800 border-zinc-500">
        <ScrollingText width="full" />
      </div>
      <div className="w-full sm:h-full h-[62vh] relative flex sm:gap-y-0 sm:flex-row flex-col sm:gap-10 sm:mt-0 -mt-5 ">
      <div className="sm:w-[40%] w-full sm:h-full h-[25vh]  relative  sm:pl-[3vw] mt-[10vw] sm:mt-0 
      sm:hidden px-3
      ">
          <Image
            className="productImage sm:w-[33vw] sm:h-[20vw] w-[100%] h-[100%] rounded-[25px] flex justify-center items-center "
            src={Product2}
            alt="Product_image"
          />
        </div>
        <div className=" sm:w-[60%] w-full sm:h-full h-[40%]  mb-[6vw] sm:mt-[5vh] flex justify-center items-center ">
          <div className="generator h-full w-full sm:text-left text-center p-2 sm:pl-[4vw]">
            <TextGenerator />
          </div>
        </div>
        <div className="sm:w-[40%] w-full sm:h-full h-[50vh] relative pt-[2.7vw] sm:pl-[3vw] mt-[10vw] sm:mt-0 
        hidden sm:block
        ">
          <Image
            className="productImage sm:w-[33vw] sm:h-[20vw] w-[100%] h-[95%] rounded-[25px] flex justify-center items-center "
            src={Product2}
            alt="Product_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
