import React from 'react';
import { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Redirect,Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/NavbarMenu";
import Uvod from "./Pages/Uvod/Uvod";
import Textil from "./Pages/Textil/Textil";
import Eshop from "./Pages/Eshop/Eshop";
import Kontakt from "./Pages/Kontakt/Kontakt";
import Vysivka from './Pages/Sluzby/Vysivka';
import Tisk from './Pages/Sluzby/Tisk';
import Laser from './Pages/Sluzby/Laser';
import Footer from './Components/Footer/Footer';

const App = () =>{
    return(
    <div className='App'>
        <Router>
          <header>
            <Navbar></Navbar>
          </header>
          <main>
              <Routes>
                <Route path='/' element={<Uvod/>}></Route>
                <Route path='/vysivka' element={<Vysivka/>}></Route>
                <Route path='/tisk' element={<Tisk/>}></Route>
                <Route path='/Laser' element={<Laser/>}></Route>
                <Route path='/textil' element={<Textil/>}></Route>
                <Route path='/eshop' element={<Eshop/>}></Route>
                <Route path='/kontakt' element={<Kontakt/>}></Route>
              </Routes>
          </main>
          <footer>
            <Footer></Footer>
          </footer>
        </Router>
    </div>
  );
}

export default App;
