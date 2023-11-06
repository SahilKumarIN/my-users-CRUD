import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  document.title = "MyUsers - CRUD";
  // const [mode, setMode] = useState(false);
  const toggleMode = (e)=>{
    document.documentElement.querySelector("#main").classList.toggle("dark");
  }
  return (
    <div className='navbar'>
        <nav>
            <div className="logo">
                My Users
            </div>
            <ul className="options">
                <li onClick={toggleMode}>Dark/Light</li>
               <li> <Link to="/">Home</Link></li>
                {/* <li>My Users</li> */}
                
            </ul>
        </nav>
    </div>
  )
}
