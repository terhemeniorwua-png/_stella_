import { BiStar } from "react-icons/bi";


const CartPopup = ({Cart, setCart}) => {

        // displayCart()

    return ( 
        <>
            <div className="bg-white absolute w-[70%] border p-5 m-auto right-5 top-16 hidden"  id="cart">
      
         <h2 className="font-black pb-2 inline-block pr-96">Cart Items</h2>
        <span className="underline text-blue-600 text-xl">
            <span className="font-black">Total Price: $</span> 
            {
                 Cart && Cart.reduce((total, item)=> total += item.price, 0)
            }
        </span>
      
   
   <div className=" grid grid-cols-3 gap-5">
         {Cart.map(item =>(
            <div className="border border-gray-300 pr-10 pl-2 py-5 shadow-2xl gap-5" key={item.id}> 
                <div>
                    <img src={item.image} alt={item.title} className="h-[18em] w-full"/>
                </div>
                <div className="text-left space-y-5 pt-5 pl-3">
                    <p className="text-sm"><span className="font-black">Name:</span> {item.title}</p>
                    <p className="text-sm"><span className="font-black">Category:</span> {item.category}</p>
                    <p className="text-sm"><span className="font-black">Price:</span> {item.price}</p>
                    <div className="text-sm flex items-center gap-2">
                       <p className="flex items-center"> 
                        <BiStar className="text-amber-300"/>
                        <BiStar className="text-amber-300"/>
                        <BiStar className="text-amber-300"/>
                        <BiStar />  
                        </p>
                     <p className="font-bold">{item.rating.rate}</p>
                    </div>
                    <p className="text-sm"><span className="font-black">Description</span>: {item.description}</p>
                </div>

                <button className="border bg-blue-500 hover:bg-blue-600 text-white mt-2 w-full py-2 rounded-3xl text-2xl font-bold cursor-pointer " onClick={()=>{
                   setCart(prevCart => prevCart.filter(product=>(
                    product.id !== item.id
                   )))
                }}>Remove</button>
            </div>
        ))}
     </div>
     <button className="border bg-red-400 hover:bg-red-500 text-white mt-2 w-[30%] py-2 rounded-3xl text-2xl font-bold cursor-pointer" onClick={()=>{
        if(Cart.length !== 0)  {
            setCart([])
        alert('Successfully Purchased products')
        } else{
            return false
        }
        
     }}>Check Out</button>
   </div>
        </>
     );
}
 
export default CartPopup;