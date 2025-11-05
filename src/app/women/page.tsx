import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import EmailSubscription from "@/components/EmailSubscription";
import ProductCard from "@/components/ProductCard";

export default function WomenPage() {
  return (
    <div className="min-h-screen bg-bg-1">
      <HeaderNavigation className="py-6" />

      {/* Блок №1: Статичное фото */}
      <section className="w-full bg-bg-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[16/9] bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center">
            <span className="text-bg-3 opacity-30 uppercase text-sm">Статичное фото</span>
          </div>
        </div>
      </section>

      {/* Блок №2: Одежда */}
      <section className="w-full bg-bg-1 py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl uppercase mb-8">Одежда</h2>
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <ProductCard
                id="8"
                name="Футболка женская"
                code="RV-W-002"
                price={5990}
              />
            </div>
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

