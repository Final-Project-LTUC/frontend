import './App.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import AboutUs from './Components/AboutUS';
import ContactUS from './Components/ContactUS';



function App() {
  return (
    <>
      <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
        <NavBar/>
        <Header />
        <AboutUs/>
        <ContactUS/>
        <Footer/>
      </ChakraProvider>
    </>
  );
}

export default App;
