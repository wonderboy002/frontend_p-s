import React, { useEffect, useState } from "react";
import "../index.css";
import { useLoaderData } from "react-router-dom";

function Github() {
  // const [data,setData]=useState([]);
  // useEffect(() => {
  //   fetch("https://api.github.com/users/wonderboy002")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data);
  //       console.log(data);
  //     });
  // }, []);
  const data=useLoaderData()
  return (
    <div className="bg-teal-600 flex justify-center flex-wrap gap-6 text-center p-4 my-10 text-white font-extrabold text-3xl">
      <img className="w-60 rounded-full" src={data.avatar_url} alt="" />
      <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="text-4xl">{data.name}</h1>
      <h1 className="text-4xl">{data.bio}</h1>
      </div>
    </div>
  );
}

export default Github;
export async function githubInfo(){
  const response=await fetch("https://api.github.com/users/wonderboy002")
  return response.json()
}
