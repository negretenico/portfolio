import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import MyWork from './pages/myWork/MyWork';
import TransitionRouter from './components/TransitionRouter';
function App (): JSX.Element {
  const home = { path: '/', element: <Home/> };
  const aboutMe = { path: '/about', element: <About/> };
  const myWork = { path: '/work', element: <MyWork/> };

  return (
    <>
      <BrowserRouter>
        <TransitionRouter routes={[
          home,
          aboutMe,
          myWork
        ]} />
      </BrowserRouter>
    </>
  );
}
export default App;
