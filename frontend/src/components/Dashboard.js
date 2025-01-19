// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';  

const Dashboard = () => {
  return (
    <div className="dashboard">
      <center>
        <br/><br/>

        <div>            </div><br/><br/>
        <br/><br/>
        <header>           </header>
        <h1> Welcome to the Traffic Relief Dashboard </h1>
      <p>Your one-stop solution to make the most of your time stuck in traffic.</p>
     <p><Link to="/login" className="Register">Login/Sign Up</Link>
    
      </p>
      </center>

      <div className="features">
        <h2>Explore Features:</h2>
        <div className="grid">
          <div className="grid-item">
            <Link to="/delivery" className="feature-card">
              <h3>Order Food & Essentials</h3>
              <p>Order food, beverages, and essentials while on the go.</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/location" className="feature-card">
              <h3>RealTime location</h3>
              <p>RealTime location</p>
            </Link>
          </div>

          <div className="grid-item">
            <Link to="/transport" className="feature-card">
              <h3>Quick Transport Assistance</h3>
              <p>Book a bike, scooter, or alternative transport to exit traffic.</p>
            </Link>
          </div>
          
          <div className="grid-item">
            <Link to="/emergency" className="feature-card">
              <h3>Emergency Support</h3>
              <p>Get medical assistance or vehicle breakdown help immediately.</p>
            </Link>
          </div>
          <div className="grid-item">
            <Link to="/smart-assistance" className="feature-card">
              <h3>Smart Traffic Assistance</h3>
              <p>Get traffic predictions and route suggestions.</p>
            </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
