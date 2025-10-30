import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";

export default function DeliveryPage() {
  return (
    <div className="min-h-screen bg-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderNavigation className="py-6" />
      </div>

      {/* Delivery Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Hero Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl uppercase mb-4">Доставка и оплата</h1>
        </div>

        {/* Доставка */}
        <section className="space-y-6">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Доставка</h2>
          <div className="space-y-4 leading-relaxed">
            <div>
              <h3 className="font-semibold text-lg mb-2">По России</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Курьерская доставка по Москве — 2-3 рабочих дня, 500₽</li>
                <li>Курьерская доставка по России — 3-7 рабочих дней, от 700₽</li>
                <li>Пункты выдачи СДЭК — 3-7 рабочих дней, от 400₽</li>
              </ul>
              <p className="mt-3 text-sm opacity-70">
                Бесплатная доставка при заказе от 10 000₽
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Международная доставка</h3>
              <p>
                Мы осуществляем доставку в большинство стран мира. Стоимость и сроки
                рассчитываются индивидуально. Свяжитесь с нами для уточнения деталей.
              </p>
            </div>
          </div>
        </section>

        {/* Оплата */}
        <section className="space-y-6">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Способы оплаты</h2>
          <div className="space-y-4 leading-relaxed">
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Банковская карта (Visa, Mastercard, МИР)</li>
              <li>Apple Pay / Google Pay</li>
              <li>Оплата при получении (для заказов по России)</li>
              <li>Безналичный расчет для юридических лиц</li>
            </ul>
            <p className="mt-4 text-sm opacity-70">
              Все платежи проходят через защищенное соединение. Мы не храним данные ваших карт.
            </p>
          </div>
        </section>

        {/* Трекинг */}
        <section className="space-y-4">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Отслеживание заказа</h2>
          <div className="leading-relaxed">
            <p>
              После отправки заказа вы получите трек-номер на электронную почту.
              С его помощью вы сможете отследить местонахождение посылки в режиме реального времени.
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
