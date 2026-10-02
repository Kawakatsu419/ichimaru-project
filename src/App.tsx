import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Fishing from '@/components/Fishing';
import Schedule from '@/components/Schedule';
import Timeline from '@/components/Timeline';
import Family from '@/components/Family';
import Message from '@/components/Message';
import Footer from '@/components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Fishing />
      <Schedule />
      <Timeline />
      <Family />
      <Message />
      <Footer />
    </div>
  );
}

export default App;
