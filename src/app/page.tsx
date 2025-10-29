import HeaderNavigation from "@/components/HeaderNavigation";
import Hero from "@/components/Hero";
import ShirtAnimation from "@/components/ShirtAnimation";
import ProductDetails from "@/components/ProductDetails";
import Lookbook from "@/components/Lookbook";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-bg-1">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <HeaderNavigation className="py-6" />
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <Hero />
      </div>

      {/* Shirt Animation Section */}
      <ShirtAnimation />

      {/* Product Details Section */}
      <ProductDetails />

      {/* Lookbook Section */}
      <Lookbook />

      {/* Demo Content (optional - можно удалить позже) */}
      <div className="max-w-4xl mx-auto px-8 space-y-12 py-8">
        {/* Typography Demo */}
        <section className="space-y-6">
          <div>
            <h1>Heading 1: Design System</h1>
            <p className="text-sm text-gray-600 mt-2">24px, line-height: 95%, letter-spacing: -2%</p>
          </div>

          <div>
            <h2>Heading 2: Typography</h2>
            <p className="text-sm text-gray-600 mt-2">16px, line-height: 80%, letter-spacing: -2%</p>
          </div>

          <div>
            <a href="#" className="underline">Example Link</a>
            <p className="text-sm text-gray-600 mt-2">Regular 16px</p>
          </div>
        </section>

        {/* Color Palette */}
        <section className="space-y-4">
          <h2>Color Palette</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-bg-1 border border-gray-300 p-6 rounded-lg">
              <div className="text-sm font-mono">bg-bg-1</div>
              <div className="text-xs text-gray-600 mt-1">#FFF8F0</div>
            </div>

            <div className="bg-bg-2 border border-gray-300 p-6 rounded-lg">
              <div className="text-sm font-mono">bg-bg-2</div>
              <div className="text-xs text-gray-600 mt-1">#D0DEBB</div>
            </div>

            <div className="bg-bg-3 border border-gray-300 p-6 rounded-lg text-white">
              <div className="text-sm font-mono">bg-bg-3</div>
              <div className="text-xs text-gray-300 mt-1">#050517</div>
            </div>

            <div className="bg-bg-4 border border-gray-300 p-6 rounded-lg text-white">
              <div className="text-sm font-mono">bg-bg-4</div>
              <div className="text-xs text-gray-300 mt-1">#006341</div>
            </div>
          </div>
        </section>

        {/* Font Demo */}
        <section className="space-y-4">
          <h2>Font: IBM Plex Mono</h2>
          <div className="space-y-2">
            <p className="font-normal">Regular: The quick brown fox jumps over the lazy dog</p>
            <p className="font-medium">Medium: The quick brown fox jumps over the lazy dog</p>
            <p className="font-semibold">Semibold: The quick brown fox jumps over the lazy dog</p>
            <p className="font-bold">Bold: The quick brown fox jumps over the lazy dog</p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
