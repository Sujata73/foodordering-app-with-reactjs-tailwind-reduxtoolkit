import React, { useEffect, useState } from 'react'
import { PropagateLoader  } from 'react-spinners'
const Success = () => {
  const[loading,setloading] =useState(true)
  useEffect(()=>{
setTimeout(() => {
  setloading(false)
},3000);
  },[])
  return (
    <div className='flex flex-col items-center justify-center h-screen leading-10'>
{loading ? <PropagateLoader color="#36d7b7" className='mt-5' /> :
  <div className='text-center'>
<h1 className='text-3xl font-bold'>Order Succesful!</h1>
<p>Your order hasbeen  successfully placed</p>
</div>
}

    </div>
  )
}

export default Success