import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-5">
        <p>Portfoilo</p>

        <ul className="flex justify-between w-[30%] ">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar