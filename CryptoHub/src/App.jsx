import { useState } from 'react'
import {NavBar} from './Components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App w-full'>
    <NavBar/>
    </div>
  )
}

export default App
