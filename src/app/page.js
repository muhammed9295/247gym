import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrialFree from '@/components/TrialFree';
import AboutUs from '@/components/AboutUs';
import TrainerWrapper from '@/components/TrainerWrapper';
import Testimonial from '@/components/Testimonial';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <TrialFree />
      <AboutUs />
      <TrainerWrapper />
      <Testimonial />
      <Footer />
    </div>
  );
} 