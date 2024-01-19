import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import Main from "./Pages/Main";
import './reset.css'
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Creators from "./Pages/Creators";
import CreatorDetail from "./Pages/CreatorDetail";
import EditProfile from "./Pages/EditProfile";


function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>



        <Route path="/pr" element={<Creators/>}/>
        <Route path="/pr/:name" element={<CreatorDetail/>}/>
        <Route path="/editPr" element={<EditProfile />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
