import { lazy, useEffect, useState } from 'react'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/user/Login';
import Register from './pages/user/Register';
// import Home from './pages/user/Home';
import UserRoute from './components/route/UserRoute';
const Home = lazy(() => import('./pages/user/Home'));


function App() {
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        limit={2}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<UserRoute><Home /></UserRoute>} />
        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App
