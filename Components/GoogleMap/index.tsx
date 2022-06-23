import React from 'react';
import MyMapComponent from "@Components/MyMapComponent";


const index = () => {
  return (
    <div>
      <h1>Google Map</h1>
      <a href="/">
        <button className="text-blue-600 text-xl">Home</button>
      </a>

      <MyMapComponent
        isMarkerShown
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default index;
