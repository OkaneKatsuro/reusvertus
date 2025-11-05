"use client";

import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import EmailSubscription from "@/components/EmailSubscription";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { useState } from "react";

export default function CollectionsPage() {
  const [activeCategory, setActiveCategory] = useState("new");

  const categories = [
    { name: "Новинки", slug: "new" },
    { name: "Футболки", slug: "t-shirts" },
  ];

  // Примеры товаров - только футболка
  const products = [
    { id: "8", name: "Футболка женская", code: "RV-W-002", price: 5990 },
  ];

  return (
    <div className="min-h-screen bg-bg-1">
      <HeaderNavigation className="py-6" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl uppercase mb-8">Коллекции</h1>

        {/* Разделы Мужское/Женское */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Link href="/men" className="group">
            <div className="relative aspect-[4/5] bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity">
              <span className="text-bg-3 opacity-30 uppercase text-lg group-hover:opacity-50 transition-opacity">
                Мужское
              </span>
            </div>
          </Link>
          <Link href="/women" className="group">
            <div className="relative aspect-[4/5] bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center hover:opacity-80 transition-opacity">
              <span className="text-bg-3 opacity-30 uppercase text-lg group-hover:opacity-50 transition-opacity">
                Женское
              </span>
            </div>
          </Link>
        </div>

        {/* Категории - переключатель */}
        <div className="mb-12">
          <h2 className="text-xl uppercase mb-4">Категории</h2>
          <div className="flex gap-6 border-b border-black/20">
            {categories.map((category) => (
              <button
                key={category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={`pb-3 uppercase text-sm border-b-2 transition-colors ${
                  activeCategory === category.slug
                    ? "border-black font-medium"
                    : "border-transparent hover:border-black/50"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Товары */}
        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>

        {/* Блок подписки на имейл */}
        <EmailSubscription />
      </div>

      <Footer />
    </div>
  );
}

