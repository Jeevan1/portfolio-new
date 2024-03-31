import './assets/css/style.css';
import { MainBanner, Header, About,Skills, Background, Testimonials, Projects, Contact, Footer } from './components';

function App() {
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
