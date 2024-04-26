import { lazy, useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/user/Login';
import Register from './pages/user/Register';
import UserRoute from './components/route/UserRoute';
const Home = lazy(() => import('./pages/user/Home'));


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<UserRoute><Home/></UserRoute>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
