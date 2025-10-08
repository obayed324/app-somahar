import React from 'react';
import logo from '../../assets/logo.png';
import gitHub from '../../assets/github.png';
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const links = (
        <>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `mr-3 ${isActive ? 'text-primary border-b-2 border-primary' : 'text-black'}`
            }
          >
            Home
          </NavLink>
      
          <NavLink
            to="/app"
            className={({ isActive }) =>
              `mr-3 ${isActive ? 'text-primary border-b-2 border-primary' : 'text-black'}`
            }
          >
            Apps
          </NavLink>
      
          <NavLink
            to="/installed"
            className={({ isActive }) =>
              `mr-3 ${isActive ? 'text-primary border-b-2 border-primary' : 'text-black'}`
            }
          >
            Installation
          </NavLink>
        </>)
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to={"/"}>
                    <img className='w-[40px] h-[40px]' src={logo} alt="Logo" />
                </Link>
                <Link to={"/"} className="btn btn-ghost text-xl">
                    HERO.IO
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

            <div className="navbar-end">
                <a
                    className="flex items-center gap-2 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-4 py-3 rounded-xl hover:opacity-90 transition"
                    href="https://github.com/obayed324" // <- Add your GitHub link here
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img className="w-5 h-5" src={gitHub} alt="GitHub" />
                    <span>Contribute</span>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
