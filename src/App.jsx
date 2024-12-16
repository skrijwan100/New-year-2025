import { useState } from 'react';
import './App.css'
import Home from './components/home';
import Wishpage from './components/Wishpage'
import {
  BrowserRouter ,
  Routes,
  Route,
} from "react-router-dom";
function App() {
  const [username,setusername]=useState(null)
  const Username=(name)=>{
    setusername({
      name:name
    })
  }
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home  Username={Username}/>} />
      <Route path='/wishpage' element={<Wishpage username={username}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
