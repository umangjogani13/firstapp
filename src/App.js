import Header from './Components/Header';
import Home from './Components/Home';
import Feature from './Components/Feature';
import About from './Components/About';
import Skills from './Components/Skills';
import Counts from './Components/Counts';
import Clients from './Components/Clients';
import Services from './Components/Services';
import Testimonials from './Components/Testimonials';
import Portfolio from './Components/Portfolio';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import { Route,Routes} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import Info from './Components/Info';
import React from 'react';


function App() {
  return (
   <>
    <Info/>
   <Header/>
   
<Routes>  
        <Route path="/" element={ <Home/> }/>
        <Route path="/feature" element={ <Feature/> }/>
        <Route path="/about" element={ <About/> }/>
        <Route path="/skills" element={ <Skills/> }/>
        <Route path="/counts" element={ <Counts/> }/>
        <Route path="/clients" element={ <Clients/> }/>
        <Route path="/services" element={ <Services/> }/>
        <Route path="/testimonials" element={ <Testimonials/> }/>
        <Route path="/portfolio" element={ <Portfolio/> }/>
        <Route path="/team" element={ <Team/> }/>
        <Route path="/contact" element={ <Contact/> }/>
        <Route path="/footer" element={ <Footer/> }/>
   </Routes>

   </>
  )
};
export default App;
