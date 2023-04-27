import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About ME</span>
        <img
          className="sidebarImg"
          src="https://static.vecteezy.com/system/resources/previews/002/098/796/original/welcome-to-bangladesh-postcard-beautiful-landscape-view-with-famous-building-landmark-travel-and-safari-concept-of-asia-around-the-world-illustration-vector.jpg"
          alt=""
        />
        <p>Welcome to our country! We are glad to have you here and hope you enjoy your time experiencing all the wonderful things our nation has to offer.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Category</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-square-facebook"></i>
          <i className="sidebarIcon fa-brands fa-square-twitter"></i>
          <i className="sidebarIcon fa-brands fa-square-instagram"></i>
          <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
