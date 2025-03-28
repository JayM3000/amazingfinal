import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Insurance from '@/components/Insurance';
import About from '@/components/About';
import Map from '@/components/Map';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Insurance />
        <About />
        <Map />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
