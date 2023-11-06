import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function UserInfo(props) {
  const location = useLocation();
  const stateData = location.state.user;
  console.log(stateData);
  const [showPass, setShowPass] = useState(false);
  const dispPass = (e) => {
    setShowPass(!showPass);
  }
  
 

  return (
   
    <div className='userInfoWrapper'>
      <h1 className='logo'>User Info</h1>
      <div className='userInfo'>
        <h1 id="name" className='logo'>{stateData.username}</h1>

        <p className='gray font-size-sm'>Date joined : <span>{stateData.dateJoined}</span></p>

        <p className='gray'>Email : <span className='sec-color'>{stateData.email}</span></p>

        <p className='gray'>Contact : <span className='sec-color'>{stateData.contact}</span></p>

        <p id="password" className='gray'>{showPass ? stateData.password : "**********"} <button className='btn' onClick={dispPass}>{showPass ? "Hide Password" : "Show Password"}</button></p>
        
      </div>
    </div>
  )
}
