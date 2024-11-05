import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
const queryClient = new QueryClient();
function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <ToastContainer/>
              <Home/>
      </QueryClientProvider>
 
    </div>
  );
}

export default App;
