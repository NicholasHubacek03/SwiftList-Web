import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Login from './containers/Login/Login'
import React from 'react';
import AboutUs from './containers/AboutUs/AboutUs';
import Home from './containers/Home/HomePage';
import Register from './containers/Register/Register';
import Dashboard from './containers/Dashboard/Dashboard';
import Navbar from './components/Navbar';




class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/HomePage" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Register" element={<Register />} />
            <Route path="/Dashboard" element={<Dashboard />} />
          </Routes>
        </div>
      </Router>
    );
  }
}


export default App