
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
       
           <div className="border text-black">
            {name.map(res => {
              return (
              <div>  
                <h3>{res.title}</h3>
                <p>{res.price}</p>
                <img src={res.image} alt="clothe" />
                </div>
                )
            })}
           </div>
        </>
    )
}

export default Clothes