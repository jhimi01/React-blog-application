import React, { useEffect, useState } from "react";
import "./Postview.css";
import { useLoaderData, useParams } from "react-router-dom";

const Postview = () => {
  const { id } = useParams();
  const [places, setPlaces] = useState([]);
  // const [data, setData] = useState({})

  const details = useLoaderData();
  // console.log(details)

  useEffect(() => {
    const singlePlace = details.find((place) => place.id == id);
    setPlaces(singlePlace);
  }, []);
  console.log(places);

  return (
    <div>
      <div className="veiwContainer">
        <img className="viewBanner" src={places.image} alt="" />
        <h1 className="nameview">{places.name}</h1>
      </div>

      <div className="content">
        <p className="details-view">{places.details}</p>
        <p className="Establishment"><strong>Establishment</strong> : {places.Establishment? places.Establishment : 'not found'}</p>
      </div>
    </div>
  );
};

export default Postview;
