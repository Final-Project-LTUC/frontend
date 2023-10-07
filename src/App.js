import './App.css';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';

import AboutUs from './Components/ABOUTUS';





function App() {
  return (
    <>
      <ChakraProvider>
      <ColorModeScript initialColorMode="light" />
        
        <AboutUs/>
       
      </ChakraProvider>
    </>
  );
}

export default App;
