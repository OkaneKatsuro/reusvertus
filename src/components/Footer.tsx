"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Footer() {
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
      <div className="bg-bg-1 w-full p-[5px]">
        <footer className="bg-bg-4 w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-5 items-center px-10 py-[30px] w-full">
              {/* Upper links */}
              <div className="flex items-start justify-between pb-[100px] w-full text-white uppercase text-base leading-none">
                <p>Reus Vertes</p>
                <p className="text-right">Russia, Moscow</p>
              </div>

              {/* Middle Links */}
              <div className="flex flex-col gap-[120px] items-center w-full text-white uppercase text-base">
                {/* Socials */}
                <div className="flex items-center justify-between w-full h-[13px]">
                  <Link href="mailto:hello@figma.com" className="leading-none">
                    EMAIL
                  </Link>
                  <Link href="https://www.instagram.com/figma" className="text-center leading-none">
                    INSTA
                  </Link>
                  <Link href="http://linkedin.com/company/figma" className="text-right leading-none">
                    LINKEDIN
                  </Link>
                </div>

                <p className="text-center w-full leading-none">MADE BY</p>
              </div>

              {/* Initials - Centered */}
              <div className="w-full overflow-visible flex items-center justify-center">
                <Link
                  href="/"
                  className="flex items-center justify-center text-white"
                  style={{
                    fontFamily: "'NATS', 'IBM Plex Mono', monospace",
                    fontSize: '200px',
                    lineHeight: '0.6',
                    letterSpacing: '-0.02em'
                  }}
                >
                  <span>R</span>
                  <span>.</span>
                  <span>V</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Tablet version
  if (isTablet) {
    return (
      <div className="bg-bg-1 w-full p-[5px]">
        <footer className="bg-bg-4 w-full">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col gap-5 items-center px-10 py-[30px] w-full">
              {/* Upper links */}
              <div className="flex items-start justify-between pb-[100px] w-full text-white uppercase text-base leading-none">
                <p>Reus Vertes</p>
                <p className="text-center">Couture Production</p>
                <p className="text-right">Russia, Moscow</p>
              </div>

              {/* Middle Links */}
              <div className="flex flex-col gap-[120px] items-center w-full text-white uppercase text-base">
                {/* Socials */}
                <div className="flex items-center justify-between w-full h-[13px]">
                  <Link href="mailto:hello@figma.com" className="leading-none">
                    EMAIL
                  </Link>
                  <Link href="https://www.instagram.com/figma" className="text-center leading-none">
                    INSTA
                  </Link>
                  <Link href="http://linkedin.com/company/figma" className="text-right leading-none">
                    LINKEDIN
                  </Link>
                </div>

                <p className="text-center w-full leading-none">MADE BY</p>
              </div>

              {/* Initials - Centered */}
              <div className="w-full overflow-visible flex items-center justify-center">
                <Link
                  href="/"
                  className="flex items-center justify-center text-white"
                  style={{
                    fontFamily: "'NATS', 'IBM Plex Mono', monospace",
                    fontSize: '400px',
                    lineHeight: '0.6',
                    letterSpacing: '-0.02em'
                  }}
                >
                  <span>R</span>
                  <span>.</span>
                  <span>V</span>
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }

  // Desktop version
  return (
    <div className="bg-bg-1 w-full p-[5px]">
      <footer className="bg-bg-4 w-full">
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col gap-5 items-center px-10 py-[30px] w-full">
            {/* Upper links */}
            <div className="flex items-start justify-between pb-[100px] w-full text-white uppercase text-base leading-none">
              <p>Reus Vertes</p>
              <p className="text-center">Couture Production</p>
              <p className="text-right">Russia, Moscow</p>
            </div>

            {/* Middle Links */}
            <div className="flex flex-col gap-[120px] items-center w-full text-white uppercase text-base">
              {/* Socials */}
              <div className="flex items-center justify-between w-full h-[13px]">
                <Link href="mailto:hello@figma.com" className="leading-none">
                  EMAIL
                </Link>
                <Link href="https://www.instagram.com/figma" className="text-center leading-none">
                  INSTA
                </Link>
                <Link href="http://linkedin.com/company/figma" className="text-right leading-none">
                  LINKEDIN
                </Link>
              </div>

              <p className="text-center w-full leading-none">MADE BY</p>
            </div>

            {/* Initials - Centered */}
            <div className="w-full overflow-visible flex items-center justify-center">
              <Link
                href="/"
                className="flex items-center justify-center text-white"
                style={{
                  fontFamily: "'NATS', 'IBM Plex Mono', monospace",
                  fontSize: '605px',
                  lineHeight: '0.6',
                  letterSpacing: '-0.02em'
                }}
              >
                <span>R</span>
                <span>.</span>
                <span>V</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
