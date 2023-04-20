import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Aboutme from './components/pages/Aboutme';
import Overview from './components/pages/Overview';
import Selected from './components/pages/Selected';
import Hackathon from './components/pages/Hackathon';
import Innovatieroute from './components/pages/Innovatieroute';
import Brein from './components/pages/Brein';
import Extra from './components/pages/Extra';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/i-talent' exact element={<Home />} />
          <Route path='/overmij' exact element={<Aboutme />} />
          <Route path='/overzicht' exact element={<Overview />} />
          <Route path='/selectie' exact element={<Selected />} />
          <Route path='/hackathon' exact element={<Hackathon />} />
          <Route path='/innovatieroute' exact element={<Innovatieroute />} />
          <Route path='/projectweek' exact element={<Brein />} />
          <Route path='/extra' exact element={<Extra />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
