import { BiCar, BiCaretRight, BiChevronDown, BiCurrentLocation, BiUndo } from "react-icons/bi"
import { FaApple, FaLocationArrow, FaLungsVirus, FaShieldVirus, FaVirus } from "react-icons/fa"
import ReactCountryFlag from "react-country-flag";
import { FaVirusSlash } from "react-icons/fa6";

function Heade(){

    return(
        <>
            <header>
                <div className="bg-[#000] text-white flex justify-between px-5">
                    <div className="flex justify-center items-center">
                        <BiCurrentLocation />
                        <p className="font-light flex items-center text-[12px]">Ship to KSA  <ReactCountryFlag 
                            countryCode="KS"
                        /> 
                        <BiChevronDown className="text-xl"/>
                        </p>
                    </div>
                    <div className="text-white flex items-center gap-5 text-[12px]">
                        <p className="flex items-center gap-1">
                            <BiCar className="float-right "/>
                            <span className="text-[10px]">Trusted shipping</span>
                        </p>
                        <p className="flex items-center gap-1">
                            <BiUndo className="float-right "/>
                            <span className="text-[10px]">Easy RETURN</span>
                        </p>
                         <p className="flex items-center gap-1">
                            <FaShieldVirus className="float-right "/>
                           <span className="text-[10px]"> Secure Shopping</span>
                        </p>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Heade