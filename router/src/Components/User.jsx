import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const {userId}=useParams()
  return (
    <div className='bg-green-500 p-4 text-white font-extrabold text-center'>
      User Details Here : {userId}
    </div>
  );
}

export default User;
