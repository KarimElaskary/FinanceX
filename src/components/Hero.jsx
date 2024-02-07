import Button from '../UI/Button'
import hero from '../assets/Hero.png'

const Hero = () => {
  return (
    <div className='hero container items-center mx-auto flex flex-col md:flex-row w-[70%] md:w-full'>
      <div className='flex-1'>
        <h1 className='text-[20px] font-Rubik text-[#CBFC01] text-center md:text-start font-semibold'>
          Welcome! Future Platform
        </h1>
        <h1 className='mt-[15px] mb-[35px] text-center md:text-start text-[72px] font-Satoshi font-bold'>
          The World's Most Modern Card{' '}
          <span className='text-[#CBFC01]'>Platform</span>
        </h1>
        <p className='mb-[50px] font-Rubik font-normal text-[18px] text-center md:text-start md:mr-[140px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          porttitor
        </p>
        <div className='flex justify-center md:justify-start'>
        <Button>Get Started</Button>
        </div>
      </div>
      <div className='w-[300px] text-center mt-[70px] md-[0px] md:w-[720px]'>
        <img src={hero} alt='hero' />
      </div>
    </div>
  )
}

export default Hero
