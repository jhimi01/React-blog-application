import React, { useContext } from 'react';
import './TopBar.css'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const TopBar = () => {
  const { user, logOut } = useContext(AuthContext)
    

  const logouthandler = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error)
      });
  };
  
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
    <NavLink to='/about' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>Culture</span> </NavLink>
    <NavLink to='/hotels' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>Hotels</span> </NavLink>
    <NavLink to='/contact' className={({ isActive}) => isActive ? "active" : "spanish" }> <span>Contact</span> </NavLink>
    
    {user ?  <Link className="spanish" onClick={logouthandler}>Logout</Link> :
      <Link to='/login' className="spanish"><span>Login</span></Link>
     
     }
    </nav>
 </div>
 <div className="topRight">
 <img style={{marginRight: '15px'}} className='topimg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3jBdL0n-VqTTzcyfwLfRi0xxaK-ZNOc3sqw&usqp=CAU" alt="" />
  {user && <span>{user.email}</span>}
 </div>
            </div>
       
    );
};

export default TopBar;