import React, { useEffect } from 'react'
import { useState } from 'react';
import { GiKnifeFork } from "react-icons/gi";
import { setCategory } from './Redux/slices/CategorySlice';
import { Link } from 'react-router-dom';
import FoodData from '../Data/data';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setSearch } from './Redux/slices/searchSlice';


const Navbar = () => {


const[categories,setcategories] =  useState([])

const listallCategories=()=>{
  const  allCategories =[...new Set (FoodData.map((food)=>food.category))]
  setcategories(allCategories) 
  console.log(allCategories)
}

useEffect(()=>{
  listallCategories()
},[])

const dispatch=useDispatch()
const selectedCategory =useSelector((state)=>state.category.sujata)
  return (
    <>
   
    <div className='bg-yellow-600 p-5 w-full fixed '>
        <div className=' flex justify-between   md:px-32 px-5'>
            <Link to="/" className='flex font-bold text-2xl items-center gap-1'> <span className=''><GiKnifeFork className='text-4xl'/></span>
            Foodiago</Link>
          <form className='w-1/2'>
            <input type='text' placeholder="Search here" className='border-2  w-full' onChange={(e)=>dispatch(setSearch(e.target.value))}  />
            </form>
           <Link to={'/cart'} className="cart">
           <div  className='text-white'>
    
           </div>
           </Link>
        </div>
    </div>
    <div className=' flex  justify-center gap-5  pt-36 overflow-x-hidden'>
    <button
            onClick={() => dispatch(setCategory("All"))}
            className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
              selectedCategory === "All" && "bg-green-500 text-white"
            }`}
        >
All
        </button>

  {categories.map((category,index)=>
   <button
  onClick={() => {dispatch(setCategory(category))}}
  key={index}
  className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
    selectedCategory === category && "bg-green-500 text-white"}`}

        >
         
    {category}
        </button>


  )}

    </div>
  
    </>
    
  )
}

export default Navbar