"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ShirtAnimation() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="w-full bg-bg-1 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Анимированная футболка */}
          <div
            className={`relative transition-all duration-[3000ms] ease-in-out ${
              mounted
                ? "animate-shirt-move"
                : "opacity-0"
            }`}
            style={{
              animation: mounted ? "shirtMove 8s ease-in-out infinite" : "none",
            }}
          >
            <Image
              src="/shirt/shirt1.png"
              alt="Animated T-shirt"
              width={400}
              height={400}
              className="object-contain"
              priority
            />
          </div>

          {/* Текст описания */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center">
            <h2 className="text-2xl uppercase mb-2">Premium Collection</h2>
            <p className="text-base opacity-70">Designed for movement</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shirtMove {
          0% {
            transform: translateX(-100px) scale(0.8) rotate(-5deg);
            opacity: 0;
          }
          25% {
            transform: translateX(100px) scale(1) rotate(5deg);
            opacity: 1;
          }
          50% {
            transform: translateX(0) scale(1.2) rotate(0deg);
            opacity: 1;
          }
          75% {
            transform: translateX(-100px) scale(1) rotate(-5deg);
            opacity: 1;
          }
          100% {
            transform: translateX(-100px) scale(0.8) rotate(-5deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}