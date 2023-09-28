import './App.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUS';
import ContactUS from './Components/ContactUS';
import Testimonials from './Components/Testimonials';
import Blog from './Components/Blog';
import OurVision from './Components/OurVision';
import Trusting from './Components/Trusting';





function App() {
  return (
    <>
      <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
        <NavBar/>
        <Header />
        <Trusting/>
        <OurVision/>
        <AboutUs/>
        <ContactUS/>
        <Testimonials/>
        <Blog/>
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default App;
