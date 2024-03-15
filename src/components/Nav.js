import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navi = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <Link className="navbar-brand" to="/">CultivConnect</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/schemes">Schemes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/modern">Modern</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/news">News</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/weather">Weather</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recommend">Crop Recommendation</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Community</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/auth">Signup/Login</Link>
          </li>
        </ul>
        <Outlet/>
      </div>
    </nav>
  );
}

export default Navi;
