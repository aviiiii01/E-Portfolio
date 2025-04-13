import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Resume from './components/Resume'; 
import Projects from './components/Projects'; 


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/resume" element={<Resume/>} /> 
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;