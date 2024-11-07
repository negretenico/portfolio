import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ToastContainer position="top-right" autoClose={3000} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
