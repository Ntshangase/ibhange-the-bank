import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="links">
        <a href="/">Home</a>
        <a href="/home">Homepage</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
