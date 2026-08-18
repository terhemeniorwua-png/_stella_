import { BiCart, BiChevronDown, BiHeart } from "react-icons/bi"
import ReactCountryFlag from "react-country-flag";
import CartPopup from "../marketing/CartPopup";



function Nav({Cart}){

     const displayCart = () =>{
        document.getElementById('cart').classList.toggle('hidden')
        
    }
   
    return (
        <>
            <div className="text-3xl grid grid-cols-2 gap-5">
              <div className="flex items-center gap-5 text-[36px] relative">
                <p className="bg-red-500 px-1 text-sm rounded-full absolute bottom-4 left-4 text-white cursor-pointer" onClick={displayCart}>{Cart.length}</p>

                  <BiCart className="cursor-pointer" onClick={displayCart}/>
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


            <CartPopup Cart={Cart} />
        </>
    )
}

export default Nav