import './App.scss';
import Header from './Components/Header';
import Banner from './Components/Banner';
import About from './Components/About';
import Skills from './Components/Skills';
import Work from './Components/Work';
import Portfolio from './Components/Portfolio';
import Testimonials from './Components/Testimonials';
import Contact from './Components/contact';

function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <About/>
     <Skills/>
     <Work/>
     <Portfolio/>
     <Testimonials/>
     <Contact/>

    </div>
  );
}

export default App;
