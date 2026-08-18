import './App.css'
import Nav from './Component/Nav/Nav'
import Logo from './Component/Nav/Header'
import Heade from './Component/Headerr/Head'
import Hero from './Component/Hero/Hero'
import Clothes, { fetApi } from './Component/marketing/Clothes'
import { useEffect, useState } from "react";
import Product from './Component/sidebar/SidebarFilter'
import SemiNav from './Component/SemiNav'


function App() {

  const [data, setData] = useState(null)

  useEffect( () =>{
    fetApi()
     .then(user =>{
      setData(user)
    }
   )
  }, [])

  return (
    <>
      <Heade />
     <div className='flex justify-between px-10 items-center'>
     <Logo />
      <Nav />
     </div>
     <Hero />
  <div className='px-10'>
       <SemiNav />
    <div className='grid grid-cols-3 justify-center'>
      <Product />
       {data && <Clothes name= { data }/>}

      
    </div>
  </div>

    </>
  )
}

export default App
