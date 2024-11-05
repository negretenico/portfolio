import React from 'react';
import './App.css';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <ToastContainer position="top-right" autoClose={3000} />
      <Home/>
      </QueryClientProvider>
 
    </div>
  );
}

export default App;
