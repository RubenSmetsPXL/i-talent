import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Aboutme from './components/pages/Aboutme';
import Overview from './components/pages/Overview';
import Selected from './components/pages/Selected';


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
        </Routes>
      </Router>
    </>
  );
}

export default App;
