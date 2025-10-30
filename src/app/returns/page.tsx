import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";

export default function ReturnsPage() {
  return (
    <div className="min-h-screen bg-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderNavigation className="py-6" />
      </div>

      {/* Returns Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Hero Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl uppercase mb-4">Обмен и возврат</h1>
        </div>

        {/* Условия возврата */}
        <section className="space-y-6">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Условия возврата</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Мы хотим, чтобы вы были полностью удовлетворены своей покупкой.
              Если по какой-то причине товар вам не подошел, вы можете вернуть
              или обменять его в течение 14 дней с момента получения.
            </p>

            <div>
              <h3 className="font-semibold text-lg mb-2">Товар должен:</h3>
              <ul className="list-disc list-inside space-y-2 pl-4">
                <li>Быть в оригинальной упаковке с бирками</li>
                <li>Не иметь следов носки, повреждений или загрязнений</li>
                <li>Сохранять товарный вид</li>
                <li>Иметь полный комплект (если применимо)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Как оформить возврат */}
        <section className="space-y-6">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Как оформить возврат</h2>
          <div className="space-y-4 leading-relaxed">
            <div>
              <p className="font-semibold mb-2">Шаг 1: Свяжитесь с нами</p>
              <p>
                Напишите на info@reusvertes.com или позвоните по телефону +7 (XXX) XXX-XX-XX,
                указав номер заказа и причину возврата.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Шаг 2: Получите подтверждение</p>
              <p>
                Мы отправим вам инструкции по возврату и адрес, куда нужно
                отправить товар.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Шаг 3: Отправьте товар</p>
              <p>
                Упакуйте товар в оригинальную упаковку и отправьте на указанный адрес.
                Сохраните чек об отправке.
              </p>
            </div>

            <div>
              <p className="font-semibold mb-2">Шаг 4: Получите возврат средств</p>
              <p>
                После получения и проверки товара мы вернем деньги на вашу карту
                в течение 5-10 рабочих дней.
              </p>
            </div>
          </div>
        </section>

        {/* Обмен */}
        <section className="space-y-4">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Обмен товара</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Если вы хотите обменять товар на другой размер или цвет,
              свяжитесь с нами. Мы с радостью поможем вам подобрать подходящий вариант.
            </p>
            <p>
              Обмен производится бесплатно при условии наличия нужного товара на складе.
            </p>
          </div>
        </section>

        {/* Стоимость возврата */}
        <section className="space-y-4">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Стоимость возврата</h2>
          <div className="leading-relaxed">
            <p>
              Стоимость обратной доставки оплачивается покупателем, за исключением
              случаев брака или ошибки с нашей стороны.
            </p>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
