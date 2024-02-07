import Button from '../UI/Button'
import hero from '../assets/Hero.png'

const Hero = () => {
  return (
    <div className='hero container items-center mx-auto flex flex-col md:flex-row '>
      <div className='flex-1'>
        <h1 className='text-[20px] font-Rubik text-[#CBFC01] font-semibold'>
          Welcome! Future Platform
        </h1>
        <h1 className='mt-[15px] mb-[35px] text-[72px] font-Satoshi font-bold'>
          The World's Most Modern Card{' '}
          <span className='text-[#CBFC01]'>Platform</span>
        </h1>
        <p className='mb-[50px] font-Rubik font-normal text-[18px] mr-[140px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <Button>Get Started</Button>
      </div>
      <div>
        <img src={hero} alt='hero' />
      </div>
    </div>
  )
}

export default Hero
