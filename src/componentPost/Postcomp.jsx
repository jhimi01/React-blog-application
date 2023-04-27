import React from 'react';
import './Postcomp.css'

const Postcomp = ({place}) => {
    const {image, name, details} =place;
    return (
        <div className='post'>
            <div key={place.id}>
          <img className='postImg' src={image} alt="" />
          <h3 className='postTitle'>{name}</h3>
          <p className='postdetails'>{details}</p>
        </div>
        </div>
    );
};

export default Postcomp;