import React from 'react'

import FoodItems from '../components/FoodItems'
import Cart from '../components/Cart'
import Navbar from '../components/Navbar'

const Home = () => {
  return (
    <div >
           <Navbar/>
        <FoodItems/>
        <Cart/>

    </div>
  )
}

export default Home