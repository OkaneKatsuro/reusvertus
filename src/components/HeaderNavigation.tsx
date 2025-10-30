"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

type HeaderNavigationProps = {
  className?: string;
};

export default function HeaderNavigation({ className = "" }: HeaderNavigationProps) {
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

  const logo = (
    <Link href="/" className="text-base leading-none uppercase">
      R.V
    </Link>
  );

  const menuBar = <div className="bg-bg-4 h-[3.628px] w-full" />;

  const navLinks = (
    <>
      <Link
        href="/about"
        className="flex items-center justify-center px-[5px] py-[3px] uppercase"
      >
        About
      </Link>
      <Link
        href="/people"
        className="flex items-center justify-center px-[5px] py-[3px] uppercase"
      >
        People
      </Link>
      <Link
        href="/contacts"
        className="flex items-center justify-center px-[5px] py-[3px] uppercase"
      >
        Contact
      </Link>
    </>
  );

  // Mobile version
  if (isMobile) {
    return (
      <header
        className={`flex flex-col items-start justify-between pt-5 pb-[30px] ${className}`}
      >
        <div className="flex items-center justify-between w-full">
          {logo}
          <div className="flex flex-col gap-[2px] h-[9.256px] w-[24.355px]">
            {menuBar}
            {menuBar}
          </div>
        </div>
        <nav className="flex flex-col gap-2 items-end justify-center w-full">
          {navLinks}
        </nav>
      </header>
    );
  }

  // Tablet version
  if (isTablet) {
    return (
      <header className={className}>
        <div className="flex items-center justify-between">
          {logo}
          <div className="flex flex-col gap-[2px] h-[9.256px] w-[24.355px]">
            {menuBar}
            {menuBar}
          </div>
        </div>
        <nav className="flex gap-[10px] items-center">{navLinks}</nav>
      </header>
    );
  }

  // Desktop version
  return (
    <header className={`flex items-center justify-between ${className}`}>
      <div className="flex items-center gap-[10px]">
        {logo}
        <div className="flex flex-col gap-[2px] h-[9.256px] w-[24.355px]">
          {menuBar}
          {menuBar}
        </div>
      </div>
      <nav className="flex gap-[10px] items-center">{navLinks}</nav>
    </header>
  );
}