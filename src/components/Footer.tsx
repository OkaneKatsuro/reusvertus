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

              {/* Socials */}
              <div className="flex items-center justify-between w-full h-[13px] text-white uppercase text-base">
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

              {/* Footer Links Strip */}
              <div className="w-full py-6 border-y border-white/20">
                <div className="flex flex-col items-center gap-2 text-white text-xs uppercase">
                  <Link href="/delivery" className="hover:opacity-70 transition-opacity">
                    Доставка и оплата
                  </Link>
                  <Link href="/privacy" className="hover:opacity-70 transition-opacity">
                    Политика конфиденциальности
                  </Link>
                  <Link href="/returns" className="hover:opacity-70 transition-opacity">
                    Обмен и возврат
                  </Link>
                  <Link href="/faq" className="hover:opacity-70 transition-opacity">
                    FAQ
                  </Link>
                  <Link href="/contacts" className="hover:opacity-70 transition-opacity">
                    Контакты
                  </Link>
                </div>
              </div>

              {/* Made By */}
              <p className="text-center w-full leading-none text-white uppercase text-base mt-[120px]">MADE BY</p>

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

              {/* Socials */}
              <div className="flex items-center justify-between w-full h-[13px] text-white uppercase text-base">
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

              {/* Footer Links Strip */}
              <div className="w-full py-8 border-y border-white/20">
                <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white text-xs uppercase">
                  <Link href="/delivery" className="hover:opacity-70 transition-opacity">
                    Доставка и оплата
                  </Link>
                  <Link href="/privacy" className="hover:opacity-70 transition-opacity">
                    Политика конфиденциальности
                  </Link>
                  <Link href="/returns" className="hover:opacity-70 transition-opacity">
                    Обмен и возврат
                  </Link>
                  <Link href="/faq" className="hover:opacity-70 transition-opacity">
                    FAQ
                  </Link>
                  <Link href="/contacts" className="hover:opacity-70 transition-opacity">
                    Контакты
                  </Link>
                </div>
              </div>

              {/* Made By */}
              <p className="text-center w-full leading-none text-white uppercase text-base mt-[120px]">MADE BY</p>

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

            {/* Socials */}
            <div className="flex items-center justify-between w-full h-[13px] text-white uppercase text-base">
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

            {/* Footer Links Strip */}
            <div className="w-full py-8 border-y border-white/20">
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white text-xs uppercase">
                <Link href="/delivery" className="hover:opacity-70 transition-opacity">
                  Доставка и оплата
                </Link>
                <Link href="/privacy" className="hover:opacity-70 transition-opacity">
                  Политика конфиденциальности
                </Link>
                <Link href="/returns" className="hover:opacity-70 transition-opacity">
                  Обмен и возврат
                </Link>
                <Link href="/faq" className="hover:opacity-70 transition-opacity">
                  FAQ
                </Link>
                <Link href="/contacts" className="hover:opacity-70 transition-opacity">
                  Контакты
                </Link>
              </div>
            </div>

            {/* Made By */}
            <p className="text-center w-full leading-none text-white uppercase text-base mt-[120px]">MADE BY</p>

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
