"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from 'react'

const TextGenerator = () => {
    const words = `Tissue and toilet paper are vital for hygiene and cleanliness. Tissue paper is versatile, used for wiping surfaces and personal use, while toilet paper is essential for sanitation, preventing infections, and maintaining comfort. Both play a crucial role in reducing the spread of germs and promoting health.....
    "NAPX: Embrace Clean Living."
    `;
  return (
    <TextGenerateEffect words={words} />
  )
}

export default TextGenerator
