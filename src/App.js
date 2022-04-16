import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Header from './Components/Header';


function App() {

  return (
    <Router>
      <Header/>
      <Route exact path='/'  component={Home} />
        <Route path='/cart'  component={Cart} />
      </Router>

  );
}

export default App;
