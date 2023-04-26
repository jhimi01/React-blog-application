import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className="headerTitles">
                <span className='headerTitlesm'>React & Node</span>
                <span className='headerTitlelg'>Blog</span>
            </div>
            <img className='headerImg' src="https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80" alt="" />
        </div>
    );
};

export default Header;