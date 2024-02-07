import React from 'react'
import map from '../assets/map.png'

const Benefits = () => {
  return (
    <div className='flex flex-col md:flex-row container mx-auto mt-[150px] justify-between'>
      <div className='flex flex-col'>
        <h1 className='font-Rubik font-semibold text-center md:text-start text-[20px] mb-[30px] text-[#CBFC01]'>
          Benefits
        </h1>
        <h1 className='font-Satoshi font-bold text-[48px] mb-[30px] text-center md:text-start'>
          We have many users all over the{' '}
          <span className='text-[#CBFC01]'>world</span>
        </h1>
        <p className='font-Rubik font-normal text-[16px] text-center md:text-start text-[#ffffff70] mb-[30px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna{' '}
        </p>
        <div className='flex flex-row justify-center md:justify-start text-white text-center'>
          <div className='flex  gap-[60px] mb-[100px]'>
            <div>
              <h1 className='font-Satoshi text-[28px] text-white font-bold'>
                10M<span className='text-[#CBFC01]'>+</span>
              </h1>
              <p className='font-Rubik text-[14px] font-normal text-[#CBFC01]'>
                User active
              </p>
            </div>
            <div>
              <h1 className='font-Satoshi text-[28px] text-white font-bold'>
                30<span className='text-[#CBFC01]'>+</span>
              </h1>
              <p className='font-Rubik text-[14px] font-normal text-[#CBFC01]'>
                Country
              </p>
            </div>
            <div>
              <h1 className='font-Satoshi text-[28px] text-white font-bold'>
                $50M<span className='text-[#CBFC01]'>+</span>
              </h1>
              <p className='font-Rubik text-[14px] font-normal text-[#CBFC01]'>
                Transaction
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <img src={map} alt='benefits' />
      </div>
    </div>
  )
}

export default Benefits
