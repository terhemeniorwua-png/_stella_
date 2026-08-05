import { useState } from 'react'
import './App.css'
import Nav from './Component/Nav/Nav'
import Logo from './Component/Nav/Header'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
     <div className='flex justify-between px-10 items-center'>
     <Logo />
      <Nav />
     </div>

    </>
  )
}

export default App
