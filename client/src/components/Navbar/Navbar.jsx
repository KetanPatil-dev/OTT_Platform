import React from "react";
import "./Navbar.css";
import logo from "../../assets/cloneflix.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const navigate=useNavigate()
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login")
  };
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="netflix logo" />
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Movies</li>
          <li>Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right"></div>
      <img src={search_icon} alt="search_icon" className="icons" />
      <p className="para">Children</p>
      <img src={bell_icon} alt="search_icon" className="icons" />
      <div className="navbar-profile">
        <img src={profile_img} alt="search_icon" className="profile " />
        <img src={caret_icon} alt="search_icon" />
        <div className="dropdown">
          <p onClick={logout}>Sign out of CloneFlix</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
