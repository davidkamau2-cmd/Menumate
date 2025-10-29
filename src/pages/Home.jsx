import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <h1 classname='home-title' >Welcome to MenuMate</h1>
      <p>Your ultimate companion for exploring delicious meals!</p>
      
      <div class name="card-container"></div>
        <div className="home-card">
            <h2>Already have n account?</h2>
            <p>Log in to access your cart, orders, and personalized recommendations.</p>
                    <div className="home-button">
                      <link to="/login" className="home-btn login-btn">  
                        Log In
                      </link>
                      <span>or</span>
                        <link to="/signup" className="home-btn signup-link">
                        sign up
                        </link>
                    </div>

          <div className="home-card">
          <h2>New to MenuMate?</h2>
          <p>Create an account and start exploring our menu.</p>
          <Link to="/signup" className="home-btn signup-btn">
            Sign Up
          </Link>
        </div>
        
        <div className="home-card">
          <h2>Just Hungry?</h2>
          <p>Browse our menu without signing in.</p>
          <Link to="/menu" className="home-btn guest-btn">
            Continue without account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
