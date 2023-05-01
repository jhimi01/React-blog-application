// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "./About.css";

const About = () => {
   const alldata = useLoaderData()
  //  console.log(alldata)

  return (
    <div className="main-container">
      <nav className="navbar">
          <ul>
            <li>All</li>
            <li>Sports</li>
            <li>Food</li>
            <li>Music</li>
            <li>Cinema</li>
            <li>Dance</li>
          </ul>
      </nav>
      <div className="data-container">
        {alldata.map(data =>  
        <div key={data.id} className="card">
      <img src={data.image} alt={data.title} />
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p className="card-text">{data.description}</p>
        <button className="btn btn-primary">details</button>
      </div>
    </div>
    )}
      </div>
    </div>
  );
};

export default About;
