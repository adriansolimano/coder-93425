import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

import { Button } from './components/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     Hola mundo
     <Button className='btn' text='Click me' onClick={() => alert('Button clicked!')} />
    </>
  )
}

export default App
