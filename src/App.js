import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Main from "./Pages/Main";
import './reset.css'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
