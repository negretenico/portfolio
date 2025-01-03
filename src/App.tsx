import React, { Suspense } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import AboutMe from "./pages/AboutMe/AboutMe";
import Focus from "./pages/Focus/Focus";
import Gallery from "./pages/Gallery/Gallery";
import { Navbar } from "./components/Generic/Navbar";
import { NotFound } from "./pages/NotFound/NotFound";

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter basename="/portfolio">
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ToastContainer position="top-right" autoClose={3000} />
          {/* TODO: add sprite for dancing :D  */}
          <Suspense fallback={<div>Loading</div>}>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/aboutme" element={<AboutMe />} />
              <Route path="/focus" element={<Focus />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </QueryClientProvider>
      </div>
    </BrowserRouter>
  );
}

export default App;
