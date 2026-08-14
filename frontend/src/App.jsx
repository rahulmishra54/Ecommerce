import { useState } from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './components/NavBar.jsx'
import React from 'react'
import './App.css'
import Cart from './pages/Cart.jsx'
import Collection from './pages/Collection.jsx'
import Contact from './pages/Contact.jsx'
import Login from './pages/Login.jsx'
import Order from './pages/Order.jsx'
import Placeorder from './pages/PlaceOrder.jsx'
import Product from './pages/Product.jsx'
import About from './pages/About.jsx'
import Footer from './components/Footer.jsx'
import SignUp from './pages/SignUp.jsx'

// NOTE: If react-toastify (or similar) is already installed in this project,
// let me know and I'll wire up a <ToastContainer /> here for real toast-style
// feedback (add-to-cart, login success/error, etc). Not added automatically
// per the "no unnecessary dependencies" rule.
// import { ToastContainer } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative min-h-screen bg-black text-white flex flex-col overflow-x-hidden'>
      {/* Subtle ambient purple glow layer — purely decorative, sits behind all content */}
      <div className='pointer-events-none fixed inset-0 -z-10 overflow-hidden'>
        <div className='absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[120px]' />
        <div className='absolute top-1/3 -right-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-[140px]' />
        <div className='absolute bottom-0 left-1/4 w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[130px]' />
      </div>

      <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] flex flex-col flex-1'>
        <NavBar />

        <main className='flex-1'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/order" element={<Order />} />
            <Route path="/placeorder" element={<Placeorder />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path="/SignUp" element={<SignUp />} />
          </Routes>
        </main>

        <Footer />
      </div>

      {/* <ToastContainer theme="dark" position="top-right" /> */}
    </div>
  )
}

export default App
