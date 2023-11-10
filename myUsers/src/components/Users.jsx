import React from 'react'
import { Link} from 'react-router-dom';
export default function Users(props) {

  const handleDel = async (e) =>{
    const userId = e.target.value;
    const resp = await fetch("https://my-users-crud-mern.onrender.com/del-user" , {
    method: "POST",
    headers:{
      "Content-Type": "application/json"
    },
     
    body: JSON.stringify({"id": userId})
    });
    alert(await resp.text());
    window.location.reload();
  };



  return (
    <div className='user' key={props.user._id}>
      <h1 id={props.user._id} className='userName'>{props.user.username}</h1>
      <p id={props.user._id+"date"} className='dateJoin'>{props.user.dateJoined}</p>
      <div className="btnWrapper">
      <Link to="/get-user" state={props}><button>Show Info</button></Link>
      <button value={props.user._id} onClick={handleDel}>DELETE</button>
      </div>
    </div>
  )
}
