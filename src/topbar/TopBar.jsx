import React from 'react';
import './TopBar.css'
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
    <ul className="topList">
        <li className="topListItem">Home</li>
        <li className="topListItem">About</li>
        <li className="topListItem">Contact</li>
        <li className="topListItem">Write</li>
        <li className="topListItem">LogOut</li>
    </ul>
 </div>
 <div className="topRight">
 <img className='topimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jBdL0n-VqTTzcyfwLfRi0xxaK-ZNOc3sqw&usqp=CAU" alt="" />
 <i className="topsearchIcon fa-brands fa-searchengin"></i>
 </div>
            </div>
       
    );
};

export default TopBar;