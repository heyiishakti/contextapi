import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home';
import Like from './Pages/Liked';
import Header from './Components/Header';


function App() {

    const [like, setLike] = useState([])
  return (
    <Router>
      <Header like={like} />
      <Routes>
          <Route exact path='/' element={<Home like={like} setLike={setLike} />} />
          <Route path='/like' element={<Like like={like} setLike={setLike} />} />
        </Routes>
      </Router>
  );
}

export default App;
