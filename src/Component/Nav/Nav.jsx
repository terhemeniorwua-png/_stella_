import { BiCart, BiChevronDown, BiHeart } from "react-icons/bi"
import ReactCountryFlag from "react-country-flag";



function Nav(){

    return (
        <>
            <div className="text-3xl grid grid-cols-2 gap-5">
              <div className="flex items-center gap-5 text-[36px] relative">
                <p className="bg-red-500 px-1 text-sm rounded-full absolute bottom-4 left-4 text-white cursor-pointer">0</p>
                  <BiCart className="cursor-pointer"/>
                <BiHeart className="hover:text-red-400 cursor-pointer"/>

                <ReactCountryFlag
                countryCode="US"
               
                />
                 <span className="text-sm">English <BiChevronDown className="float-right text-xl"/></span>  
              </div>


                <div className="flex items-center gap-5">
                    <h6 className="text-sm font-black p-2 bg-gray-200 rounded-full">AR</h6>
                    <div>
                        <p className="text-gray-400 text-[12px]">Welcome Back</p>
                        <h5 className="text-[12px] font-black">Abdel Rohman</h5>
                    </div>
                </div>
            </div>

            
        </>
    )
}

export default Nav