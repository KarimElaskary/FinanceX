import React from 'react'
import rightwhite from '../assets/rightWhite.png'
const NavBar = () => {
  return (
    <div className='navbar container flex items-center justify-between mx-auto'>
      <h1>FinanceX</h1>
      <div className='flex gap-[55px]'>
        <a href=''>Why FinanceX</a>
        <a href=''>Features</a>
        <a href=''>Update</a>
        <a href=''>Blog</a>
      </div>
      <a href=''>
        <div className='flex gap-2 items-center'>
          <span>Sign Up</span>{' '}
          <div>
            <img src={rightwhite} alt='rightwight' />
          </div>
        </div>
      </a>
    </div>
  )
}

export default NavBar
