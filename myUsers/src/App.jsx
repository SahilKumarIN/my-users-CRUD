import {BrowserRouter as Router , Route, Routes} from 'react-router-dom';
import './styles/styles.css'
import UserInfo from "./components/UserInfo";
import HomePage from "./components/HomePage";
import Navbar from './components/Navbar';

function App() {

  


  return (
    <Router>
        <div id="main" className='light'>
      <Navbar />
      
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/get-user" element={<UserInfo  />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
