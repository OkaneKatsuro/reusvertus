"use client";

import Image from "next/image";
import Link from "next/link";

export default function Lookbook() {
  const lookbookImages = [
    "/shirt/shirt1.png",
    "/shirt/shirt2.png",
    "/shirt/shirt1.png",
  ];

  return (
    <div className="w-full bg-bg-1 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl uppercase">Lookbook</h2>
          <Link
            href="/lookbook"
            className="text-base uppercase underline hover:opacity-70 transition-opacity"
          >
            Все модели →
          </Link>
        </div>

        {/* Lookbook Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lookbookImages.map((img, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] bg-bg-2 rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={img}
                alt={`Lookbook ${index + 1}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-sm uppercase">Collection 2024</p>
                  <p className="text-xs opacity-70 mt-1">Premium Line</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}