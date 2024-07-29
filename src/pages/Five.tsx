import React from "react";
import { logoData } from "@/assests/logoData.js";
import Image from "next/image";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { IoCallOutline, IoLocationOutline } from "react-icons/io5";

const Five = () => {
  return (
    <div className="sm:w-full w-[100vw] sm:h-[120vh] h-[110vh]  bg-customBlue  flex-col flex sm:justify-center items-center sm:gap-y-5 pt-12 sm:pt-0 ">
      <div className="w-full sm:h-[30vw] h-[40vh] flex flex-col  items-center sm:gap-y-10 gap-y-5  ">
        <h1 className="sm:text-7xl text-[11vw] text-white tracking-tighter mt-[5vw] font-semibold">
          OUR CLIENTS
        </h1>
        <div className="flex flex-col justify-center items-center gap-y-0 w-full h-[50vh]">
          <div className="w-full sm:h-[9vw] h-[25vw] bg-white flex justify-center items-center">
            <div
              className="w-full h-[45%]  flex justify-center items-center gap-x-5 
          aspect-square whitespace-nowrap animate-logoScroll"
            >
              {logoData.map((img) => (
                <>
                  <Image
                    key={img.id}
                    src={img.logo}
                    alt={`${img.id}`}
                    className="sm:w-[7vw] sm:h-[7vw] w-[20vw] h-[20vw] object-contain "
                  />
                </>
              ))}
            </div>
          </div>
          <div className="w-full sm:h-[9vw] h-[25vw] bg-white flex justify-center items-center">
            <div
              className="w-full h-[45%]  flex justify-center items-center gap-x-5 
          aspect-square whitespace-nowrap animate-antilogoScroll"
            >
              {logoData.map((img) => (
                <>
                  <Image
                    key={img.id}
                    src={img.logo}
                    alt={`${img.id}`}
                    className="sm:w-[7vw] sm:h-[7vw] w-[20vw] h-[20vw] object-contain "
                  />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  sm:h-[20vw] h-[65vh] flex sm:justify-center items-center flex-col mt-10  sm:gap-y-0 gap-y-[7vh] ">
        <div className="w-full sm:h-[10vw] flex flex-col justify-start items-center  ">
          <h1 className="text-white sm:text-[5vw] text-[11vw] text-center font-semibold sm:tracking-tighter tracking-normal leading-tight sm:leading-none sm:font-normal ">
            LET'S GET CONNECTED
          </h1>
          <div className="flex justify-center sm:flex-row flex-col items-center sm:gap-x-10 text-lg text-white font-semibold gap-y-5 sm:mt-5 mt-7">
            <h1 className="flex items-center sm:text-xl text-xl">
              {" "}
              <span className="text-3xl">
                <MdMailOutline />
              </span>
              : info@napx.in
            </h1>
            <h1 className="flex items-center sm:text-xl text-xl">
              {" "}
              <span className="text-3xl">
                <IoCallOutline />
              </span>
              : +91 1234567890
            </h1>
            <h1 className="flex items-center sm:text-xl text-xl">
              {" "}
              <span className="text-3xl">
                <IoLocationOutline />
              </span>
              : Test, test, Delhi-123456
            </h1>
          </div>
        </div>
        <Link
          href={"/contact"}
          className="sm:py-3 sm:px-6 px-6 py-3 sm:text-xl bg-white text-xl text-customBlue font-semibold rounded-full hover:scale-110 transition-all duration-200 "
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Five;
