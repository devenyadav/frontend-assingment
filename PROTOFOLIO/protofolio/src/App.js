// import logo from './logo.svg';
import './App.css';
import Home from './Routes/Home';
import Academic from './Routes/Academic';
import Contact from './Routes/Contact';
import{Routes,Route} from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      
     <Routes>  
                 <Route exact path='/' element={< Home />}></Route>  
                 <Route exact path='/Academic' element={< Academic />}></Route>  
                 <Route exact path='/Contact' element={< Contact />}></Route>  
          </Routes> 
      
        
    </div>
  );
}

export default App;
