
 export async function fetApi(){
        let res = await fetch('https://fakestoreapi.com/products')
        let re = await res.json() 
        return re
    }

function Clothes({name}){

    return(
        <>
            <div>
                {/* Name:{} */}
            </div>
        </>
    )
}

export default Clothes