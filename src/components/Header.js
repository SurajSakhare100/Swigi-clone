import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure this CSS file exists and is styled properly

function Header({ toggleSidebar }) {
  return (
    <header>
      <div className="nav-bar clearfix">
        <div className="top-bar">
          <div className="logo">
            <a href="/">
              <img src="/images/Swiggy_logo_bml6he.png" alt="Swiggy Logo" />
            </a>
          </div>
          <div className="nav-options">
            <div className="font">
              <a href="./components">
                <h4>Swiggy Corporate</h4>
              </a>
            </div>
            <div className="font">
              <a href="https://example.com">
                <h4>Partner with us</h4>
              </a>
            </div>
            <div className="get-app">
              <a href="https://example.com">
                Get the App <ArrowUpRight />
              </a>
            </div>
            <div className="sign-in" onClick={toggleSidebar}>
              <Link to="/signup">Sign in</Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
