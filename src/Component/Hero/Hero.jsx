import { FaApple, FaArrowAltCircleDown, FaArrowCircleDown, FaArrowDown } from 'react-icons/fa'
import heroImg from '/src/assets/heroImg.png'

function Hero (){

    return(
        <>
            <div className="bg h-[55vh] w-full flex items-center justify-between  px-20">
              <div>
                 <h6 className='text-white text-7xl pt-20 font-light text-left'>Simple <span className='block pl-20'>is More</span></h6>
              </div>
              <div className='text-white text-3xl p-2 border rounded-full'> <FaArrowDown /> </div>
            </div>
        </>
    )

}

export default Hero