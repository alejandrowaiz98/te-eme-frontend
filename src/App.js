import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import GetRandomCard from './components/GetRandomCard';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/GetRandomCard" element={<GetRandomCard />} />
      </Routes>
    </Router>
  );
}

export default App;
