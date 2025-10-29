"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductDetails() {
  const [activeTab, setActiveTab] = useState<"description" | "composition" | "care" | "sizes">("description");

  const images = [
    "/shirt/shirt1.png",
    "/shirt/shirt2.png",
    "/shirt/shirt1.png",
    "/shirt/shirt2.png",
  ];

  return (
    <div className="w-full bg-bg-2 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Gallery */}
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="relative aspect-square bg-white rounded-lg overflow-hidden hover:scale-105 transition-transform cursor-pointer"
                >
                  <Image
                    src={img}
                    alt={`Product view ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Details */}
          <div className="space-y-8">

            {/* Tabs */}
            <div className="border-b border-black/20">
              <div className="flex gap-6">
                {["description", "composition", "care", "sizes"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as typeof activeTab)}
                    className={`pb-2 uppercase text-sm transition-colors ${
                      activeTab === tab
                        ? "border-b-2 border-black"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="min-h-[200px]">
              {activeTab === "description" && (
                <div>
                  <p className="leading-relaxed">
                    Премиальная футболка из высококачественного хлопка.
                    Идеальная посадка и комфорт для повседневной носки.
                    Минималистичный дизайн подойдет к любому образу.
                  </p>
                </div>
              )}

              {activeTab === "composition" && (
                <div>
                  <ul className="space-y-2">
                    <li>• 100% органический хлопок</li>
                    <li>• Плотность: 220 г/м²</li>
                    <li>• Производство: Португалия</li>
                  </ul>
                </div>
              )}

              {activeTab === "care" && (
                <div>
                  <ul className="space-y-2">
                    <li>• Машинная стирка при 30°C</li>
                    <li>• Не отбеливать</li>
                    <li>• Гладить при низкой температуре</li>
                    <li>• Не подвергать химчистке</li>
                  </ul>
                </div>
              )}

              {activeTab === "sizes" && (
                <div>
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-black/20">
                        <th className="text-left py-2">Размер</th>
                        <th className="text-left py-2">Грудь (см)</th>
                        <th className="text-left py-2">Длина (см)</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-black/10">
                        <td className="py-2">S</td>
                        <td className="py-2">92-96</td>
                        <td className="py-2">68</td>
                      </tr>
                      <tr className="border-b border-black/10">
                        <td className="py-2">M</td>
                        <td className="py-2">96-100</td>
                        <td className="py-2">70</td>
                      </tr>
                      <tr className="border-b border-black/10">
                        <td className="py-2">L</td>
                        <td className="py-2">100-104</td>
                        <td className="py-2">72</td>
                      </tr>
                      <tr>
                        <td className="py-2">XL</td>
                        <td className="py-2">104-108</td>
                        <td className="py-2">74</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}