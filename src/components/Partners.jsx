import React from 'react'
import partner1 from '../assets/partner1.svg'
import partner2 from '../assets/partner2.svg'
import partner3 from '../assets/partner3.svg'
import partner4 from '../assets/partner4.png'
import partner5 from '../assets/partner5.svg'

const Partners = () => {
  return (
    <div className='bg-[#CBFC01] py-[85px]'>
      <div className='container mx-auto flex flex-col gap-6 md:flex-row justify-between items-center'>
        <div className='flex justify-center mb-[30px]'>
          <img src={partner1} alt='partner1'/>
        </div>
        <div className='flex justify-center mb-[30px]'>
          <img src={partner2} alt='partner2' />
        </div>
        <div className='flex justify-center mb-[30px]'>
          <img src={partner3} alt='partner3' />
        </div>
        <div className='flex justify-center mb-[30px]'>
          <img src={partner4} alt='partner4' />
        </div>
        <div className='flex justify-center mb-[30px]'>
          <img src={partner5} alt='partner5' />
        </div>
      </div>
    </div>
  )
}

export default Partners
