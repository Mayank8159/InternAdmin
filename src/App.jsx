import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Messages from './pages/Messages';
import Profile from './pages/Profile';
import Compile from './pages/Compile';
import React from 'react';

function App(){
  return(
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-100">

        <Navbar />

        <main className="flex-grow p-4">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/compile" element={<Compile />} />
          </Routes>
        </main>

        <Footer />

      </div>
    </Router>
  );
}

export default App;