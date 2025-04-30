import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';

import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </Router>
    
    </div>
  );
}

export default App;
