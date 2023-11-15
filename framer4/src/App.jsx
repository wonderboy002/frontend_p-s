import { useState } from 'react'
import WordAnimation from '../Components/WordAnimation'
import Carousel from '../Components/Carousel'
import CharacterAnimation from '../Components/CharacterAnimation'
import Practice from '../Components/Practice'
import Example from '../Components/Example'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Carousel/>
     </>
  )
}

export default App
