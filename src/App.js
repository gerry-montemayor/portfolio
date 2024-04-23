import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Projects from "./components/Projects"
import Resume from "./components/Resume"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume/>}/>
      </Routes>
    </div>
  );
}

export default App;