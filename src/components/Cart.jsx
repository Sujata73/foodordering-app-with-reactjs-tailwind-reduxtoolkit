
import { IoCloseCircleSharp } from 'react-icons/io5';
import ItemCard from './ItemCard';
import {useSelector} from 'react-redux'
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const navigate=useNavigate()
const[data,setdata]=useState(true)
  const carts = useSelector((state)=> state.cart.suju)
  console.log("hh",carts)
const total=carts.reduce((totalqty,item)=> totalqty+item.qty,0)
const totalprice=carts.reduce((total,item)=>total+item.price*item.qty,0)
  return (
    
    <>
          
       
     <div className={`bg-white w-full lg:w-1/4 h-full fixed right-0 px-10 top-0  transition-all duration-500  ${data?'hidden':""}`}>
      <div className='flex justify-between items-center mt-10'>
        <h1 className='font-bold'>My Order</h1>
        <IoCloseCircleSharp onClick={()=>setdata(!data)}
          className='hover:text-red-500 text-xl '
    
        />
      </div>
      {carts.length>0 ? carts.map((item)=>
      <ItemCard id={item.id} img={item.img} price={item.price} name={item.name} qty={item.qty}/>
      ):<h2 className='font-bold text-2xl'>your cart is empty</h2>}
      <div className='mt-[200px] text-start'>
        <h1 className='font-semibold text-gray-800'>Items:{total }</h1>
        <h2 className='font-semibold text-gray-800'>Total Amount:{totalprice}</h2>
        <hr className='my-5' />
        <button onClick={()=>navigate("/success")} className='font-bold bg-green-500 px-3 py-2 text-white w-full'>
          Checkout
        </button>
      </div>
    </div>
    <h1 className='top-5 right-16 fixed'><FaShoppingCart   onClick={()=>setdata(!data)} className={`relative text-3xl z-10  ${total>0 && "animate-bounce delay-500 transition-all"}`} /> <span className='absolute -mt-10 ml-7 '>{carts.length}</span></h1>
    </>
  );
}

export default Cart;
