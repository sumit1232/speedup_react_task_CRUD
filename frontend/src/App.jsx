import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import Userdata from './Components/Userdata';
import Pagenotfound from './Components/Pagenotfound';
import Editdata from './Components/Editdata';

const App = () => {
  return (
  <>
  <Router>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/userdata' element={<Userdata />}/>
      <Route path='/editdata' element={<Editdata/>} />
      <Route path='*' element={<Pagenotfound />}/>

    </Routes>
  </Router>
   </>
  )
}

export default App