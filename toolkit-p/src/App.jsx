import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'
import './index.css'
function App() {


  return (
    <>
    <div className="App min-h-screen flex flex-col justify-center items-center bg-slate-700">

      <h1 className='text-4xl text-white font-extrabold'>Hello World</h1>
      <Addtodo/>
      <Todos/>
    </div>
    </>
  )
}

export default App
