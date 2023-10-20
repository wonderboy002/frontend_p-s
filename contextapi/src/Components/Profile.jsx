import React from 'react';
import { useContext } from 'react';
import UserContext from '../context/Usercontext';

export default function Profile() {
  const {user}=useContext(UserContext)
  if (!user) return <div>Please Login</div>
  return <div>Welcome {user.username}</div>
}
