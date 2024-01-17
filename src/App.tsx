import './App.css'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './containers/Login/Login'
import React from 'react';
import { AboutUs, Home } from './components/Pages';




class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <Link to="/">HomePage</Link>
            <Link to="/Login">Login</Link>
            <Link to="/AboutUs">AboutUs</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App