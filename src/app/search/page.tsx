"use client";

import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Поиск автоматически активируется при нажатии
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    // Здесь будет логика поиска
    if (query.length > 0) {
      // Заглушка результатов
      setSearchResults([]);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="min-h-screen bg-bg-1 flex flex-col">
      <HeaderNavigation className="py-6" />

      <div className="flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
        {/* Поиск */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Поиск..."
            value={searchQuery}
            onChange={handleSearch}
            className="w-full px-4 py-3 border-2 border-black/20 rounded-lg focus:outline-none focus:border-bg-4 uppercase"
            autoFocus
          />
        </div>

        {/* Результаты поиска */}
        {searchQuery.length > 0 && (
          <div>
            {searchResults.length === 0 ? (
              <p className="text-center opacity-70 py-12">
                Ничего не найдено по запросу "{searchQuery}"
              </p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((product) => (
                  <ProductCard key={product.id} {...product} />
                ))}
              </div>
            )}
          </div>
        )}

        {/* Пустое состояние */}
        {searchQuery.length === 0 && (
          <div className="text-center py-12">
            <p className="opacity-70">Начните вводить запрос для поиска</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

