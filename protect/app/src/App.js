// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route, Router} from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Navbar from './Navbar';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Navbar />
    <Router>
    <Routes>
    <Route path="/" element={<Home />} />
      
 <Route  path="/About" element={< About /> } exact />
 <Route path="/Contact" element={ <Contact />} />


    
   
    <Route path="/Login" element={<Login />} />

    </Routes>
    </Router>
    </BrowserRouter>
    
    </div>
  );
}

export default App;
