import React, { useEffect } from 'react';
import './Post.css'
import { useState } from 'react';
import Postcomp from '../componentPost/Postcomp';

const Post = () => {
    const [places, setPlaces] = useState([])
    const [displayedPlaces, setDisplayedPlaces] = useState(4);
    useEffect(()=>{
        fetch('http://localhost:5000/places')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])


    const handleSeeMore = () => {
        setDisplayedPlaces(places.length);
      };

      const handleSeeLess = () => {
        setDisplayedPlaces(4);
      };

    return (
        <div className='post'>
            <div className='container-post'>
            {places.slice(0, displayedPlaces).map((place) => (
          <Postcomp key={place.id} place={place}></Postcomp>
        ))}
            </div>
            {displayedPlaces < places.length ?
        <button className='seemorebtn' onClick={handleSeeMore}>See more</button>
        : <button className='seemorebtn' onClick={handleSeeLess}>see less</button>
      }
        </div>
    );
};

export default Post;