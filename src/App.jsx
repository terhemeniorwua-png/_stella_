import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav/Nav'
import Logo from './Component/Nav/Header'
import Heade from './Component/Headerr/Head'
import Hero from './Component/Hero/Hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Heade />
     <div className='flex justify-between px-10 items-center'>
     <Logo />
      <Nav />
     </div>
     <Hero />

    </>
  )
}

export default App
