import React from "react";
import { people } from "@/assests/people";

const Circle2 = () => {
  return (
    <div className="flex flex-col items-center justify-center text-customBlue sm:hidden font-semibold ">
      <div className="flex translate-y-4">
        <div
          className={`h-[35vw] w-[35vw] flex flex-col justify-center items-center rounded-full border-4 border-customBlue
            translate-x-7 text-lg
            `}
        >
          <h1>100%</h1>
          <h1>HYGIENE</h1>
        </div>
        <div
          className={`h-[35vw] w-[35vw] flex flex-col justify-center items-center rounded-full border-4 border-customBlue text-lg `}
        >
          <h1>100%</h1>
          <h1>HYGIENE</h1>
        </div>
        <div
          className={`h-[35vw] w-[35vw] flex flex-col justify-center items-center rounded-full border-4 border-customBlue text-lg
            -translate-x-7 `}
        >
          <h1>100%</h1>
          <h1>HYGIENE</h1>
        </div>
      </div>
      <div className="flex -translate-y-3">
        <div
          className={`h-[35vw] w-[35vw] flex flex-col justify-center items-center rounded-full border-4 border-customBlue text-lg 
            translate-x-7
            `}
        >
          <h1>100%</h1>
          <h1>HYGIENE</h1>
        </div>
        <div
          className={`h-[35vw] w-[35vw] flex flex-col justify-center items-center rounded-full border-4 border-customBlue text-lg `}
        >
          <h1>100%</h1>
          <h1>HYGIENE</h1>
        </div>
        <div
          className={`h-[35vw] w-[35vw] flex flex-col justify-center items-center rounded-full border-4 border-customBlue text-lg 
            -translate-x-7 `}
        >
          <h1>100%</h1>
          <h1>HYGIENE</h1>
        </div>
      </div>
    </div>
  );
};

export default Circle2;
