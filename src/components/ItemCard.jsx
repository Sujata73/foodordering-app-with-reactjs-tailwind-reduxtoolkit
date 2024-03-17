import React from 'react'
import { BsPlus } from "react-icons/bs";
import { HiMinusSmall } from "react-icons/hi2";
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeFromCart } from './Redux/slices/CartSlice';
import { incrementQty} from './Redux/slices/CartSlice'
import { decrementQty } from './Redux/slices/CartSlice';
import toast from 'react-hot-toast';
const ItemCard = ({img,id,price,name,qty}) => {
  console.log("p",qty)
  const dispatch=useDispatch()
const removed=()=>{
  toast(`${name} Removed!`, {
    icon: '',
  })
}
  return (
  <>

    <div className='flex    gap-2 shadow-md rounded-lg p-5 mb-3'>
        <MdDelete onClick={()=>{dispatch(removeFromCart({id,img,price,name}));
        removed()
        }} className='absolute right-14 text-red-500 cursor-pointer'  />
        <img src={img} className=' w-[50px] h-[50px]'/>
        <div className='leading-5'>
            <h2 className='font-bold text-gray-800'>{name}</h2>
        
            <div className='flex justify-between  '>
     
                    <span className='text-green-500 font-bold'>₹{price}</span>
                    <div className='flex justify-center items-center gap-1 absolute right-14'> 
            <BsPlus  onClick ={()=> dispatch(incrementQty({id,img,price,name}))}className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 transition-all ease-in-out hover:border-none hover:text-white cursor-pointer' />
            <span>{qty}</span>
           
            <HiMinusSmall onClick ={()  => {qty > 1 ?dispatch(decrementQty({id})):qty=0}} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 transition-all ease-in-out hover:border-none hover:text-white cursor-pointer' />
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ItemCard