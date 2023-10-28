import conf from "./conf/conf";

function App() {

  console.log(conf.appwriteUrl);
  return (
   <div className='App min-h-screen bg-blue-900 text-center p-16'>
   <h1 className='text-4xl text-white font-extrabold'>Blogspot , A reactjs based blog platform with appwrite backend</h1>
    </div>
  )
}

export default App
