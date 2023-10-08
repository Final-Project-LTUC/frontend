import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import Header from '../../Components/AboutUS/Header';
import NavBar from '../../Components/AboutUS/NavBar';
import Footer from '../../Components/AboutUS/NavBar/Footer';
import AboutUs from '../../Components/AboutUS';
import ContactUS from '../../Components/AboutUS/ContactUS';
import Testimonials from '../../Components/AboutUS/Testimonials';
import Blog from '../../Components/AboutUS/Blog';
import Team from '../../Components/AboutUS/Team';
import Vision from '../../Components/AboutUS/Vision';





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
