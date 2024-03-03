import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/chat" element={<Chat />} /> {/* Updated route for the Chat page */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
