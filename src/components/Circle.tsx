"use client";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import React from "react";
import Circle2 from "./Circle2";
import logo1 from "@/assests/Texts/logo1.jpg"
import logo2 from "@/assests/Texts/logo2.jpg"
import logo3 from "@/assests/Texts/logo3.jpg"
import logo4 from "@/assests/Texts/logo4.jpg"

const Circle = ({move}:any) => {
    const people = [
        {
          id: 1,
          name: "100%",
          designation: "HYGIENE",
          image:logo1
        },
        {
          id: 2,
          name: "100%",
          image:logo2,
          designation: "HYGIENE",
        },
        {
          id: 3,
          name: "100%",
          designation: "HYGIENE",
          image:logo3,
        },
        {
          id: 4,
          name: "100%",
          designation: "HYGIENE",
          image:logo4,
        },
        {
          id: 5,
          name: "100%",
          designation: "HYGIENE",
          image:logo1,
        },
        {
          id: 6,
          name: "100%",
          designation: "HYGIENE",
          image:logo2,
        },
      ];
  return (
    <div className="flex flex-row items-center justify-center w-full  h-[200vw] sm:h-auto">
      <AnimatedTooltip items={people} />
      <Circle2/>
    </div>
  );
};

export default Circle;
