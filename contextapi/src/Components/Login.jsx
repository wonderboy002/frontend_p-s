import React, { useContext, useState } from "react";
import UserContext from "../context/Usercontext";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {setUser}=useContext(UserContext);
  function handleSubmit(e){
    e.preventDefault();
    setUser({username,password})
  }
  return (
    <div>
      <input
        type="text"
        name="name"
        id="name"
        placeholder="Username"
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
