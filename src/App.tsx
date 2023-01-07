import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import { Main } from './pages/main/main'
import { Login } from './pages/login';
import { Navbar } from './Components/navbar'
import { Createpost } from './pages/create-post/create-post'

function App() {
  return (
    <>
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Main/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/createpost' element={<Createpost/>}/>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
