import React from 'react';
import './Hotels.css'
import { useLoaderData } from 'react-router-dom';

const Hotels = () => {

    const hotels = useLoaderData();
    console.log(hotels)

    return (
        <div className='cardContainer'>
         {hotels.map(hotel =>  <div className="card">
      <img src={hotel.img} alt='' />
      <div className="card-body">
        <h2>Price: {hotel.price}</h2>
        <button className='btn'>book</button>
      </div>
    </div>)}  
        </div>
    );
};

export default Hotels;