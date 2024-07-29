import React from "react";
import Image from "next/image";
import Logo from "@/assests/Logo.png";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
  return (
    <div
      className="w-full sm:h-[5vw] sm:py-[1vw] sm:px-[3vw]  flex items-center justify-between  bg-black
     px-[2vw] sm:flex-row flex-col h-[30vw] border-b-2 border-zinc-600 sm:border-none
    "
    >
      <div className="text-white">
        <Link href={"/"}>
          <Image
            className="mt-1 sm:w-[7.2vw] sm:h-[5.6vw] h-[22vw] w-[30vw]"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex sm:text-[1vw] font-semibold text-white text-[3.5vw] gap-x-12 sm:gap-x-[4vw] sm:mb-0 mb-3">
        <h1>PRODUCTS</h1>
        <h1>DISCOVER</h1>
        <Link href={`/contact`}>CONTACT US</Link>
      </div>
     
    </div>
  );
};

export default Navbar;
