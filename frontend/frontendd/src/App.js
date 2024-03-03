// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar'; // Import the Navbar component
import LoginPage from './pages/LoginPage';
import Chat from './pages/Chat';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div>
        <Navbar /> {/* Add the Navbar component here */}
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<Chat />} /> {/* Updated route for the Chat page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
