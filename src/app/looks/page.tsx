import HeaderNavigation from "@/components/HeaderNavigation";
import Footer from "@/components/Footer";
import EmailSubscription from "@/components/EmailSubscription";

export default function LooksPage() {
  // Примеры образов
  const looks = [
    { id: 1, title: "Образ 1", items: ["Футболка", "Джинсы"] },
  ];

  return (
    <div className="min-h-screen bg-bg-1">
      <HeaderNavigation className="py-6" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-2xl uppercase mb-8">Образы</h1>

        <div className="flex justify-center mb-12">
          <div className="w-full max-w-md">
            {looks.map((look) => (
              <div key={look.id} className="space-y-3">
                <div className="relative w-full aspect-[3/4] bg-bg-2 rounded-lg overflow-hidden flex items-center justify-center">
                  <span className="text-bg-3 opacity-30 uppercase text-xs text-center px-4">
                    {look.title}
                  </span>
                </div>
                <div>
                  <h3 className="uppercase text-sm mb-2">{look.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {look.items.map((item, idx) => (
                      <span key={idx} className="text-xs opacity-70 border border-black/20 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Блок подписки на имейл */}
        <EmailSubscription />
      </div>

      <Footer />
    </div>
  );
}

