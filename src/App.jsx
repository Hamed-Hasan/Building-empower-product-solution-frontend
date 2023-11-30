import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import { Table } from '@chakra-ui/react';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/table" element={<Table />} />
      </Routes>
    </Router>
  );
}

export default App;
