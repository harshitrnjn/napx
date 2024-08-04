"use client"
import Image from "next/image";
import React from "react";
import Image1 from "@/assests/Image1.png";
import collage from "@/assests/collage.jpg";
import ScrollingText from "@/components/ScrollingText";
import TextGenerator from "@/components/TextGenerator";

const Landing = () => {
  // gsap.registerPlugin(ScrollTrigger);

  return (
    <div className="sm:w-full w-[100vw] h-screen  fixed -z-10  text-white  bg-black lg:bg-black sm:px-0 px-1">
      <div className=" lg:mt-[6vw] md:mt-[10vh] w-full px-3 flex justify-around items-center md:gap-x-[0vw] lg:gap-x-[10vw]  mt-[35vw]  md:px-10 lg:px-0  ">
        <h1 className="text lg:text-[5vw] md:text-[7vw] sm:-tracking-[0vw] font-bold sm:font-semibold tracking-tighter text-[7.5vw]">
          <span>X-actly</span> {" "}WHAT YOU NEED
        </h1>
        <Image
          className="img1 rounded-xl block sm:block lg:w-[15vw] lg:h-[10vw] md:h-[20vw] md:w-[20vw] h-[25vw] w-[35vw] object-cover"
          src={Image1}
          alt="Product_image"
          // height={10}
        />
      </div>
      <div className="scrollText sm:w-full w-full h-[2.5vw] py-4 lg:py-2 md:py-4 mt-5 flex items-center border-y-2 sm:border-zinc-800 border-zinc-500 md:mt-[5vh] lg:mt-10">
        <ScrollingText width="full" />
      </div>
      <div className="w-full lg:h-full h-[62vh] relative flex sm:gap-y-0 lg:flex-row flex-col sm:gap-10 sm:mt-0 -mt-5 ">
      <div className="sm:w-[40%] w-full lg:h-full md:h-[35vh] h-[25vh] md:w-full  relative  sm:pl-[3vw] mt-[10vw] lg:mt-0 md:mt-[8vw] 
      lg:hidden md:flex px-3  flex justify-center items-center
      ">
          <Image
            className="productImage lg:w-[33vw] lg:h-[20vw] md:w-[70%] w-[100%] h-[100%] rounded-[25px] flex justify-center items-center "
            src={collage}
            alt="Product_image"
          />
        </div>
        <div className=" lg:w-[60%] w-full sm:h-full h-[40%]  mb-[6vw] md:mt-[1vh] lg:mt-[7vh] flex justify-center items-center  ">
          <div className="generator h-full w-full sm:text-left text-center p-2 sm:pl-[4vw]">
            <TextGenerator />
          </div>
        </div>
        <div className="sm:w-[40%] w-full lg:h-full h-[50vh] relative pt-[2.7vw] lg:pl-[3vw] mt-[10vw] lg:mt-0 
        lg:block md:hidden 
        ">
          <Image
            className="productImage sm:w-[33vw] sm:h-[20vw] w-[100%] h-[95%] rounded-[25px] flex justify-center items-center "
            src={collage}
            alt="Product_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Landing;
