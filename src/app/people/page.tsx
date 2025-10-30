import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function PeoplePage() {
  // Placeholder data - можно заменить на реальные данные
  const teamMembers = [
    { name: "Алексей Иванов", role: "Creative Director", image: "/shirt/shirt1.png" },
    { name: "Мария Петрова", role: "Lead Designer", image: "/shirt/shirt2.png" },
    { name: "Дмитрий Сидоров", role: "Production Manager", image: "/shirt/shirt1.png" },
  ];

  const ambassadors = [
    { name: "Анна Смирнова", description: "Модель и активист", image: "/shirt/shirt2.png" },
    { name: "Иван Козлов", description: "Фотограф", image: "/shirt/shirt1.png" },
  ];

  const muses = [
    { name: "Екатерина Волкова", description: "Наша муза сезона весна 2024", image: "/shirt/shirt2.png" },
    { name: "София Новикова", description: "Лицо коллекции", image: "/shirt/shirt1.png" },
    { name: "Дарья Морозова", description: "Амбассадор бренда", image: "/shirt/shirt2.png" },
  ];

  return (
    <div className="min-h-screen bg-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderNavigation className="py-6" />
      </div>

      {/* People Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">

        {/* Hero Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase mb-4">People</h1>
          <p className="text-xl opacity-70">Люди, которые создают Reus Vertes</p>
        </div>

        {/* Команда */}
        <section className="space-y-8">
          <h2 className="text-3xl uppercase border-b border-black/20 pb-4">Команда</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="space-y-4">
                <div className="relative aspect-square bg-bg-2 rounded-lg overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold uppercase">{member.name}</h3>
                  <p className="text-sm opacity-70 uppercase">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Амбассадоры */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl uppercase border-b border-black/20 pb-4">Амбассадоры</h2>
            <p className="mt-4 opacity-70">Люди, которые разделяют наши ценности и вдохновляют нас</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ambassadors.map((ambassador, index) => (
              <div key={index} className="space-y-4">
                <div className="relative aspect-[4/5] bg-bg-2 rounded-lg overflow-hidden">
                  <Image
                    src={ambassador.image}
                    alt={ambassador.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold uppercase">{ambassador.name}</h3>
                  <p className="text-base opacity-70">{ambassador.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Музы */}
        <section className="space-y-8">
          <div>
            <h2 className="text-3xl uppercase border-b border-black/20 pb-4">Музы</h2>
            <p className="mt-4 opacity-70">Наши любимые модели, которые воплощают дух бренда</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {muses.map((muse, index) => (
              <div key={index} className="space-y-4">
                <div className="relative aspect-[3/4] bg-bg-2 rounded-lg overflow-hidden group">
                  <Image
                    src={muse.image}
                    alt={muse.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-sm uppercase">{muse.description}</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold uppercase">{muse.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
