import Image from "next/image";
import React from "react";
import Logo from "@/assests/Logo.png";
import address from "@/assests/address.png";

const Blank2 = () => {
  return (
    <div className="sm:w-full w-[100vw] lg:h-[20vw] md:h-[30vh] h-[45vh] bg-black text-zinc-400/75 p-5 flex flex-col">
      <div
        className="up w-full sm:h-[85%] h-full flex sm:flex-row flex-col  justify-evenly items-center  sm:gap-y-5
       "
      >
        <div className="logo sm:w-[18%] sm:h-[13vw] w-[45%] h-[15vh] ">
          <Image src={Logo} alt="Logo_404" className="w-full h-full" />
        </div>
        <div className="tags w-full sm:w-[70%] sm:h-[13vw] h-[35%] flex justify-end items-center">
          <Image
            src={address}
            alt="404"
            className="sm:w-[63%] sm:h-[70%] w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="down w-full h-[15%] flex justify-between items-center sm:px-[8vw] px-0 sm:text-lg text-xs ">
        <h1>LOGO &copy; 2024 </h1>
        <div className="flex justify-center items-center sm:gap-x-[4vw] gap-x-2">
          <h1>CREATOR TERM</h1>
          <h1>PRIVACY POLICY</h1>
          <h1>COOKIES POLICY</h1>
        </div>
      </div>
    </div>
  );
};

export default Blank2;
