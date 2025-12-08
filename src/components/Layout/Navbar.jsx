import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return <div>
    <nav className="py-5 bg-brand">
      <div className="container flex justify-center gap-10 text-white text-2xl">
        <Link>Batch List</Link>
        <Link>Add Student</Link>
        <Link>Take Attendance</Link>
      </div>
    </nav>
  </div>;
};

export default Navbar;
