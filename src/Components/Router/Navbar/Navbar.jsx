
import React from 'react';
import { NavLink } from 'react-router';



const Navbar = () => {
  

    const links = [
  <NavLink
    to="/"
    className={({ isActive }) =>
      isActive ? "bg-red-500 text-white px-2 rounded" : "hover:bg-blue-400 px-2"
    }
  >
    Home
  </NavLink>,

  <NavLink
    to="/aboutUs"
    className={({ isActive }) =>
      isActive ? "bg-red-500 text-white px-2 rounded" : "hover:bg-blue-400 px-2"
    }
  >
    About US
  </NavLink>,

  <NavLink
    to="/allProperties"
    className={({ isActive }) =>
      isActive ? "bg-red-500 text-white px-2 rounded" : "hover:bg-blue-400 px-2"
    }
  >
    All Properties
  </NavLink>,

  <NavLink
    to="/addProperties"
    className={({ isActive }) =>
      isActive ? "bg-red-500 text-white px-2 rounded" : "hover:bg-blue-400 px-2"
    }
  >
    Add Properties
  </NavLink>,

  <NavLink
    to="/myProperties"
    className={({ isActive }) =>
      isActive ? "bg-red-500 text-white px-2 rounded" : "hover:bg-blue-400 px-2"
    }
  >
    My Properties
  </NavLink>,

  <NavLink
    to="/myRatings"
    className={({ isActive }) =>
      isActive ? "bg-red-500 text-white px-2 rounded" : "hover:bg-blue-400 px-2"
    }
  >
    My Ratings
  </NavLink>
];
    return (
        <div className='bg-[#23282d] text-white '>
    <div className="navbar  shadow-sm ">
        {/* <div >{user && user.email} </div> */}
  <div className="navbar-start  ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu hover:bg-blue-400 menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className='bg-[#23282d]  ' >{links}</li>
      </ul>
    </div>
    <a className=" btn-ghost text-2xl font-bold  color bg-clip-text ">HomeNest</a>
  </div>
  <div className="navbar-center hidden lg:flex  ">
    <ul className="menu menu-horizontal px-1 flex ">
      <li className='flex-row '>{links}</li>
    </ul>
  </div>
  <div className="navbar-end flex flex-col gap-2 md:flex-row">
    <button className='border-2 px-3 text-xl font-semibold'>Login</button>

    <button className='border-2 px-3 text-xl font-semibold'>Logout</button>
  </div>
</div>


        </div>
    );
};

export default Navbar;