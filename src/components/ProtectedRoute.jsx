import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
const ProtectedRoute = ({element}) => {
    
    const cartitems=useSelector((state)=>state.cart.suju)
  return (
    <div>{cartitems.length >0 ? element:<Navigate to="/"/>}
    </div>
  )
}

export default ProtectedRoute