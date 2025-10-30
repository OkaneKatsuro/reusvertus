"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [mounted, setMounted] = useState(false);

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

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setMounted(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  // Mobile version
  if (isMobile) {
    return (
      <div className="relative w-full h-[450px] overflow-hidden">
        {/* Image right - slides from right */}
        <div
          className={`absolute top-0 right-0 w-[251.764px] h-[239px] transition-transform duration-1000 ease-out ${
            mounted ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Image
            src="/hero/hero2.jpeg"
            alt="Woman with sunglasses walking down runway"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image left - slides from left */}
        <div
          className={`absolute bottom-0 left-0 w-[166.829px] h-[216px] transition-transform duration-1000 ease-out ${
            mounted ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
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
      <div className="relative w-full h-[500px] overflow-hidden">
        {/* Image right - slides from right */}
        <div
          className={`absolute top-0 right-0 w-[414px] h-[393px] transition-transform duration-1000 ease-out ${
            mounted ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <Image
            src="/hero/hero2.jpeg"
            alt="Woman with sunglasses walking down runway"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Image left - slides from left */}
        <div
          className={`absolute bottom-0 left-0 w-[215.488px] h-[279px] transition-transform duration-1000 ease-out ${
            mounted ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <Image
            src="/hero/hero1.jpeg"
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
    <div className="relative w-full h-[600px] overflow-hidden">
      {/* Image right - slides from right */}
      <div
        className={`absolute top-0 right-0 w-[524.597px] h-[498px] transition-transform duration-1000 ease-out ${
          mounted ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <Image
          src="/hero/hero2.jpeg"
          alt="Woman with sunglasses walking down runway"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Image left - slides from left */}
      <div
        className={`absolute bottom-0 left-0 w-[285px] h-[369px] transition-transform duration-1000 ease-out ${
          mounted ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
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
