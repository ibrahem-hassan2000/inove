import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='footer'>
      <div className='allPart'>

        <div className='part'>
          <h2>about</h2>
          <ul>
            <li>
              <Link href='/'>home</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
          </ul>
        </div>
        <div className='part'>
          <h2>about</h2>
          <ul>
            <li>
              <Link href='/'>home</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
          </ul>
        </div>
        <div className='part'>
          <h2>about</h2>
          <ul>
            <li>
              <Link href='/'>home</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
            <li>
              <Link href='/'>Courses</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer