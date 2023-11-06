import React, { useState } from 'react'
import Users from './Users';
import Loader from './Loader';

export default function HomePage() {

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [contact, setContact] = useState("");
  const [pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const handleClick = async (e) => {
    e.preventDefault();
    if (name !== "" && pass !== "" && mail !== "" && contact !== "") {
      
      await fetch("http://localhost:8080/add-user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          "username": name,
          "email": mail,
          "contact": contact,
          "password": pass,
        })

      });
      setName("");
      setMail("");
      setContact("");
      setPass("");
      
      showUsers();
    } else {
      alert("UserName and Password can't be empty....")
    }

  }

  const handleName = async (e) => {
    setName(e.target.value);
  };
  const handleMail = async (e) => {
    setMail(e.target.value);
  };
  // console.log(name);

  const handlePass = async (e) => {
    setPass(e.target.value);
  };
  const handleContact = async (e) => {
    setContact(e.target.value);
  };
  // console.log(pass);

  const showUsers = async (e) => {
    setIsLoading(true);
    const response = await fetch("http://localhost:8080/get-user", {
      method: "GET"
    });
    const newresponse = await response.json();

    setUserInfo(newresponse);
    setIsLoading(false);
    // console.log(userInfo);
  }


  return (
    <center><div className='addUsers'>
      <h1 className="logo">Add Users</h1>
      <form className='form'>

        <label htmlFor="username">Name :</label>
        <input onChange={handleName} type="text" name="username" id='username' placeholder="John Doe" value={name} />

        <label htmlFor="email">Email :</label>
        <input onChange={handleMail} type="email" name="email" id='email' placeholder="johndoe@xyz.com" value={mail} />
      
        <label htmlFor="contact">Contact Number :</label>
        <input onChange={handleContact} type="number" name="contact" id='contact' placeholder='+91 12345 67890' value={contact} />

        <label htmlFor="password">Password : </label>
        <input onChange={handlePass} type="password" name="password" id="password" placeholder="Password" value={pass}/>


        <button onClick={handleClick}>Submit</button>

      </form>
    </div>
      <br />
      <div className='myUsers'>
        <h1 className='logo'>My Users <span className="btn" onClick={showUsers}>Show User</span></h1>
        {
          isLoading ? <Loader /> : 
          <div className='users'>

            {
              userInfo.map((user) => (
                <Users key={user._id} user={user} />
                
              ))
            }
           
          </div>
        }
      </div>
    </center>
  )
}
