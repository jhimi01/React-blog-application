// import React, { useState } from "react";
// import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import "./About.css";
import { useState } from "react";

const About = () => {
   const alldata = useLoaderData()
  const [selectCategory, setSelectCategory] = useState('All')

  const handleClick = (category) =>{
    setSelectCategory(category)
  }

  const filterData = selectCategory === 'All'? alldata : alldata.filter(data => data.category === selectCategory)


  return (
    <div className="main-container">
      <nav className="navbar">
      <ul>
          <li tabIndex="0" onClick={() => handleClick("All")}>All</li>
          <li tabIndex="0" onClick={() => handleClick("food")}>Food</li>
          <li tabIndex="0" onClick={() => handleClick("cinema")}>Cinema</li>
          <li tabIndex="0" onClick={() => handleClick("sport")}>Sports</li>
          <li tabIndex="0" onClick={() => handleClick("music")}>Music</li>
          <li tabIndex="0" onClick={() => handleClick("dance")}>Dance</li>
        </ul>
      </nav>
      <div className="data-container">
        {filterData.map(data =>  
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
