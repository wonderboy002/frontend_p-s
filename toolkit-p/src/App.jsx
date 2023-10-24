import Addtodo from './Components/Addtodo'
import Todos from './Components/Todos'
import './index.css'
function App() {


  return (
    <>
    <div className="App bg-purple min-h-screen w-full flex flex-col items-center bg-slate-700">

      <h1 className='text-4xl mt-32 text-white font-extrabold'>get Things Done</h1>
      <Addtodo/>
      <Todos/>
    </div>
    </>
  )
}

export default App
