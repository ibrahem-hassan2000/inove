import Link from 'next/link'
import React from 'react'

function CartCourse({img,title,dec,price,id}) {
  return (
    <div className='oneCourse'>
        <div className='ImgCourse'>
        <img src={img} alt='img lat'/> 
        </div>
        <div className='infoCourse'>
            <h2>{title} </h2>
            
            <div>
            <div className='salary'>
                <p>{price} EG</p>
            </div>
            <Link href={`/coursesDetails/${id}`} className='btnAdd'>Show Details</Link>
            </div>
        </div>
    </div>
  )
}

export default CartCourse