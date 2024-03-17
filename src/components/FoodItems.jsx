import React from 'react';
import FoodCart from './FoodCart';
import FoodData from '../Data/data';
import { useSelector } from "react-redux";
const FoodItems = () => {
  
  const category = useSelector((state) => state.category.sujata);
  const searchCategory=useSelector((state)=>state.Search.search)
  return (
    <>
  
    <div className='md:mx-10 mx-5 mt-20 h-screen '>
      <div className='flex justify-center flex-wrap gap-5'>
      {FoodData.filter((food) => {
          if (category === "All") {
            return food.name.toLowerCase().includes(searchCategory.toLowerCase());
          } else {
            return category === food.category  && food.name.toLowerCase().includes(searchCategory.toLowerCase())
            
          }
        }).map((item) => (
          <FoodCart
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            desc={item.desc}
            rating={item.rating}
            img={item.img}
     
          />
        ))}
        {/* {FoodData.map((item) => (
          <FoodCart
            key={item.id}
            name={item.name}
            img={item.img}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
            id={item.id}
            qty={item.qty}
           
          />
        ))} */}
      </div>
    </div>
    </>
  );
}

export default FoodItems;
