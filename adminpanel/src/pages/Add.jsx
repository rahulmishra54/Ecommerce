import React from 'react'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/sidebar.jsx'
import AddProduct from '../components/AddProduct.jsx'
const Add= () => {
  return (
    <div >
      <Navbar/>

      <div className='flex'>
      <Sidebar></Sidebar>
      <AddProduct/>
      </div>


    </div>
  )
}

export default Add