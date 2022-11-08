import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../../../src/assets/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./Header.css";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handelLogOut = () => {
    logOut().catch((error) => console.error(error));
  };

  const menuItem = (
    <>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/reviews">Reviews</Link>
      </li>
    </>
  );
  return (
    <div className="">
      <div className="navbar bg-black  py-5 font-mono font-bold text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow text-black border border-black  rounded-box w-52"
            >
              {menuItem}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            <div>
              <img src={logo} className="w-10 h-5" alt="" />
            </div>
            <p>
              <Link to="/">
                Wild<span className="text-sm">Rabbit</span>
              </Link>
            </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItem}</ul>
        </div>
        <div className="navbar-end">
          <>
            {user?.email ? (
              <>
                <Link to="/login" onClick={handelLogOut} className="btn mr-3">
                  Log Out
                </Link>
                <button>
                  <img
                    className="h-6 rounded-lg"
                    src={user?.photoURL}
                    title={user?.displayName}
                    alt=""
                  />
                </button>
              </>
            ) : (
              <Link to="/login" className="btn mr-3">
                Login
              </Link>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default Header;
