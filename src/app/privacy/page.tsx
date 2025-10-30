import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderNavigation className="py-6" />
      </div>

      {/* Privacy Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Hero Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl uppercase mb-4">Политика конфиденциальности</h1>
          <p className="text-sm opacity-70">Обновлено: 2024</p>
        </div>

        {/* Sections */}
        <section className="space-y-6 leading-relaxed">
          <div>
            <h2 className="text-2xl uppercase border-b border-black/20 pb-2 mb-4">
              Сбор и использование информации
            </h2>
            <p className="mb-3">
              Мы собираем информацию, которую вы предоставляете при оформлении заказа,
              регистрации на сайте или подписке на рассылку.
            </p>
            <p className="font-semibold mb-2">Мы собираем:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Имя и контактные данные (email, телефон)</li>
              <li>Адрес доставки</li>
              <li>Платежную информацию (обрабатывается через защищенные платежные системы)</li>
              <li>Историю заказов и предпочтения</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl uppercase border-b border-black/20 pb-2 mb-4">
              Использование данных
            </h2>
            <p className="mb-2">Ваши данные используются для:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Обработки и доставки заказов</li>
              <li>Связи с вами по вопросам заказа</li>
              <li>Улучшения качества обслуживания</li>
              <li>Отправки маркетинговых материалов (с вашего согласия)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl uppercase border-b border-black/20 pb-2 mb-4">
              Защита данных
            </h2>
            <p>
              Мы применяем современные технологии для защиты ваших персональных данных.
              Вся информация передается по защищенному протоколу SSL.
              Мы не передаем ваши данные третьим лицам без вашего согласия.
            </p>
          </div>

          <div>
            <h2 className="text-2xl uppercase border-b border-black/20 pb-2 mb-4">
              Ваши права
            </h2>
            <p className="mb-2">Вы имеете право:</p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Получить доступ к своим данным</li>
              <li>Исправить неточные данные</li>
              <li>Удалить свои данные из нашей системы</li>
              <li>Отозвать согласие на обработку данных</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl uppercase border-b border-black/20 pb-2 mb-4">
              Контакты
            </h2>
            <p>
              По всем вопросам, связанным с обработкой персональных данных,
              вы можете связаться с нами по адресу: privacy@reusvertes.com
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
