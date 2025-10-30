import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderNavigation className="py-6" />
      </div>

      {/* About Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">

        {/* Hero Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-4">About</h1>
          <p className="text-xl opacity-70">Reus Vertes</p>
        </div>

        {/* О бренде / История */}
        <section className="space-y-4">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">О бренде / История</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Reus Vertes — это современный бренд одежды, который объединяет минимализм,
              качество и осознанный подход к моде. Основанный в 2024 году в Москве,
              бренд стремится создавать вещи, которые останутся актуальными вне времени
              и трендов.
            </p>
            <p>
              Наша история началась с желания изменить восприятие моды — не как быстротечного
              явления, а как формы самовыражения, которая уважает как человека, так и окружающую среду.
            </p>
          </div>
        </section>

        {/* Философия */}
        <section className="space-y-4">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Философия</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Мы верим в силу простоты и качества. Каждое изделие создается с мыслью о том,
              что мода должна быть осознанной, долговечной и универсальной.
            </p>
            <p>
              Наша философия строится на трех принципах:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>Качество превыше количества</li>
              <li>Вневременной дизайн вместо сезонных трендов</li>
              <li>Ответственное производство и честность с клиентами</li>
            </ul>
          </div>
        </section>

        {/* Миссия */}
        <section className="space-y-4">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Миссия</h2>
          <div className="space-y-4 leading-relaxed">
            <p>
              Наша миссия — создавать одежду, которая позволяет людям быть собой.
              Мы стремимся к тому, чтобы каждый человек мог найти в нашей коллекции
              вещи, которые станут частью его повседневной жизни на долгие годы.
            </p>
            <p>
              Мы хотим изменить индустрию моды, делая её более осознанной, честной
              и доступной, не жертвуя при этом качеством и дизайном.
            </p>
          </div>
        </section>

        {/* Ценности */}
        <section className="space-y-4">
          <h2 className="text-2xl uppercase border-b border-black/20 pb-2">Ценности</h2>
          <div className="space-y-6 leading-relaxed">
            <div>
              <h3 className="font-semibold text-lg mb-2">Качество</h3>
              <p>
                Мы используем только проверенные материалы и работаем с лучшими
                производителями, чтобы каждое изделие служило вам долгие годы.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Честность</h3>
              <p>
                Прозрачность на всех этапах — от выбора материалов до финальной цены.
                Мы открыто рассказываем о том, как и где производится наша продукция.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Устойчивость</h3>
              <p>
                Забота об окружающей среде — это не опция, а необходимость.
                Мы выбираем экологичные материалы и минимизируем отходы производства.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-2">Индивидуальность</h3>
              <p>
                Каждый человек уникален, и наша одежда призвана подчеркнуть это,
                а не навязать определенный образ.
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
