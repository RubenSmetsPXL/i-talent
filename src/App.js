import './App.css';
import Navbar from './components/Navbar';
import  { BrowserRouter  as Router, Routes , Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Aboutme from './components/pages/Aboutme';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/overmij' exact element={<Aboutme/>} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
