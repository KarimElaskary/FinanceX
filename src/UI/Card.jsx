import React from 'react'
import line from '../assets/Line.png'
import vector2 from '../assets/Vector2.png'

const Card = ({ description }) => {
  return (
    <div className='container w-[30%] border-[#2E2E2E] border-[1px] p-[40px]'>
      <li>
        <div className='flex flex-col items-start'>
          <div className='mb-[35px]'>
            <img src={line} alt='line' />
          </div>
          <h1 className='mb-[25px] font-Satoshi font-medium text-[24px]'>
            Checking accounts
          </h1>
          <p className='font-Rubik text-[16px]'>{description}</p>
        </div>
        <div className='flex flex-col items-end'>
          <a
            href=''
            className='bg-[#CBFC01] text-black mb-[20px] mt-[50px] px-[10px] py-[10px] flex w-fit gap-2 items-center'
          >
            <div>
              <img src={vector2} alt='vector2' />
            </div>
          </a>
        </div>
      </li>
    </div>
  )
}

export default Card
