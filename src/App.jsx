import { useState } from 'react';
import './App.css'
import Home from './components/Home';
import Wishpage from './components/Wishpage'
import { usernameContext } from './context/username';
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
    <usernameContext.Provider value={{username,Username}}>

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/wishpage' element={<Wishpage/>} />
    </Routes>
    </BrowserRouter>
    </usernameContext.Provider>
  )
}

export default App
