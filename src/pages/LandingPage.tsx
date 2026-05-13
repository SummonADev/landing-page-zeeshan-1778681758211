import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import LogoBar from '@/components/sections/LogoBar';
import Features from '@/components/sections/Features';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Pricing from '@/components/sections/Pricing';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function LandingPage() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <LogoBar />
        <Features />
        <Stats />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
