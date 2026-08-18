import { BiSearch } from "react-icons/bi"


function Logo({Product}){

    return(
        <>
            <div className="flex items-center  gap-10">
                <div className="flex items-center text-blue-500">
                    <h4 className="text-5xl">S</h4>
                    <h3 className="text-2xl font-bold">Stella</h3>
                </div>

 {/* Search input */}

                <div className="flex items-center text-2xl border border-[#d9d4d43e] rounded-3xl w-150">
                    <div className=" px-2 ">
                        <BiSearch className="text-gray-400"/>
                    </div>
                    <input type="text" placeholder="What are you looking for..??" className=" px-2 text-[12px] py-2  outline-0 w-full"
                    //  onKeyUp={()=>{
                    //     Product.filter(product=>{

                    //     })
                    // }}
                    />
                </div>
            </div>
        </>
    )
}
export default Logo