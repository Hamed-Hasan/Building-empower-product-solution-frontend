import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react';


const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <React.StrictMode>
  <ChakraProvider>
    <App />
    </ChakraProvider>
  </React.StrictMode>
</QueryClientProvider>,
)
