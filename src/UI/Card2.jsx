import React from 'react'
import rightWhite from '../assets/rightWhite.png'

const Card2 = ({ img, title }) => {
  return (
    <div className='container border-[1px] border-[#2E2E2E] p-[50px] w-[20%]'>
      <div className='bg-white p-[10px] w-fit mb-[30px]'>
        <img src={img} alt='smallIcon' />
      </div>
      <h1 className='mb-[30px]'>{title}</h1>
      <p className='mb-[30px]'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut
      </p>
      <a href='' className='flex items-center gap-3'>
        <span>Learn more</span>
        <div>
          <img src={rightWhite} alt='rightWhite' />
        </div>
      </a>
    </div>
  )
}

export default Card2
