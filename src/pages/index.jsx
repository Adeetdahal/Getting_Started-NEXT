import AboutUs from '../components/AboutUs';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Services from '../components/Services';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutUs />
      <Services />
    </div>
  );
}
