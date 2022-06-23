import React, { useMemo, useState } from 'react';
import MyMapComponent from "@Components/MyMapComponent";


const index = () => {

  const [latitude, setLatitude] = useState(23.760397389753912);
  const [longitude, setLongitude] = useState(90.43607491287335);

  const [myPosition, setMyPosition] = useState({ lat: latitude, lng: longitude })

  const generateHouses = (position = myPosition) => {
    const houses = [];
    for (let i = 0; i < 100; i++) {
      const direction = Math.random() < 0.5 ? -50 : 50;
      houses.push({
        lat: position.lat + Math.random() / direction,
        lng: position.lng + Math.random() / direction,
      });
    }
    return houses;
  };

  const houseArr = useMemo(() => generateHouses(myPosition), [myPosition]);


  return (
    <div>
      <h1>Google Map</h1>
      <a href="/">
        <button className="text-blue-600 text-xl">Home</button>
      </a>

      <MyMapComponent
        isMarkerShown
        latitude={latitude}
        longitude={longitude}
        myPosition={myPosition}
        houseArr={houseArr}
        myPositionIcon={"/images/3mb.jpg"}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default index;
