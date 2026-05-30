import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/hero-section";

export default function Page() {
  return (
    <main id="top" className="min-h-screen bg-white text-black">
      <Navbar />
      <HeroSection />
    </main>
  );
}
