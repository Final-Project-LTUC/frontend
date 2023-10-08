import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from './Header';
import NavBar from './NavBar';
import Footer from './Footer';
import AboutUs from './AboutUS';
import ContactUS from './ContactUS';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Team from './Team';
import Vision from './Vision';





function App() {
  return (
    <>
      <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
        {/* <NavBar/> */}
        <Header />
        <Team/>
        <Vision/>
        <AboutUs/>
        <ContactUS/>
        <Testimonials/>
        <Blog/>
        {/* <Footer/> */}
      </ChakraProvider>
    </>
  );
}

export default App;
