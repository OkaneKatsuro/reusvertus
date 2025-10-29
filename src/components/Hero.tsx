"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 800);
      setIsTablet(width >= 800 && width < 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Mobile version
  if (isMobile) {
    return (
      <div className="relative w-full h-[450px]">
        {/* Image right */}
        <div className="absolute top-0 right-0 w-[251.764px] h-[239px]">
          <Image
            src="/hero/hero2.jpeg"
            alt="Woman with sunglasses walking down runway"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image left */}
        <div className="absolute bottom-0 left-0 w-[166.829px] h-[216px]">
          <Image
            src="/hero/hero1.jpeg"
            alt="Side profile portrait of a woman"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="absolute left-[167.5px] top-[397.8px] -translate-x-1/2 text-white mix-blend-difference text-center uppercase font-medium">
          REUS VERTES
        </h1>
      </div>
    );
  }

  // Tablet version
  if (isTablet) {
    return (
      <div className="relative w-full h-[500px]">
        {/* Image right */}
        <div className="absolute top-0 right-0 w-[414px] h-[393px]">
          <Image
            src="/hero/hero2.jpeg"
            alt="Woman with sunglasses walking down runway"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image left */}
        <div className="absolute bottom-0 left-0 w-[215.488px] h-[279px]">
          <Image
            src="/hero/hero1.jpe"
            alt="Side profile portrait of a woman"
            fill
            className="object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="absolute left-[380px] top-[397.8px] -translate-x-1/2 text-white mix-blend-difference text-center uppercase font-medium">
          REUS VERTES
        </h1>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="relative w-full h-[600px]">
      {/* Image right */}
      <div className="absolute top-0 right-0 w-[524.597px] h-[498px]">
        <Image
          src="/hero/hero2.jpeg"
          alt="Woman with sunglasses walking down runway"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Image left */}
      <div className="absolute bottom-0 left-0 w-[285px] h-[369px]">
        <Image
          src="/hero/hero1.jpeg"
          alt="Side profile portrait of a woman"
          fill
          className="object-cover"
        />
      </div>

      {/* Title */}
      <h1 className="absolute left-[620px] top-[383.8px] -translate-x-1/2 text-white mix-blend-difference text-center uppercase font-medium">
        REUS VERTES
      </h1>
    </div>
  );
}