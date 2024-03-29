import React from 'react';
import { useNavigate } from "react-router";
import { useUserAuth } from "../../context/UserAuthContext";

const Header = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate(); // Include useNavigate hook
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="navbar bg-base-100 border fixed top-0 left-0 right-0 z-50">
      <div className="flex-1">
        {/* Conditional rendering for the menu */}
        {user && (
          <div className="conditional-menu md:hidden"> {/* Display only on small screens */}
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Dashboard</a></li>
                <li><a>Contact</a></li>
                {/* Other list items */}
                <li><a>Reports</a></li>
              </ul>
            </div>
          </div>
        )}
        <img className='w-12' src="src\components\images\Electronic Vehicle Logo.png" alt="" />
      </div>

      {/* Other header content */}
      {user && (
        <div className="flex-none">
          <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-60 md:w-auto" />
          </div>
        </div>
      )}

      {/* Dropdown for user settings */}
      {user && (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-8 rounded-full">
              <img src="src\components\images\human.png" alt="" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <a className="justify-between">
                Profile
              </a>
            </li>
            <li><a>Settings</a></li>
            {/* Logout */}
            <li><a onClick={handleLogout}>Logout</a></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Header;
