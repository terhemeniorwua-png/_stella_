import { BiCart, BiCartAdd, BiChevronDown, BiHeart } from "react-icons/bi"
import { FaCartArrowDown, FaCartPlus } from "react-icons/fa"
import { FaFlagUsa } from "react-icons/fa6"
import ReactCountryFlag from "react-country-flag";



function Nav(){

    return (
        <>
            <div className="text-3xl grid grid-cols-2 gap-5 pt-5">
              <div className="flex items-center gap-5">
                  <BiCart />
                <BiHeart />
                <ReactCountryFlag
                countryCode="US"
                /> <span className="text-sm">English <BiChevronDown className="float-right text-xl"/></span>  
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