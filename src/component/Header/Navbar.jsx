import React from 'react';
import logo from '../../assets/logo.png'
import gitHub from '../../assets/github.png';
import { NavLink } from 'react-router';
const Navbar = () => {
    const links = <>
        
        <NavLink to='/' className={'mr-3'}>Home</NavLink>
        <NavLink to='/app' className={'mr-3'}>Apps</NavLink>
        <NavLink to='/' className={'mr-3'}>Installation</NavLink>  
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {
                            links
                        }
                    </ul>
                </div>
                <img className=' w-[40px] h-[40px]' src={logo} alt="" />
                <a className="btn btn-ghost text-xl">HERO.IO</a>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end">
                <a
                    className="flex items-center gap-2 bg-[linear-gradient(125.07deg,rgba(99,46,227,1),rgba(159,98,242,1)_100%)] text-white px-4 py-3 rounded-xl"
                    href="#"
                >
                    <img className="w-5 h-5" src={gitHub} alt="GitHub" />
                    <span>Contribute</span>
                </a>

            </div>
        </div>
    );
};

export default Navbar;