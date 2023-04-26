import React from 'react';
import './Home.css'
import Header from '../../Header/Header';
import Post from '../../Post/Post';
import Sidebar from '../../Sidebar/Sidebar';

const Home = () => {
    return (
        <div>
        <Header></Header>
            <div className="home">
                <Post></Post>
                <Sidebar></Sidebar>
            </div>
        </div>
    );
};

export default Home;