import React from 'react';
import './TopBar.css'
import { NavLink } from 'react-router-dom';
const TopBar = () => {
    return (
         <div className="top">
 <div className="topLeft">
 <i className="topIcon fa-brands fa-square-facebook"></i>
 <i className="topIcon fa-brands fa-square-twitter"></i>
 <i className="topIcon fa-brands fa-square-instagram"></i>
 <i className="topIcon fa-brands fa-square-pinterest"></i>
 </div>

 <div className="topCenter">
    <nav className="topList">
    <NavLink to='/home' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>Home</span> </NavLink>
    <NavLink to='/about' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>About</span> </NavLink>
    <NavLink to='/hotels' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>Hotels</span> </NavLink>
    <NavLink to='/contact' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>Contact</span> </NavLink>
    <NavLink to='/login' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>Login</span> </NavLink>
    </nav>
 </div>
 <div className="topRight">
 <img className='topimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jBdL0n-VqTTzcyfwLfRi0xxaK-ZNOc3sqw&usqp=CAU" alt="" />
 <i className="topsearchIcon fa-brands fa-searchengin"></i>
 </div>
            </div>
       
    );
};

export default TopBar;