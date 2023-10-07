import { useState, useCallback, useEffect,useRef } from "react";

import "./index.css";

function App() {
  const [length, setlength] = useState(8);
  const [numberFlag, setnumberFlag] = useState(false);
  const [CharFlag, setCharFlag] = useState(false);
  const [password, setpassword] = useState("");
  const passwordRef=useRef(null);
  const passwordGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberFlag){
      str+="0123456789";
    }
    if (CharFlag) {
      str += "!@#$%&*()-~{}[]";
    }
  
    let pass = "";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random(str.length)*str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass)
  }, [length, numberFlag, CharFlag]);

  useEffect(()=>{
    passwordGen()
  },[length,numberFlag,CharFlag])

  function copy(e){
    passwordRef.current?.setSelectionRange(0,12);
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }
  return (
    <>
      <div className="App bg-black min-h-screen w-full flex md:items-center justify-center">
        <div className="bg-slate-700 md:flex-col h-30  main min-w-sm max-w-lg p-5 flex flex-col gap-5">
          <h1 className="text-yellow-600 text-4xl"> Password Generator</h1>
          <div className="flex items-center">
            <input
              type="text"
              className="px-3 py-2 outline-none w-3/4"
              value={password}
              placeholder="password Generated here"
              ref={passwordRef}
              readOnly
            />
            <button onClick={copy} className="w-1/4 text-white flex justify-center bg-blue-700 px-3 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
                />
              </svg>
            </button>
          </div>
          <div className="inputs md:flex gap-3 items-center text-white">
            <input
              onChange={(e) => setlength(e.target.value)}
              className="cursor-pointer"
              type="range"
              min={6}
              max={30}
              value={length}
            />
            <label htmlFor="">Length : {length}</label>
            <div className="flex gap-2 items-center">
              <span> Numbers : </span>
              <input
                type="checkbox"
                className="h-full"
                value={numberFlag}
                onChange={() => setnumberFlag(!numberFlag)}
              />
            </div>
            <div className="flex gap-2  items-center">
              <span> Characters : </span>
              <input
                type="checkbox"
                className="h-full"
                value={CharFlag}
                onChange={() => setCharFlag(!CharFlag)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
