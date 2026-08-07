import { FaChevronRight } from "react-icons/fa"


function SemiNav(){

    return(
        <>
        <div className="flex items-center gap-2 pt-5">
            <small className="text-blue-400">Home  </small>
           <small> <FaChevronRight /></small>
            <small>Clothes</small>
            </div>
            <p className="font-black text-left">64 results for clothes</p>
         <div className="flex items-center gap-24">
            <div className="font-semibold text-left mt-5 bg-amber-50 w-24 p-2 rounded-3xl">
                <p className="text-center">Filter</p>
            </div>
            <div className="font-semibold  mt-5 bg-amber-50 w-24 p-2 rounded-3xl">
                <p className="text-center text-blue-300">Advanced</p>
            </div>
           </div>
        </>
    )
}

export default SemiNav