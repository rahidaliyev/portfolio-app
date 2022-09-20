import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react'
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ColorModeScript } from '@chakra-ui/react'
// import theme from './theme'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
 <ChakraProvider>
 <ColorModeScript />
     <App />
 </ChakraProvider>
 </BrowserRouter>
);


