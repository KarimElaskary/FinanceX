import React from 'react'
import Button from '../UI/Button'
import Card from '../UI/Card'
import Card2 from '../UI/Card2'
import gps from '../assets/GPS.png'
import signal from '../assets/signal.png'
import world from '../assets/world.png'

const OurServices = () => {
  const data = [
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
    {
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor',
    },
  ]

  const data2 = [
    { title: 'Local business finance', img: gps },
    { title: 'Built for global payments', img: world },
    { title: 'Make internet of Money', img: signal },
  ]

  return (
    <div className='container flex items-center mx-auto mt-[150px] flex-col'>
      <h1 className='text-[20px] text-[#CBFC01] font-Rubik font-semibold mb-[20px]'>
        Our Services
      </h1>
      <h1 className='text-[48px] text-center font-Satoshi font-bold mb-[50px]'>
        Browse our services & <span className='text-[#CBFC01]'>offerings</span>
      </h1>
      <Button>Get Started</Button>
      <div className='mt-[100px]'>
        <ul className='flex flex-wrap justify-center mb-[150px]'>
          {data.map((card, i) => (
            <Card key={i} description={card.description} />
          ))}
        </ul>
      </div>
        <div>
          <ul className='flex justify-center'>
            {data2.map((card, i) => (
              <Card2 key={i} img={card.img} title={card.title} />
            ))}
          </ul>
        </div>
    </div>
  )
}

export default OurServices
