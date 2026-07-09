import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
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

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar/>
      <Routes>
        <Route path = "/" element={<Home/>}/>
        <Route path = "/about" element={<About/>}/>
        <Route path = "/cart" element={<Cart/>}/>
        <Route path = "/collection" element={<Collection/>}/>
        <Route path = "/contact" element={<Contact/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/order" element={<Order/>}/>
        <Route path = "/placeorder" element={<Placeorder/>}/>
        <Route path = "/product/:id" element={<Product/>}/>
        <Route path = "/SignUp" element={<SignUp/>}/>
       


      </Routes>
       <Footer/>
    </div>
   
  )
}

export default App
