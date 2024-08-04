"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import React from 'react'

const TextGenerator = () => {
    const words = "Elevate your shelves with NAPX, the pinnacle of hygiene and convenience. Offer your customers the unparalleled experience of softness and strength, the ultimate in cleanliness and care. Stock NAPX and let your sales soar with a product that truly stands out. NAPX: XACTLY WHAT YOU NEED";
  return (
    <TextGenerateEffect words={words} />
  )
}

export default TextGenerator
