import "./index.css";
function App() {
  return (
    <>
      <div className="App min-h-screen bg-darkBlue">
        <div className="mainApp flex flex-col w-full items-center gap-6">
          <h1 className="text-white mt-32 font-bold text-4xl">
            Get Things Done
          </h1>
          <div className="form flex gap-3 justify-center w-full">
            <input
              type="text"
              placeholder="Enter Your Task"
              className="p-3  rounded-md w-3/5"
            />
            <button className="bg-green p-3 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
