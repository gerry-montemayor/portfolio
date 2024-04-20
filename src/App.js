import React from 'react';
import Homepage from './components/Homepage';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Projects from "./components/Projects"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;