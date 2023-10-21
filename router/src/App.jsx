import "./index.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
// import Footer from "./Components/Footer";
function App() {
  return (
    <>
      <div className="App min-h-screen w-full bg-slate-300">
        <Navbar></Navbar>
        <Home></Home>
        {/* <Footer></Footer> */}
      </div>
    </>
  );
}

export default App;
