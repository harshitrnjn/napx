"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import Swal from "sweetalert2";
import Logo from "@/assests/Logo.png"

const Form = () => {
  const router = useRouter();
  async function handleSubmit(e) {
    e.preventDefault();
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "662e4ebe-d40e-4ae6-9dde-d5586ecccd12",
        name: e.target.name.value,
        email: e.target.email.value,
        message: e.target.message.value,
      }),
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Submitted!",
        text: "Message is submitted!",
        icon: "success",
      });
      console.log(result);
      document.querySelector(".name").value = " ";
      document.querySelector(".email").value = " ";
      document.querySelector(".msg").value = " ";
      setTimeout(() => {
        console.log("pushed");
        router.push("/");
      }, 3000);
    }
  }
  return (
    <div className="h-screen w-full flex justify-center items-center relative ">
      

      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:gap-y-5 gap-y-[18vh] justify-center items-center sm:rounded-[50px] rounded-[25px] sm:h-[65vh] sm:w-[25vw] w-[90%] h-[75%] bg-white"
      >
        <div className="w-full sm:h-[7vw] flex items-center">
          <h1 className="w-full sm:text-[3.5vw] text-[6vh] text-center tracking-tighter font-semibold text-customBlue">Contact Us</h1>
        </div>
        <div className="w-full h-[14vw] flex flex-col justify-center items-center gap-y-5">
        <div className="w-[85%] gap-1 flex flex-col">
          <label htmlFor="name " className="text-customBlue text-xl" >Name</label>
          <input
            type="text"
            name="name"
            className="name border-b-customBlue border-b-2 outline-none text-lg"
            required
            // placeholder="Your name"
          />
        </div>
        <div className="w-[85%] gap-1 flex flex-col">
          <label htmlFor="email" className="text-customBlue text-xl">Email</label>
          <input
            type="email"
            name="email"
            className="email border-b-customBlue border-b-2 outline-none text-lg"
            required
            // placeholder="email@example.com"
          />
        </div>
        <div className="w-[85%] gap-1 flex flex-col">
          <label htmlFor="message" className="text-customBlue text-xl">Message</label>
          <textarea
            name="message"
            required
            rows="2"
            className="msg border-b-customBlue border-b-2 outline-none text-lg"
           
          ></textarea>
        </div>
        </div>
        <button type="submit" className=" bg-customBlue py-3 px-5 mt-10 text-white text-lg rounded-full">
          Submit Form
        </button>
      </form>
    </div>
  );
};

export default Form;
