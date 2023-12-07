import React from "react";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="Navbar-1">
      <div className="Navbar-2-1">
        <div className="Navbar-3-1">
          <Link href="/">RHS Course Ranker</Link>
        </div>
      </div>
      <div className="Navbar-2-2">
        <div className="Navbar-3-2">
          <Link href="/sign-in">Log in</Link>
        </div>
        <div className="Navbar-3-2">
          <Link href="/sign-up">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
