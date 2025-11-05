import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-1">
      <HeaderNavigation className="py-6" />

      {/* Блок №1: Статичное фото - полноширинное */}
      <section className="w-full">
        <div className="relative w-full h-screen bg-bg-2 overflow-hidden flex items-center justify-center">
          <span className="text-bg-3 opacity-30 uppercase text-sm text-center px-4 max-w-2xl">
            Зеленая улица с граффити и нашими брендовыми коробками, фото футболок на столбах, футболки на улице, две длинные полоски на которые повесили футболку
          </span>
        </div>
      </section>

      {/* Блок №2: Видео - полноширинное */}
      <section className="w-full">
        <div className="relative w-full h-screen bg-bg-2 overflow-hidden flex items-center justify-center">
          <span className="text-bg-3 opacity-30 uppercase text-sm text-center px-4 max-w-2xl">
            Видео: футболка идет по улице, модели идут в кадр по двум зеленым линиям (логотипу), парень в футболке кидает шарик с краской в камеру, появляется лого, стоит парень, в него с двух сторон кидают шариками с краской (снято на пленку)
          </span>
        </div>
      </section>

      {/* Блок №3: Карта улицы - полноширинные изображения с наложенными текстами */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Фото (мужское) - полноширинное с наложенным текстом */}
          <Link href="/men" className="group relative w-full h-[90vh] bg-bg-2 overflow-hidden flex items-center justify-center">
            <span className="text-bg-3 opacity-30 uppercase text-sm absolute">ФОТО (мужское)</span>
            {/* Наложенный текстовый блок */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-white mb-4" style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontWeight: 500 }}>
                  Мужское
                </h3>
                <p className="text-lg md:text-xl uppercase text-white opacity-90" style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontWeight: 400 }}>
                  Shop Men's
                </p>
              </div>
            </div>
          </Link>

          {/* Фото (женское) - полноширинное с наложенным текстом */}
          <Link href="/women" className="group relative w-full h-[90vh] bg-bg-2 overflow-hidden flex items-center justify-center">
            <span className="text-bg-3 opacity-30 uppercase text-sm absolute">ФОТО (женское)</span>
            {/* Наложенный текстовый блок */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors">
              <div className="text-center z-10">
                <h3 className="text-4xl md:text-5xl lg:text-6xl uppercase font-medium text-white mb-4" style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontWeight: 500 }}>
                  Женское
                </h3>
                <p className="text-lg md:text-xl uppercase text-white opacity-90" style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontWeight: 400 }}>
                  Shop Women's
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Блок №4: Достопримечательности - полноширинное изображение */}
      <section className="w-full">
        <div className="relative w-full h-[80vh] bg-bg-2 overflow-hidden flex items-center justify-center">
          <span className="text-bg-3 opacity-30 uppercase text-sm">Актуальное (бестселлеры)</span>
          {/* Наложенный текстовый блок */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl uppercase font-medium text-white mb-4" style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontWeight: 500 }}>
                Достопримечательности
              </h2>
              <p className="text-lg md:text-xl uppercase text-white opacity-90" style={{ fontFamily: 'var(--font-ibm-plex-mono)', fontWeight: 400 }}>
                Актуальное (бестселлеры)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Блок №5: Прохожие - полноширинные изображения в сетке */}
      <section className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Примеры готовых луков от креаторов */}
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="relative w-full h-[70vh] bg-bg-2 overflow-hidden flex items-center justify-center group"
            >
              <span className="text-bg-3 opacity-30 uppercase text-xs text-center px-4 absolute">
                Креаторы (фото примеры готовых луков с нашей одеждой разных креаторов)
              </span>
              {/* Наложенный текстовый блок при наведении */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors">
                <div className="text-center z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm uppercase text-white">Look {item}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Блок №6: Почтовый ящик - полноширинное изображение */}
      <section className="w-full">
        <div className="relative w-full h-[70vh] bg-bg-2 overflow-hidden flex items-center justify-center">
          <span className="text-bg-3 opacity-30 uppercase text-sm text-center px-4">
            Фото зеленого почтового ящика (скидка за подписку на имейл)
          </span>
        </div>
      </section>

      {/* Блок №7: FAQ */}
      <FAQ />

      {/* Footer */}
      <Footer />
    </div>
  );
}
