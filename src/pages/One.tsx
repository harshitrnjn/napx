import Image from "next/image";
import React from "react";
import Product2 from "@/assests/Product2.jpg";

const One = () => {
  return (
    <div className="sm:w-full w-screen h-[75vh] lg:h-[90vh] md:h-[85vh] bg-customBlue sm:rounded-t-[50px] relative  flex justify-center items-center rounded-t-[25px]  border-b-2 border-zinc-300/25 ">
      <div className=" lg:w-[85%] w-[95%] lg:h-[95%]  flex items-center justify-center flex-col lg:flex-row  gap-[5vw] lg:pl-[7vw] pl-0 lg:mt-[0vw]  md:mt-[5vh] mt-[22vw]">
        <Image
          src={Product2}
          alt="product_image_404"
          className="lg:w-[33vw] lg:h-[30vw] md:w-[75vw] md:h-[50vw] w-full object-cover rounded-[25px] "
        />
        <div className="flex-col flex justify-center items-center">
          <h1 className="lg:text-[7vw] md:text-[9vw] text-[12vw] sm:font-normal font-semibold sm:-tracking-[0.65vw] tracking-tighter lg:text-left text-white sm:leading-[7.5vw] leading-[12.5vw] font-sans absolute lg:top-[6%] lg:right-[16.5%] md:top-[4%] md:right-[23%] top-[2%] right-[13.5%] text-center ">
            INTRODUCING
            <br />
            {"  "} NAPX
          </h1>
          <p className="sm:w-full  text-white sm:mt-0 lg:text-left text-center lg:text-2xl md:text-3xl w-full text-xl">
            At our company, we transform everyday essentials into extraordinary
            experiences. Our tissues are crafted with the finest materials,
            providing a level of softness and strength that feels like pure
            bliss. Choose our tissues and treat yourself to the ultimate comfort
            you deserve.
          </p>
        </div>
      </div>
    </div>
  );
};

export default One;
