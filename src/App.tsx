import React, { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import Background from "./pages/Background/Background";
import Focus from "./pages/Focus/Focus";
import Gallery from "./pages/Gallery/Gallery";
import { Navbar } from "./components/Navbar";
const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ToastContainer position="top-right" autoClose={3000} />
          {/* TODO: add sprite for dancing :D  */}
          <Suspense fallback={<div>loaindg</div>}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/background" element={<Background />} />
              <Route path="/focus" element={<Focus />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
