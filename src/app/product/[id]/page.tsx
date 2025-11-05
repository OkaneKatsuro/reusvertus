"use client";

import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import { useState, use, useEffect } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import EmailSubscription from "@/components/EmailSubscription";

interface Product {
  id: string;
  name: string;
  code: string;
  price: number;
  description: string | null;
  imageUrl: string | null;
  colors: string[] | null;
  sizes: string[] | null;
  fit: string | null;
  category: string | null;
}

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { user } = useAuth();
  const router = useRouter();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedFit, setSelectedFit] = useState<string>("");
  const [activeTab, setActiveTab] = useState<"description" | "composition" | "care" | "delivery">("description");
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isTogglingFavorite, setIsTogglingFavorite] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const defaultColors = [
    { name: "Белый", value: "#FFFFFF" },
    { name: "Черный", value: "#050517" },
    { name: "Зеленый", value: "#006341" },
  ];

  const defaultSizes = ["S", "M", "L", "XL"];

  useEffect(() => {
    loadProduct();
  }, [id]);

  useEffect(() => {
    if (user && product) {
      checkFavorite();
    }
  }, [user, product]);

  const loadProduct = async () => {
    try {
      const response = await fetch(`/api/products/${id}`);
      if (response.ok) {
        const data = await response.json();
        setProduct(data.product);
        setError(null);
        // Установить размеры и цвета из БД, если они есть
        if (data.product.sizes && data.product.sizes.length > 0) {
          // sizes уже будут установлены из product
        }
      } else {
        const errorData = await response.json();
        setError(errorData.error || "Товар не найден");
        setProduct(null);
      }
    } catch (error) {
      console.error("Error loading product:", error);
      setError("Ошибка при загрузке товара");
      setProduct(null);
    } finally {
      setIsLoading(false);
    }
  };

  const checkFavorite = async () => {
    if (!user || !product) return;

    try {
      const response = await fetch("/api/favorites", {
        headers: {
          "x-user-id": user.id,
        },
      });

      if (response.ok) {
        const data = await response.json();
        const favorite = data.favorites?.find(
          (fav: any) => fav.product.id === product.id
        );
        setIsFavorite(!!favorite);
      } else {
        // Не показываем ошибку, если просто нет избранного
        setIsFavorite(false);
      }
    } catch (error) {
      console.error("Error checking favorite:", error);
      setIsFavorite(false);
    }
  };

  const handleToggleFavorite = async () => {
    if (!user || !product) {
      if (!user) {
        router.push("/profile");
      }
      return;
    }

    setIsTogglingFavorite(true);
    try {
      if (isFavorite) {
        // Удалить из избранного
        const response = await fetch(`/api/favorites?productId=${product.id}`, {
          method: "DELETE",
          headers: {
            "x-user-id": user.id,
          },
        });

        if (response.ok) {
          setIsFavorite(false);
        }
      } else {
        // Добавить в избранное
        const response = await fetch("/api/favorites", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-user-id": user.id,
          },
          body: JSON.stringify({
            productId: product.id,
          }),
        });

        if (response.ok) {
          setIsFavorite(true);
        } else {
          const error = await response.json();
          alert(error.error || "Ошибка при добавлении в избранное");
        }
      }
    } catch (error) {
      console.error("Error toggling favorite:", error);
      alert("Ошибка при изменении избранного");
    } finally {
      setIsTogglingFavorite(false);
    }
  };

  const sizes = product?.sizes || defaultSizes;
  const colors = product?.colors
    ? product.colors.map((color) => {
        const colorMap: Record<string, string> = {
          "#006341": "Зеленый",
          "#FFFFFF": "Белый",
          "#050517": "Черный",
        };
        return { name: colorMap[color] || color, value: color };
      })
    : defaultColors;

  // Посадка - выбирается пользователем
  const fitScale = [
    { label: "Узкая", value: "Узкая" },
    { label: "Обычная", value: "Обычная" },
    { label: "Свободная", value: "Свободная" },
  ];
  
  // Установить посадку по умолчанию из БД при загрузке товара
  useEffect(() => {
    if (product?.fit) {
      setSelectedFit(product.fit);
    }
  }, [product?.fit]);

  const handleAddToCart = async () => {
    if (!user || !selectedSize) {
      if (!user) {
        router.push("/profile");
      }
      return;
    }

    setIsAddingToCart(true);
    try {
      const response = await fetch("/api/cart", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-user-id": user.id,
        },
        body: JSON.stringify({
          productId: id,
          quantity: 1,
          size: selectedSize,
          color: selectedColor || null,
          fit: selectedFit || null,
        }),
      });

      if (response.ok) {
        alert("Товар добавлен в корзину!");
        router.push("/cart");
      } else {
        const error = await response.json();
        alert(error.error || "Ошибка при добавлении в корзину");
      }
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Ошибка при добавлении в корзину");
    } finally {
      setIsAddingToCart(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-bg-1">
        <HeaderNavigation className="py-6" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <p className="text-bg-3 opacity-70 uppercase">Загрузка товара...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen bg-bg-1">
        <HeaderNavigation className="py-6" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center py-20">
            <p className="text-bg-3 opacity-70 uppercase mb-4">
              {error || "Товар не найден"}
            </p>
            <Link
              href="/"
              className="text-bg-4 hover:opacity-70 transition-opacity uppercase underline"
            >
              Вернуться на главную
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-1">
      <HeaderNavigation className="py-6" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Основной блок: Фото слева, информация справа */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {/* Левая колонка: Фото товара (закрепляется) */}
          <div className="lg:sticky lg:top-6 lg:h-[calc(100vh-3rem)]">
            <div className="space-y-4">
              {/* Главное фото */}
              <div className="relative w-full aspect-square bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center">
                <span className="text-bg-3 opacity-30 uppercase text-sm">
                  Фото товара {selectedImageIndex + 1}
                </span>
              </div>

              {/* Миниатюры */}
              <div className="grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center border-2 transition-colors ${
                      selectedImageIndex === index
                        ? "border-bg-4"
                        : "border-transparent hover:border-black/20"
                    }`}
                  >
                    <span className="text-bg-3 opacity-30 uppercase text-xs">
                      {index + 1}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Правая колонка: Информация о товаре */}
          <div className="space-y-6">
            {/* Название товара + код товара */}
            <div>
              <h1 className="text-3xl uppercase mb-2">
                {product?.name || "Название товара"}
              </h1>
              <p className="text-sm opacity-70 uppercase">
                Код товара: {product?.code || "RV-001"}
              </p>
            </div>

            {/* Короткое описание */}
            <p className="leading-relaxed opacity-80">
              {product?.description ||
                "Короткое описание товара. Премиальная футболка из высококачественного хлопка."}
            </p>

            {/* Цена */}
            <div className="text-2xl font-semibold">
              {product?.price ? `${product.price.toLocaleString("ru-RU")} ₽` : "5 990 ₽"}
            </div>

            {/* Цвета */}
            <div className="space-y-3">
              <p className="uppercase text-sm font-medium">Цвета</p>
              <div className="flex gap-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.value)}
                    className={`w-12 h-12 rounded-full border-2 transition-all ${
                      selectedColor === color.value
                        ? "border-bg-3 scale-110"
                        : "border-transparent hover:border-bg-3/50"
                    }`}
                    style={{ backgroundColor: color.value }}
                    aria-label={color.name}
                  />
                ))}
              </div>
            </div>

            {/* Размер и посадка */}
            <div className="space-y-4 pt-4 border-t border-black/10">
              {/* Посадка - выбирается пользователем */}
              <div>
                <p className="uppercase text-sm font-medium mb-3">Посадка</p>
                <div className="flex gap-2">
                  {fitScale.map((item) => (
                    <button
                      key={item.value}
                      onClick={() => setSelectedFit(item.value)}
                      className={`flex-1 rounded p-2 text-center text-sm transition-colors ${
                        selectedFit === item.value
                          ? "bg-bg-4 text-white font-medium"
                          : "bg-bg-2 hover:bg-bg-2/80"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Размер - выбирается пользователем */}
              <div>
                <p className="uppercase text-sm font-medium mb-3">Размер</p>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-3 px-4 border-2 rounded uppercase transition-all ${
                        selectedSize === size
                          ? "border-bg-3 bg-bg-2"
                          : "border-black/20 hover:border-black/40"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                <button className="mt-2 text-sm underline opacity-70">
                  Таблица размеров
                </button>
              </div>
            </div>

            {/* Кнопки: В корзину и Избранное */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={isAddingToCart || !selectedSize || !user}
                className="flex-1 bg-bg-4 text-white py-4 px-6 uppercase hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {!user
                  ? "Войдите для добавления в корзину"
                  : isAddingToCart
                  ? "Добавление..."
                  : "В корзину"}
              </button>
              <button
                onClick={handleToggleFavorite}
                disabled={isTogglingFavorite || !user}
                className={`p-4 border-2 rounded hover:border-black/40 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${
                  isFavorite
                    ? "border-bg-4 bg-bg-4 text-white"
                    : "border-black/20"
                }`}
                aria-label={isFavorite ? "Удалить из избранного" : "Добавить в избранное"}
              >
                {isTogglingFavorite ? (
                  <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-current"></div>
                ) : (
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.5 3.33334C17.058 2.89134 16.517 2.55934 15.925 2.36334C15.333 2.16734 14.705 2.11234 14.089 2.20334C13.473 2.29434 12.884 2.52834 12.366 2.88934C11.848 3.25034 11.414 3.72834 11.1 4.28534L10 6.66667L8.9 4.28534C8.586 3.72834 8.152 3.25034 7.634 2.88934C7.116 2.52834 6.527 2.29434 5.911 2.20334C5.295 2.11234 4.667 2.16734 4.075 2.36334C3.483 2.55934 2.942 2.89134 2.5 3.33334C1.916 3.91734 1.467 4.62034 1.185 5.39334C0.903 6.16634 0.794 6.99034 0.866 7.80634C0.938 8.62234 1.189 9.41134 1.6 10.12C2.011 10.8287 2.573 11.4387 3.243 11.9053L10 17.5L16.757 11.9053C17.427 11.4387 17.989 10.8287 18.4 10.12C18.811 9.41134 19.062 8.62234 19.134 7.80634C19.206 6.99034 19.097 6.16634 18.815 5.39334C18.533 4.62034 18.084 3.91734 17.5 3.33334Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill={isFavorite ? "currentColor" : "none"}
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Инфо о товаре - Табы */}
        <div className="mb-16">
          <div className="border-b border-black/20 mb-6">
            <div className="flex gap-6 overflow-x-auto">
              {[
                { id: "description", label: "Описание" },
                { id: "composition", label: "Состав" },
                { id: "care", label: "Уход" },
                { id: "delivery", label: "Доставка" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as typeof activeTab)}
                  className={`pb-3 uppercase text-sm whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? "border-b-2 border-black font-medium"
                      : "opacity-50 hover:opacity-100"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {activeTab === "description" && (
              <div>
                <h3 className="uppercase mb-4">Описание</h3>
                <p className="leading-relaxed opacity-80">
                  Премиальная футболка из высококачественного хлопка. Идеальная посадка и комфорт для повседневной носки.
                  Минималистичный дизайн подойдет к любому образу.
                </p>
              </div>
            )}

            {activeTab === "composition" && (
              <div>
                <h3 className="uppercase mb-4">Состав</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• 100% органический хлопок</li>
                  <li>• Плотность: 220 г/м²</li>
                  <li>• Производство: Португалия</li>
                </ul>
              </div>
            )}

            {activeTab === "care" && (
              <div>
                <h3 className="uppercase mb-4">Уход</h3>
                <ul className="space-y-2 opacity-80">
                  <li>• Машинная стирка при 30°C</li>
                  <li>• Не отбеливать</li>
                  <li>• Гладить при низкой температуре</li>
                  <li>• Не подвергать химчистке</li>
                </ul>
              </div>
            )}

            {activeTab === "delivery" && (
              <div>
                <h3 className="uppercase mb-4">Доставка</h3>
                <p className="leading-relaxed opacity-80">
                  Доставка по Москве и регионам России. Срок доставки: 1-3 рабочих дня.
                </p>
              </div>
            )}
          </div>

          {/* Дополнительная информация */}
          <div className="space-y-4 mt-8 pt-8 border-t border-black/10">
            <div>
              <p className="text-sm opacity-70 mb-1">Параметры модели</p>
              <p className="opacity-80">Рост: 180 см, Размер: M</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm opacity-70 mb-1">Артикул</p>
                <p className="uppercase">{product?.code || "RV-001"}</p>
              </div>
              <div>
                <p className="text-sm opacity-70 mb-1">Коллекция</p>
                <p className="uppercase">Весна-Лето 2024</p>
              </div>
            </div>
            <div>
              <Link
                href="/contacts"
                className="text-sm underline opacity-70 hover:opacity-100 inline-block"
              >
                Задать вопрос о товаре
              </Link>
            </div>
          </div>
        </div>

        {/* С чем носить */}
        <div className="mb-16">
          <h2 className="text-2xl uppercase mb-8">С чем носить</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="relative w-full aspect-[3/4] bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <span className="text-bg-3 opacity-30 uppercase text-xs text-center px-4">
                  Составленный лук из нашей одежды
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Уже носят */}
        <div className="mb-16">
          <h2 className="text-2xl uppercase mb-8">Уже носят</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="relative w-full aspect-[3/4] bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center"
              >
                <span className="text-bg-3 opacity-30 uppercase text-xs text-center px-4">
                  Примеры креаторов в этом элементе одежды
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Скидка за подписку на имейл */}
        <EmailSubscription />
      </div>

      {/* Подвал */}
      <Footer />
    </div>
  );
}

