"use client";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import React from "react";
import Circle2 from "./Circle2";

const Circle = ({move}:any) => {
    const people = [
        {
          id: 1,
          name: "100%",
          designation: "HYGIENE",
        },
        {
          id: 2,
          name: "100%",
          designation: "HYGIENE",
        },
        {
          id: 3,
          name: "100%",
          designation: "HYGIENE",
        },
        {
          id: 4,
          name: "100%",
          designation: "HYGIENE",
        },
        {
          id: 5,
          name: "100%",
          designation: "HYGIENE",
        },
        {
          id: 6,
          name: "100%",
          designation: "HYGIENE",
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
