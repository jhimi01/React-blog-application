import React from 'react';
import './Postcomp.css'
import { Link } from 'react-router-dom';

const Postcomp = ({place}) => {
    const {image, name, details} =place;
    return (
       <Link style={{textDecoration: 'none'}} to={`/post/${place.id}`}>
         <div className='post'>
            <div key={place.id}>
          <img className='postImg' src={image} alt="place img" />
          <h3 className='postTitle'>{name}</h3>
          <p className='postdetails'>{details.substring(0, 200)}...<span style={{fontWeight: 'bold', textDecoration:'underLine'}}>read more</span></p>
        </div>
        </div>
       </Link>
    );
};

export default Postcomp;