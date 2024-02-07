import React from 'react'
import messenger from '../assets/messenger.png'
import twitter from '../assets/twitter.png'
import twoo from '../assets/twoo.png'
import linkedin from '../assets/linkedin.png'
import Button from '../UI/Button'

const Footer = () => {
  return (
    <div className='container mx-auto mt-[150px] mb-[100px] flex gap-[80px]'>
      <div className='flex flex-col'>
        <h1 className='font-Satoshi font-bold text-[24px] mb-[20px]'>
          FinanceX
        </h1>
        <p className='mb-[40px]'>Lorem ipsum dolor sit amet, consectetur </p>
        <div className='flex gap-2'>
          <img src={messenger} alt='messenger' />
          <img src={twitter} alt='twitter' />
          <img src={twoo} alt='twoo' />
          <img src={linkedin} alt='linkedin' />
        </div>
      </div>
      <div className='flex flex-col gap-3'>
        <h1>Company</h1>
        <p>About Us</p>
        <p>Careers</p>
        <p>Blog</p>
        <p>Pricing</p>
      </div>
      <div className='flex flex-col gap-3'>
        <h1>Resources</h1>
        <p>Templates</p>
        <p>Tutorials</p>
        <p>Free resources</p>
        <p>PriciContract templatesng</p>
      </div>
      <div className='flex flex-col gap-3'>
        <h1>Join Our Newsletter</h1>
        <div className='flex'>
          <span>
            <input
              type='text'
              placeholder='Your email adress'
              className='placeholder:text-[#151515] bg-[#0000070] py-[10px] text-center'
            />
          </span>
          <a
            href=''
            className='text-black bg-[#CBFC01] px-[30px] py-[10px] mb-[50px] flex w-fit gap-2 items-center'
          >
            Subscribe
          </a>
        </div>
        <p>
          * Will send you weekly updates for your better finance management.
        </p>
      </div>
    </div>
  )
}

export default Footer
