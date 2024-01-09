import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Main from "./Pages/Main";
import './reset.css'


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
