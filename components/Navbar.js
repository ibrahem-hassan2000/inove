import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/">Courses</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
