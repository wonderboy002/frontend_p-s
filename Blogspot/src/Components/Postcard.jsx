import React from 'react';
import dbService from '../Appwrite/Configuration';
import {Link} from "react-router-dom";
function Postcard({$id,title,featuredImage}) {
  return (
    <div to={`/post/${$id}`}>
      <div className='w-full shadow-md shadow-slate-400 flex flex-col gap-5 items-center roundex-xl p-4'>
         <div className="image">
             <img src={dbService.getFilePreview(featuredImage)} alt={title} />
         </div>
         <h1>This is Heading</h1>/*yaha title lena padega*/
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum blanditiis velit ab aut molestias assumenda sed quo quae unde, amet quos iure laboriosam est minima magni delectus quidem voluptates.</p>
      </div>
    </div>
  );
}

export default Postcard;
