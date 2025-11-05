"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

type HeaderNavigationProps = {
  className?: string;
};

interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  category: string | null;
}

export default function HeaderNavigation({ className = "" }: HeaderNavigationProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

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

  // Поиск товаров
  useEffect(() => {
    if (searchQuery.trim().length > 0) {
      const timeoutId = setTimeout(() => {
        performSearch(searchQuery);
      }, 300); // Debounce 300ms

      return () => clearTimeout(timeoutId);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  // Закрытие поиска при клике вне блока
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
        setSearchQuery("");
        setSearchResults([]);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      // Фокус на поле ввода при открытии
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSearchOpen]);

  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    try {
      const response = await fetch(`/api/products/search?q=${encodeURIComponent(query)}`);
      if (response.ok) {
        const data = await response.json();
        setSearchResults(data.products || []);
      }
    } catch (error) {
      console.error("Search error:", error);
      setSearchResults([]);
    } finally {
      setIsSearching(false);
    }
  };

  const handleSearchClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsSearchOpen(true);
  };

  const handleProductClick = (productId: string) => {
    setIsSearchOpen(false);
    setSearchQuery("");
    setSearchResults([]);
    router.push(`/product/${productId}`);
  };

  const logo = (
    <Link href="/" className="flex items-center">
      <svg 
        width="120" 
        height="57" 
        viewBox="0 0 706 338" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-auto"
      >
        <rect width="705.878" height="67.2265" fill="#FFFFFF"/>
        <rect y="270.773" width="705.878" height="67.2265" fill="#FFFFFF"/>
        <path d="M58.9397 222.874H41.0282L26.7908 178.561H17.1461V222.874H0V114.822H27.5562C47.458 114.822 55.4186 124.383 55.4186 146.691C55.4186 160.046 52.663 169.607 42.7122 174.919L58.9397 222.874ZM38.2725 146.691C38.2725 137.738 36.8947 130.15 27.7093 130.15H17.1461V163.233H27.7093C36.8947 163.233 38.2725 155.645 38.2725 146.691Z" fill="#FFFFFF"/>
        <path d="M129.327 196.317C129.327 204.512 126.571 211.341 121.825 216.197C116.62 221.509 109.731 224.088 101.617 224.088C93.5034 224.088 86.4613 221.509 81.2562 216.197C76.5104 211.341 73.7548 204.512 73.7548 196.317V114.822H90.9009V197.227C90.9009 204.967 95.7998 208.761 101.617 208.761C107.435 208.761 112.18 204.967 112.18 197.227V114.822H129.327V196.317Z" fill="#FFFFFF"/>
        <path d="M195.569 222.874H149.795V114.822H195.569V130.15H166.941V160.805H191.589V176.133H166.941V207.547H195.569V222.874Z" fill="#FFFFFF"/>
        <path d="M266.218 192.978C266.218 204.056 264.687 211.492 259.176 216.804C254.736 221.053 247.541 223.937 237.896 223.937C228.405 223.937 221.362 221.357 216.77 216.804C211.565 211.644 209.728 204.967 209.728 193.585H226.874C226.874 199.352 227.486 202.994 229.935 205.726C231.466 207.395 234.069 208.609 237.896 208.609C241.876 208.609 244.479 207.547 246.163 205.574C248.459 202.994 249.072 199.352 249.072 193.585C249.072 182.051 247.235 179.168 238.815 175.829L225.802 170.518C214.78 165.965 210.646 160.046 210.646 143.353C210.646 133.64 213.555 125.749 219.525 120.437C224.271 116.34 230.395 113.912 238.202 113.912C246.928 113.912 253.358 116.188 257.798 120.437C263.462 125.901 265.452 133.64 265.452 143.96H248.306C248.306 139.104 248 135.31 245.704 132.426C244.173 130.453 241.723 129.239 238.049 129.239C234.528 129.239 232.385 130.453 230.701 132.274C228.711 134.551 227.792 138.193 227.792 142.898C227.792 151.7 229.17 154.431 236.824 157.466L249.684 162.626C262.697 167.938 266.218 174.767 266.218 192.978Z" fill="#FFFFFF"/>
        <path d="M377.467 114.822L353.431 222.874H335.673L311.791 114.822H330.621L344.552 196.772L358.636 114.822H377.467Z" fill="#FFFFFF"/>
        <path d="M436.027 222.874H390.253V114.822H436.027V130.15H407.399V160.805H432.047V176.133H407.399V207.547H436.027V222.874Z" fill="#FFFFFF"/>
        <path d="M512.953 222.874H495.041L480.804 178.561H471.159V222.874H454.013V114.822H481.569C501.471 114.822 509.431 124.383 509.431 146.691C509.431 160.046 506.676 169.607 496.725 174.919L512.953 222.874ZM492.285 146.691C492.285 137.738 490.908 130.15 481.722 130.15H471.159V163.233H481.722C490.908 163.233 492.285 155.645 492.285 146.691Z" fill="#FFFFFF"/>
        <path d="M574.058 130.15H555.687V222.874H538.541V130.15H520.324V114.822H574.058V130.15Z" fill="#FFFFFF"/>
        <path d="M635.23 222.874H589.456V114.822H635.23V130.15H606.602V160.805H631.249V176.133H606.602V207.547H635.23V222.874Z" fill="#FFFFFF"/>
        <path d="M705.878 192.978C705.878 204.056 704.348 211.492 698.836 216.804C694.397 221.053 687.201 223.937 677.557 223.937C668.065 223.937 661.023 221.357 656.43 216.804C651.225 211.644 649.388 204.967 649.388 193.585H666.534C666.534 199.352 667.147 202.994 669.596 205.726C671.127 207.395 673.73 208.609 677.557 208.609C681.537 208.609 684.14 207.547 685.824 205.574C688.12 202.994 688.732 199.352 688.732 193.585C688.732 182.051 686.895 179.168 678.475 175.829L665.463 170.518C654.44 165.965 650.307 160.046 650.307 143.353C650.307 133.64 653.215 125.749 659.186 120.437C663.932 116.34 670.055 113.912 677.863 113.912C686.589 113.912 693.019 116.188 697.458 120.437C703.123 125.901 705.113 133.64 705.113 143.96H687.967C687.967 139.104 687.661 135.31 685.364 132.426C683.833 130.453 681.384 129.239 677.71 129.239C674.189 129.239 672.046 130.453 670.362 132.274C668.371 134.551 667.453 138.193 667.453 142.898C667.453 151.7 668.831 154.431 676.485 157.466L689.345 162.626C702.357 167.938 705.878 174.767 705.878 192.978Z" fill="#FFFFFF"/>
      </svg>
    </Link>
  );

  // Иконки
  const SearchIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M19 19L13 13M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const HeartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M17.5 3.33334C17.058 2.89134 16.517 2.55934 15.925 2.36334C15.333 2.16734 14.705 2.11234 14.089 2.20334C13.473 2.29434 12.884 2.52834 12.366 2.88934C11.848 3.25034 11.414 3.72834 11.1 4.28534L10 6.66667L8.9 4.28534C8.586 3.72834 8.152 3.25034 7.634 2.88934C7.116 2.52834 6.527 2.29434 5.911 2.20334C5.295 2.11234 4.667 2.16734 4.075 2.36334C3.483 2.55934 2.942 2.89134 2.5 3.33334C1.916 3.91734 1.467 4.62034 1.185 5.39334C0.903 6.16634 0.794 6.99034 0.866 7.80634C0.938 8.62234 1.189 9.41134 1.6 10.12C2.011 10.8287 2.573 11.4387 3.243 11.9053L10 17.5L16.757 11.9053C17.427 11.4387 17.989 10.8287 18.4 10.12C18.811 9.41134 19.062 8.62234 19.134 7.80634C19.206 6.99034 19.097 6.16634 18.815 5.39334C18.533 4.62034 18.084 3.91734 17.5 3.33334Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ProfileIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 10C12.7614 10 15 7.76142 15 5C15 2.23858 12.7614 0 10 0C7.23858 0 5 2.23858 5 5C5 7.76142 7.23858 10 10 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M10 12.5C5.58172 12.5 2 13.8429 2 15.5V20H18V15.5C18 13.8429 14.4183 12.5 10 12.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const CartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1H4.27273L6.46545 12.5H16.1818L18.8182 5H5.54545M7.90909 18C8.50642 18 9 17.5064 9 16.9091C9 16.3118 8.50642 15.8182 7.90909 15.8182C7.31176 15.8182 6.81818 16.3118 6.81818 16.9091C6.81818 17.5064 7.31176 18 7.90909 18ZM16.9091 18C17.5064 18 18 17.5064 18 16.9091C18 16.3118 17.5064 15.8182 16.9091 15.8182C16.3118 15.8182 15.8182 16.3118 15.8182 16.9091C15.8182 17.5064 16.3118 18 16.9091 18Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const menuBar = <div className="bg-white h-[3.628px] w-full" />;

  // Компонент поиска
  const SearchDropdown = () => (
    <div
      ref={searchRef}
      className={`absolute top-full left-0 right-0 bg-white border-t border-bg-4 shadow-lg z-50 ${
        isSearchOpen ? "block" : "hidden"
      }`}
    >
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Поиск товаров..."
            className="w-full px-4 py-3 border-2 border-bg-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-bg-4 text-bg-3 uppercase"
            style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontWeight: 400 }}
          />
          {isSearching && (
            <div className="absolute right-4 top-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-bg-4"></div>
            </div>
          )}
        </div>

        {/* Результаты поиска */}
        {searchQuery.trim().length > 0 && !isSearching && (
          <div className="mt-4 max-h-96 overflow-y-auto">
            {searchResults.length > 0 ? (
              <div className="space-y-2">
                {searchResults.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => handleProductClick(product.id)}
                    className="w-full text-left px-4 py-3 hover:bg-bg-2 transition-colors rounded-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="uppercase font-medium text-bg-3">{product.name}</p>
                        <p className="text-sm opacity-70 uppercase">{product.code}</p>
                      </div>
                      <p className="text-bg-4 font-medium">
                        {product.price.toLocaleString("ru-RU")} ₽
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <p className="text-center py-8 text-bg-3 opacity-70 uppercase">
                Товары не найдены
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );

  // Mobile version
  if (isMobile) {
    return (
      <header
        className={`bg-bg-4 text-white pt-3 pb-4 relative ${className}`}
      >
          <div className="max-w-5xl mx-auto px-4 flex flex-col items-start justify-between">
            <div className="flex items-center justify-between w-full">
              {logo}
              <div className="flex flex-col gap-[2px] h-[9.256px] w-[24.355px]">
                {menuBar}
                {menuBar}
              </div>
            </div>
            <nav className="flex flex-col gap-2 items-end justify-center w-full">
              <Link
                href="/collections"
                className="flex items-center justify-center px-[5px] py-[3px] uppercase"
              >
                Коллекции
              </Link>
              <Link
                href="/looks"
                className="flex items-center justify-center px-[5px] py-[3px] uppercase"
              >
                Образы
              </Link>
              <Link
                href="/about"
                className="flex items-center justify-center px-[5px] py-[3px] uppercase"
              >
                О бренде
              </Link>
            </nav>
            <div className="flex items-center gap-2 w-full justify-end mt-2">
              <button
                onClick={handleSearchClick}
                className="p-1 hover:opacity-70 transition-opacity"
                aria-label="Поиск"
              >
                <SearchIcon />
              </button>
              <Link href="/favorites" className="p-1" aria-label="Избранное">
                <HeartIcon />
              </Link>
              <Link href="/profile" className="p-1" aria-label="Профиль">
                <ProfileIcon />
              </Link>
              <Link href="/cart" className="p-1" aria-label="Корзина">
                <CartIcon />
              </Link>
            </div>
          </div>
          <SearchDropdown />
        </header>
    );
  }

  // Tablet version
  if (isTablet) {
    return (
      <header className={`bg-bg-4 text-white py-3 relative ${className}`}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            {logo}
            <div className="flex items-center gap-3">
              <button
                onClick={handleSearchClick}
                className="p-1 hover:opacity-70 transition-opacity"
                aria-label="Поиск"
              >
                <SearchIcon />
              </button>
              <Link href="/favorites" className="p-1" aria-label="Избранное">
                <HeartIcon />
              </Link>
              <Link href="/profile" className="p-1" aria-label="Профиль">
                <ProfileIcon />
              </Link>
              <Link href="/cart" className="p-1" aria-label="Корзина">
                <CartIcon />
              </Link>
            </div>
          </div>
          <nav className="flex gap-3 items-center">
            <Link
              href="/collections"
              className="flex items-center justify-center px-[5px] py-[3px] uppercase"
            >
              Коллекции
            </Link>
            <Link
              href="/looks"
              className="flex items-center justify-center px-[5px] py-[3px] uppercase"
            >
              Образы
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center px-[5px] py-[3px] uppercase"
            >
              О бренде
            </Link>
          </nav>
        </div>
        <SearchDropdown />
      </header>
    );
  }

  // Desktop version
  return (
    <header className={`bg-bg-4 text-white py-2 relative ${className}`}>
      <div className="max-w-5xl mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {logo}
          <nav className="flex gap-4 items-center">
            <Link
              href="/collections"
              className="flex items-center justify-center px-2 py-1 uppercase text-base hover:opacity-70 transition-opacity"
            >
              Коллекции
            </Link>
            <Link
              href="/looks"
              className="flex items-center justify-center px-2 py-1 uppercase text-base hover:opacity-70 transition-opacity"
            >
              Образы
            </Link>
            <Link
              href="/about"
              className="flex items-center justify-center px-2 py-1 uppercase text-base hover:opacity-70 transition-opacity"
            >
              О бренде
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleSearchClick}
            className="p-1 hover:opacity-70 transition-opacity"
            aria-label="Поиск"
          >
            <SearchIcon />
          </button>
          <Link href="/favorites" className="p-1 hover:opacity-70 transition-opacity" aria-label="Избранное">
            <HeartIcon />
          </Link>
          <Link href="/profile" className="p-1 hover:opacity-70 transition-opacity" aria-label="Профиль">
            <ProfileIcon />
          </Link>
          <Link href="/cart" className="p-1 hover:opacity-70 transition-opacity" aria-label="Корзина">
            <CartIcon />
          </Link>
        </div>
      </div>
      <SearchDropdown />
    </header>
  );
}