import { BiGrid, BiHeart, BiMenu } from "react-icons/bi"
import { FaHeart } from "react-icons/fa"
import { FaMobileScreenButton } from "react-icons/fa6"

 export async function fetApi(){
        let res = await fetch('https://fakestoreapi.com/products')
        let title = await res.json() 
        return title
    }
// fetApi()
function Clothes({name}){
// console.log(name)    
    return(
        <>
      
           


      
       
           <div className="grid grid-cols-3 gap-10 col-span-2">
            
            {name.map((res) => {
                
               return(  
                
               <div className="card" key={res.id}>
                <div className="rounded-lg  bg-amber-50 object-center px-5 py-2">
                    <img src={res.image} alt="clothe" className="h-[18em] w-full"/>
                </div>
                <div className="h-36">
                     <div className="flex items-center pt-2 justify-between">
                        <small>Uniqio</small>
                        <p><BiHeart /></p>
                    </div>
                <div className="py-2 label">
                     <h5 className="font-black pt-2 w-[77%]">{res.title}</h5>

                    <div className="flex items-center justify-between">
                        <p className="text-blue-500 font-bold">SAR {res.price}</p>
                        <p className="text-red-500 font-bold">12 items in stock</p>
                    </div>
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