"use client";

import { useState } from "react";

export default function FAQ() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const sections = [
    "О бренде",
    "Программа Лояльности",
    "Адреса магазинов",
    "Доставка",
    "Оплата",
    "Уход за одеждой",
    "Возврат",
    "Гарантия",
    "Сертификаты",
    "Документы",
    "Контакты",
  ];

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section className="w-full bg-bg-1 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl uppercase mb-8">FAQ (Помощь покупателю)</h2>

        <div className="space-y-4">
          {sections.map((section) => (
            <div key={section} className="border-b border-black/20">
              <button
                onClick={() => toggleSection(section)}
                className="w-full py-4 text-left flex items-center justify-between hover:opacity-70 transition-opacity uppercase"
              >
                <span className="text-base font-medium">{section}</span>
                <svg
                  className={`w-5 h-5 transition-transform ${
                    openSection === section ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openSection === section && (
                <div className="pb-4 pt-2">
                  <p className="opacity-80">Rues Vertes</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

