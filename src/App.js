import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Header from './Components/Header';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>

  );
}

export default App;
