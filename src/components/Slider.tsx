"use client";
import Image from "next/image";
import React, { useState } from "react";

const Slider = ({
  color,
  source,
  content,
  tag,
  title,
  position,
  textColor,
}: any) => {
  const [post, setPost] = useState(position);
  return (
    <div
      className={`w-full sm:h-[33vw] h-[100vh] ${color} flex justify-center items-center  `}
    >
      <div
        className={`sm:h-[90%] sm:w-[85%] w-full h-[95%] flex-col sm:flex-row  flex justify-center items-center ${textColor}  `}
      >
        {post === "right" ? (
          <>
            <div className="right sm:w-[50%] w-full  sm:h-full h-[30vh] flex sm:hidden justify-center items-center p-3 sm:p-0">
              <Image
                src={source}
                alt="image_404"
                // height={600}
                className="rounded-[25px] w-full h-full object-cover "
              />
            </div>
            <div
              className={`left sm:w-[50%] sm:h-full h-[55%] p-3 flex flex-col sm:justify-center sm:items-start items-center sm:gap-y-12 gap-y-[15vw] sm:pl-10  sm:text-left text-center`}
            >
              <p className="sm:text-2xl text-center text-[5vw] sm:font-normal font-semibold"> {tag} </p>
              <h1 className="sm:text-7xl text-[10vw] sm:leading-[3.7vw] leading-[11vw] -tracking-[0.25vw] sm:font-medium font-bold sm:mt-0 -mt-[10vw] ">
                {" "}
                {title}{" "}
              </h1>
              <p className="sm:text-xl text-xl font-light sm:mt-0 -mt-2">{content}</p>
            </div>
            <div className="right w-[50%] h-full rounded-[25px]  sm:flex hidden justify-center items-center ">
              <Image
                src={source}
                alt="image_404"
                // height={600}
                className="rounded-[25px] w-[25vw] h-[25vw] object-cover"
              />
            </div>
          </>
        ) : (
          <>
            <div className="right sm:w-[50%] w-full sm:h-full h-[30vh] flex  justify-center items-center ">
              <Image
                src={source}
                alt="image_404"
                // width={575}
                // height={600}
                className="rounded-[25px] sm:w-[25vw] sm:h-[25vw] object-cover w-[90%] h-full"
              />
            </div>
            <div className="left sm:w-[50%] sm:h-full h-[55%] p-3 flex flex-col sm:justify-center sm:items-start items-center sm:gap-y-12 gap-y-[10vw] sm:pl-10  sm:text-left text-center sm:mt-0 mt-12">
            <p className="sm:text-2xl text-center text-[5vw] sm:font-normal font-semibold"> 
              {tag}
           </p>
            <h1 className="sm:text-7xl text-[9vw] sm:leading-[3.7vw] leading-[12vw] -tracking-[0.25vw] sm:font-medium font-bold sm:mt-0 -mt-[10vw] ">
                {" "}
                {title}{" "}
              </h1>
              <p className="sm:text-xl text-xl font-light">{content}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Slider;
// 'w-full h-[70vh] bg-customBlue border-t-2'
