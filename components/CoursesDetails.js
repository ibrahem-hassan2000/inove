"use client";
import React, { useEffect, useState } from "react";

function CoursesDetails({ id }) {
  const [Count, setCount] = useState(1);
  const [data, setData] = useState([]);
  useEffect(() => {
    handellogin(id);
  }, []);
  const handellogin = (id) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  console.log(data);
  return (
    <>
     {
        data.id? <div className="coursesDetails">
        <div className="part1 ">
          <img src={data.image} alt="" />
        </div>
        <div className="part2">
          <h1>{data.title}</h1>
          <p className="dec">{data.description}</p>
          <p>{data.rating.rate}rating ({data.rating.count})</p>
         
          <div className="price">
            <p>{data.price}</p>
          </div>
  
          <div className="counter">
            <div className="count">
              <h3>Quantity</h3>
              <div className="btnCount">
                <button
                  onClick={() => {
                    setCount(Count + 1);
                  }}
                >
                  +
                </button>
                <p className="num">{Count}</p>
                <button
                  onClick={() => {
                    Count && setCount(Count - 1);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <button className="btnAdd">add to cart</button>
          </div>
        </div>
      </div>:null
    }
    </>
   
    
  );
}

export default CoursesDetails;
