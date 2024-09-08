"use client";
import React from "react";
import part1 from "@/assests/PDF/part1.png";
import part2 from "@/assests/PDF/part2.png";
import part3 from "@/assests/PDF/part3.png";
import part4 from "@/assests/PDF/part4.png";
import part5 from "@/assests/PDF/part5.png";
import Image from "next/image";
import styles from "./catalouge.module.css";
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

const data = [
  {
    id: 1,
    name: "part1",
    src: part1,
  },
  {
    id: 2,
    name: "part2",
    src: part2,
  },
  {
    id: 3,
    name: "part3",
    src: part3,
  },
  {
    id: 4,
    name: "part4",
    src: part4,
  },
  {
    id: 5,
    name: "part5",
    src: part5,
  },
];

const page = () => {
  return (
    <div className={styles.background}>
      <div className="w-full h-[15vh]  flex justify-center items-center">
        <Link href={"/"} className="text-white
        absolute left-[3%] w-[3vw] h-[3vw] bg-slate-500/65 flex justify-center items-center text-3xl rounded-full 
        "><GoArrowLeft /></Link>
        <h1 className="lg:text-[2.8vw] pt-[3vh] lg:pt-0  text-[10vw] font-semibold text-center text-white">
          CATALOGUE
        </h1>
      </div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[80%] lg:w-[50%] h-full mt-12 ">
          {data.map((item) => (
            <Image src={item.src} alt="image_404" className="w-full" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
