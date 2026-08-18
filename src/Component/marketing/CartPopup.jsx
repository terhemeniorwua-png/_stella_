import { FaStar } from "react-icons/fa";


const CartPopup = ({Cart}) => {

        // displayCart()

    return ( 
        <>
            <div className="bg-white absolute w-[70%] border p-5 m-auto right-5 top-16 "  id="cart">
      
         <h2 className="font-black pb-2 inline-block pr-96">Cart Items</h2>
        <span className="underline text-blue-600 text-xl">
            <span className="font-black">Total Price: $</span> 
            {
                 Cart && Cart.reduce((total, item)=> total += item.price, 0)
            }
        </span>
      
   
   <div className=" grid grid-cols-3 gap-5">
         {Cart.map(item =>(
            <div className=" border border-gray-300 pr-10 pl-2 py-2 shadow-2xl grid grid-cols-[1fr_2fr] gap-5" key={item.id}> 
                <div>
                    <img src={item.image} alt={item.title} className="h-36"/>
                </div>
                <div className="text-left">
                    <p className="text-sm">Name: {item.title}</p>
                    <p className="text-sm">Category: {item.category}</p>
                    <p className="text-sm">Price: {item.price}</p>
                    <p className="text-sm">
                       <p className="flex items-center"> 
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        </p>
                     <p>{item.rating.rate}</p>
                    </p>
                </div>
            </div>
        ))}
     </div>
   </div>
        </>
     );
}
 
export default CartPopup;