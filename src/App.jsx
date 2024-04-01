import { useEffect } from 'react';
import './assets/css/style.css';
import { MainBanner, Header, About,Skills, Background, Testimonials, Projects, Contact, Footer } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    Aos.init({
      delay: 200,
      offset: 100,
    });
  },[]);
  return (
    <>
      <div className="app">
        <Header />
        <MainBanner />
        <About />
        <Skills />
        <Background />
        <Testimonials />
        <Projects />
        <Contact />
        <Footer/>
      </div>
    </>
  )
}

export default App
