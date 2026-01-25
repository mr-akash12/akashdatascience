import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ChatAgent from '@/components/ChatAgent';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Stats />
      <Projects />
      <Contact />
      <Footer />
      <ChatAgent />
    </div>
  );
};

export default Index;
