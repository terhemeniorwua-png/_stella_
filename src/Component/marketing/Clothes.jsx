import { BiGrid, BiHeart, BiMenu } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"
import { FaMobileScreenButton } from "react-icons/fa6"

 export async function fetApi(){
        let res = await fetch('https://fakestoreapi.com/products')
        let title = await res.json()
        // console.log(title) 
        return title
    }
// fetApi()
function Clothes({name}){

    return(
        <>
       
           <div className="grid grid-cols-3 gap-10 col-span-2">
            
            {name.map((res) => {
                
               return(  
                
               <div className="card" key={res.id}>
                <div className="rounded-lg  bg-amber-50 object-center px-5 py-2">
                    <div className="text-white bg-blue-300 py-1 text-center rounded-xl text-sm mb-5 w-[50%]">Now active</div>
                    <img src={res.image} alt="clothe" className="h-[18em] w-full"/>
                </div>
                <div className="h-36">
                     <div className="flex items-center pt-2 justify-between">
                        <small className="text-blue-400">Uniqio</small>
                        <p><BiHeart  className="hover:text-red-400"/></p>
                    </div>
                <div className="py-2 label">
                     <h5 className="font-black pt-2 w-[77%]">{res.title}</h5>

                    <div className="flex items-center justify-between">
                        <p className="text-blue-500 font-bold">SAR {res.price}</p>
                        <p className="text-red-500 font-bold">12 items in stock</p>
                    </div>

                    <button className="border bg-blue-500 text-white mt-2 w-full py-2 rounded-3xl text-2xl font-bold cursor-pointer">Add to Cart</button>
                </div>
                </div>
                
                
               </div>
                )}
            )}
           </div>
        </>
    )
}

export default Clothes