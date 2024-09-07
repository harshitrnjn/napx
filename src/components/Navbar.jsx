import React from "react";
import Image from "next/image";
import Logo from "@/assests/Logo.png";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";


const Navbar = () => {
  return (
    <div
      className="w-full lg:h-[5vw] md:h-[10vw] sm:py-[1vw] sm:px-[3vw]  flex items-center justify-between
     px-[2vw] sm:flex-row flex-col h-[30vw] border-b-2 border-zinc-600 sm:border-none overflow-hidden bg-black
    "
    >
      <div className="text-white">
        <Link href={"/"}>
          <Image
            className="mt-1 lg:w-[7.2vw] lg:h-[5.6vw] md:w-[16vw] md:h-[12vw] h-[22vw] w-[30vw]"
            src={Logo}
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex lg:text-[1vw] md:text-[2vw] font-semibold text-white text-[3.5vw] gap-x-12 sm:gap-x-[4vw] sm:mb-0 mb-3">
        <h1>PRODUCTS</h1>
        <Link href={'https://online.fliphtml5.com/lxbqg/xsxs/#p=2'}>DISCOVER</Link>
        <Link href={`/contact`}>CONTACT US</Link>
      </div>
     
    </div>
  );
};

export default Navbar;
