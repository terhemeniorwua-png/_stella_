
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
            {name.map(res => 
               (  
               <div className="text-center card" key={res.id}>
                <div className="bg-amber-100 object-center px-5 py-2">
                    <img src={res.image} alt="clothe" />
                </div>

                <div className="w-[77%] pb-2">
                     <h5>{res.title}</h5>
                <p className="">{res.price}</p>
                </div>
                
               </div>
                )
            )}
           </div>
        </>
    )
}

export default Clothes