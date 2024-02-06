import rightBlack from '../assets/rightBlack.png'

const Button = ({ children }) => {
  return (
    <a
      href=''
      className='bg-[#CBFC01] text-black px-[10px] py-[20px] flex w-fit gap-2 items-center'
    >
      <span>{children}</span>
      <div>
        <img src={rightBlack} alt='rightBlack' />
      </div>
    </a>
  )
}

export default Button
