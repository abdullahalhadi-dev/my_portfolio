import { useEffect } from 'react';
import Aos from 'aos';
import './App.css';

import "aos/dist/aos.css";

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Services from './components/UI/Services';
import Portfolio from './components/UI/Portfolio';
import Contact from './components/UI/Contact';

function App() {

  useEffect(() => {
    Aos.init();
  }, [])
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}

export default App;
