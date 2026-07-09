import React from 'react'
import List from '../components/List.jsx'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/sidebar.jsx'


const ProductList = () => {
  return (
    <div>
      <Navbar></Navbar>

      <div className='flex'>
        <Sidebar></Sidebar>
        <List></List>
      </div>
    </div>
   
  )
}

export default ProductList