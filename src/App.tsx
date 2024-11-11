import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import Background from "./pages/Background/Background";
import Focus from "./pages/Focus/Focus";
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
            <Route path="/aboutme" element={<AboutMe />} />
            <Route path="/background" element={<Background />} />
            <Route path="/focus" element={<Focus />} />
          </Routes>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
