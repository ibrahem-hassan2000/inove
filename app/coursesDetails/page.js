import React from "react";

function page({params}) {
    console.log(params);
    const [Count,setCount] = useState(1)
  return (
    <div className="product ">
      <div className="part1 ">
        <img src="" alt="" />
      </div>
      <div className="part2">
        <h1>tile</h1>
        <div className="price">
          <p> old prive</p>
          <p>price</p>
        </div>

        <p className="dec">description</p>
        <div className="counter">
          <div className="count">
            <h3>Quantity</h3>
            <div className="btnCount">
              <button onClick={()=>{setCount(Count+1)}}>+</button>
              <p className="num">{Count}</p>
              <button onClick={()=>{Count&&setCount(Count-1)}}>-</button>
            </div>
          </div>
          <button className="addTo">add to cart</button>
        </div>
      </div>
    </div>
  );
}

export default page;
