import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Registration from './Registration';
import ApiDemo from './ApiDemo';
import DisplayEvents from './DisplayEvents';
import './navbar.css';
import PageNotFound from "./PageNotFound";

const MainNavBar = () => {
  return (
    <div>

      <nav className="navbar">
        <div className="navbar-logo">Event Management</div>

        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/registration">Event</Link></li>
          <li><Link to="/display-events">DisplayEvents</Link></li>
          <li><Link to="/apidemo">ApiDemo</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/display-events" element={<DisplayEvents />} />
        <Route path="/apidemo" element={<ApiDemo />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </div>
  );
};

export default MainNavBar;