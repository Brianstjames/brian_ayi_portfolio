
import React from 'react';
import './components/assets/styles/baselayout.css';
import "bootstrap/dist/css/bootstrap.min.css";
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';


import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';



function App() { 
  
  return <>
    <Router>
      <div>
        <nav>
          <h6>
            <Link className='jay' to='about'> About </Link> &nbsp;
            <Link className='jay' to='portfolio'> Portfolio </Link> &nbsp;
            <Link className='jay' to='contact'> Contact </Link> &nbsp;
          </h6>
        </nav>
      </div>
      <br />
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='portfolio' element={<Portfolio />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
    </Router>
</>
}

export default App;
