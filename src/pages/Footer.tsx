import Image from "next/image";
import React from "react";
import Logo from "@/assests/Logo.png";
import address from "@/assests/address.png";

const Blank2 = () => {
  return (
    <div className="sm:w-full w-[100vw] lg:h-[18vw] md:h-[25vh] h-[45vh] bg-black text-zinc-400/75 p-5 flex flex-col">
      <div
        className="up w-full sm:h-[85%] h-full flex sm:flex-row flex-col  justify-evenly items-center  sm:gap-y-5
       sm:mt-5 mt-0 "
      >
        <div className="logo sm:w-[15%] sm:h-[11vw] w-[45%] h-[15vh] ">
          <Image src={Logo} alt="Logo_404" className="w-full h-full" />
        </div>
        <div className="tags w-full sm:w-[50%] sm:h-[13vw] h-[35%] flex justify-end items-center ">
          <Image
            src={address}
            alt="404"
            className="sm:w-[75%] sm:h-[70%] w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Blank2;
