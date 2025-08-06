import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HideRoute from './components/HideRoute';
import Loader from './components/Loader';
import Quest from './pages/Quest';
import About from './pages/About';
import Login from './pages/Login.jsx';
import NotFoundPage from './pages/NotFound';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ActiveHackathons from './pages/ActiveHackathons';
import ExpiredHackathons from './pages/ExpiredHackathons';
import Dashboard from './pages/dashboard.jsx';
import Signup from './pages/Signup.jsx';
import Verification from './components/Verification.jsx';
import ResetPassword from './components/ResetPassword.jsx';
import RouteHandler from './components/RouteHandler.jsx'
import { ToastContainer } from 'react-toastify';
function App() {


  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authWait, setAuthWait] = useState(false)

  const AuthenticateRoute = ({ element }) => {
    if (!authWait) {
      return null
    }

    return isAuthenticated ? element : <Navigate to="/account/login" />
  }

  return (
    <>
      <Router>
        <RouteHandler setIsAuthenticated={setIsAuthenticated} setAuthWait={setAuthWait} />
        <Loader />
        <HideRoute>
          <Navbar />
        </HideRoute>
        <ToastContainer />
        <Routes>

          <Route path="/" element={<Home />} caseSensitive />
          <Route path="/activehackathons" element={<ActiveHackathons/>} caseSensitive></Route>
          <Route path="/expiredhackathons" element={<ExpiredHackathons/>} caseSensitive></Route>
          <Route path="/quest" element={<Quest />} caseSensitive />
          <Route path="/about" element={<About />} caseSensitive />
          {/* <Route path="/login" element={<GoogleAuthWrapper />} caseSensitive /> */}
          <Route path="/account/login" element={<Login />} caseSensitive></Route>
          <Route path="/account/signup" element={<Signup />} caseSensitive></Route>
          <Route path="/account/verify-email" element={<Verification />} caseSensitive></Route>
          <Route path="/account/reset-password" element={<ResetPassword />} caseSensitive></Route>
          <Route path="/dashboard" element={<AuthenticateRoute element={<Dashboard />}/>} caseSensitive />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>

        <HideRoute>
          <Footer />
        </HideRoute>
      </Router>
    </>
  );
}

export default App;