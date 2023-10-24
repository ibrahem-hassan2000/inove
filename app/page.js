"use client"

import CartCourse from "@/components/CartCourse";
import { useEffect, useState } from "react";



export default function Home() {
  const [data,setData] =useState([])
  useEffect(()=>{handellogin()},[])
  const handellogin =  () => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>
              setData(json)
             )
  };
  console.log(data);
  return (
    
      <div className="Courses">
        {
          data.length>0?data.map(((data,i)=>{
            return(
              <CartCourse  title={data.title} dec={data.description} price={data.price} img={data.image} id={data.id} key={i} />
            )
          })) : null
        }
        
      </div>
   
  )
}
