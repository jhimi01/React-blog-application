import React from 'react';
import './Hotels.css'
import { useLoaderData } from 'react-router-dom';

const Hotels = () => {

    const hotels = useLoaderData();
    console.log(hotels)

    return (
        <div className='cardContainer'>
         {hotels.map(hotel =>  <div key={hotel.id} className="card">
      <img src={hotel.img} alt='' />
      <div className="card-body">
        <h2>Price: {hotel.price}</h2>
        <p>For : {hotel.duration}</p>
        <button className='btn'>Details</button>
      </div>
    </div>)}  
        </div>
    );
};

export default Hotels;