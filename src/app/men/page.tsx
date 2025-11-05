"use client";

import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import EmailSubscription from "@/components/EmailSubscription";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  description: string | null;
}

export default function MenPage() {
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProduct();
  }, []);

  const loadProduct = async () => {
    try {
      // Загружаем первый товар из категории "Мужское"
      const response = await fetch("/api/products?category=Мужское");
      if (response.ok) {
        const data = await response.json();
        if (data.products && data.products.length > 0) {
          setProduct(data.products[0]);
        }
      }
    } catch (error) {
      console.error("Error loading product:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-1">
      <HeaderNavigation className="py-6" />

      {/* Блок №1: Статичное фото - полноширинное */}
      <section className="w-full">
        <div className="relative w-full h-[80vh] bg-bg-2 overflow-hidden flex items-center justify-center">
          <span className="text-bg-3 opacity-30 uppercase text-sm">Статичное фото</span>
        </div>
      </section>

      {/* Блок №2: Одежда */}
      <section className="w-full bg-bg-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl uppercase mb-8">Одежда</h2>
          <div className="flex justify-center">
            {isLoading ? (
              <p className="text-center py-12 opacity-70">Загрузка...</p>
            ) : product ? (
              <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
                <Link href={`/product/${product.id}`} className="group block">
                  <div className="space-y-4">
                    {/* Фото товара - увеличенное */}
                    <div className="relative w-full aspect-[3/4] bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center group-hover:opacity-90 transition-opacity">
                      <span className="text-bg-3 opacity-30 uppercase text-base text-center px-4">
                        Фото товара
                      </span>
                    </div>

                    {/* Название товара + код товара - увеличенные */}
                    <div>
                      <h3 className="uppercase text-lg md:text-xl mb-2 font-medium">{product.name}</h3>
                      <p className="text-sm md:text-base opacity-70 uppercase">{product.code}</p>
                    </div>

                    {/* Цена - увеличенная */}
                    <div className="text-xl md:text-2xl font-medium">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </div>

                    {/* Цвета (заглушка) - увеличенные */}
                    <div className="flex gap-3">
                      <div className="w-6 h-6 rounded-full bg-white border border-black/20"></div>
                      <div className="w-6 h-6 rounded-full bg-bg-3 border border-black/20"></div>
                      <div className="w-6 h-6 rounded-full bg-bg-4 border border-black/20"></div>
                    </div>
                  </div>
                </Link>
              </div>
            ) : (
              <p className="text-center py-12 opacity-70">Товары не найдены</p>
            )}
          </div>
        </div>
      </section>

      {/* Блок №3: Скидка за подписку на имейл */}
      <section className="w-full bg-bg-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <EmailSubscription />
        </div>
      </section>

      {/* Блок №4: Подвал */}
      <Footer />
    </div>
  );
}

