import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";

export default function FAQPage() {
  const faqs = [
    {
      question: "Как выбрать правильный размер?",
      answer: "Мы рекомендуем воспользоваться таблицей размеров на странице товара. Если у вас остались вопросы, напишите нам — мы поможем подобрать подходящий размер."
    },
    {
      question: "Сколько времени занимает доставка?",
      answer: "Доставка по Москве занимает 2-3 рабочих дня, по России — 3-7 рабочих дней. Точные сроки зависят от вашего региона."
    },
    {
      question: "Можно ли вернуть товар?",
      answer: "Да, вы можете вернуть или обменять товар в течение 14 дней с момента получения. Подробности в разделе 'Обмен и возврат'."
    },
    {
      question: "Как ухаживать за одеждой?",
      answer: "Все рекомендации по уходу указаны на бирках изделий. Мы рекомендуем стирать при температуре не выше 30°C и избегать отбеливателей."
    },
    {
      question: "Есть ли у вас физические магазины?",
      answer: "На данный момент мы работаем только онлайн, но планируем открытие шоурума в Москве. Следите за новостями в наших соцсетях."
    },
    {
      question: "Как узнать о новых коллекциях?",
      answer: "Подпишитесь на нашу рассылку или следите за нами в Instagram. Мы регулярно делимся новостями о новых коллекциях и специальных предложениях."
    },
    {
      question: "Какие способы оплаты вы принимаете?",
      answer: "Мы принимаем банковские карты (Visa, Mastercard, МИР), Apple Pay, Google Pay и оплату при получении для заказов по России."
    },
    {
      question: "Можно ли купить товар оптом?",
      answer: "Да, мы работаем с оптовыми покупателями. Для получения прайс-листа и условий сотрудничества напишите на wholesale@reusvertes.com"
    },
    {
      question: "Из каких материалов сделана ваша одежда?",
      answer: "Мы используем только высококачественные натуральные материалы: органический хлопок, лен, шерсть. Подробный состав указан на странице каждого товара."
    },
    {
      question: "Как связаться со службой поддержки?",
      answer: "Вы можете написать нам на info@reusvertes.com или позвонить по телефону +7 (XXX) XXX-XX-XX. Мы отвечаем в течение 24 часов."
    },
  ];

  return (
    <div className="min-h-screen bg-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderNavigation className="py-6" />
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">

        {/* Hero Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl uppercase mb-4">FAQ</h1>
          <p className="text-xl opacity-70">Часто задаваемые вопросы</p>
        </div>

        {/* FAQ Items */}
        <section className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="space-y-3 pb-6 border-b border-black/10 last:border-0">
              <h3 className="text-xl font-semibold uppercase">
                {faq.question}
              </h3>
              <p className="leading-relaxed opacity-80">
                {faq.answer}
              </p>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="bg-bg-2 p-8 rounded-lg text-center space-y-4">
          <h2 className="text-2xl uppercase">Не нашли ответ?</h2>
          <p className="opacity-70">
            Напишите нам на <a href="mailto:info@reusvertes.com" className="underline hover:opacity-70 transition-opacity">info@reusvertes.com</a>
          </p>
          <p className="opacity-70">
            Или позвоните по телефону <span className="font-semibold">+7 (XXX) XXX-XX-XX</span>
          </p>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
