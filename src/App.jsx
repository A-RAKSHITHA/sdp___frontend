import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Webinars from './pages/Webinars';
import Conferences from './pages/Conferences';
import Workshops from './pages/Workshops';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />}>
          <Route path="webinars" element={<Webinars />} />
          <Route path="conferences" element={<Conferences />} />
          <Route path="workshops" element={<Workshops />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App; 