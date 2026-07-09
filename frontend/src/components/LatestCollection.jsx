import React from 'react'
import { ShopContext } from '../context/showContext.jsx'
import { useContext } from 'react'
import Title from './Title.jsx'
import { useState,useEffect } from 'react'
import ProductItems from './ProductItems.jsx'

const LatestCollection = () => {

    const {products} = useContext(ShopContext)
    const [latestPrduct,setLatestProduct] = useState([])

    useEffect(()=>{
      setLatestProduct(products.slice(0,10))
    },[])

    
  return (
    <div className=''>
      <div className='text-center py-8 text-3xl'>
        <Title text1={"LATEST"} text2={"COLLECTION"}/>

      </div>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gay-y-6'>
        {
          latestPrduct.map((items,index)=>(
            <ProductItems key={index} id={items._id} price={items.price} name={items.name} image={items.image}/>

          ))
        }

      </div>
    </div>
  )
}

export default LatestCollection