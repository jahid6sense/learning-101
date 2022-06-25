import React, { useCallback, useMemo, useRef, useState } from 'react';
import MyMapComponent from "@Components/MyMapComponent";
import { GoogleMap } from 'react-google-maps';
import Places from './places';
type LatLngLiteral = google.maps.LatLngLiteral;
type DirectionsResult = google.maps.DirectionsResult;
type MapOptions = google.maps.MapOptions;

const index = () => {

  const mapRef = useRef<GoogleMap>();
  const [latitude, setLatitude] = useState(23.760397389753912);
  const [longitude, setLongitude] = useState(90.43607491287335);
  const [directions, setDirections] = useState<DirectionsResult>();
  const [office, setOffice] = useState<LatLngLiteral>();
  const [myPosition, setMyPosition] = useState<LatLngLiteral>({ lat: latitude, lng: longitude })

  const generateHouses = (position = myPosition) => {
    const houses = [];
    for (let i = 0; i < 100; i++) {
      const direction = Math.random() < 0.5 ? -50 : 50;
      // const direction = Math.random();
      houses.push({
        lat: position.lat + Math.random() / direction,
        lng: position.lng + Math.random() / direction,
      });
    }
    return houses;
  };

  const houseArr = useMemo(() => generateHouses(myPosition), [myPosition]);
  const onLoad = useCallback((map: any) => (mapRef.current = map), []);

  const fetchDirections = (house: LatLngLiteral) => {
    if (!myPosition) return;

    const service = new google.maps.DirectionsService();
    service.route(
      {
        origin: house,
        destination: myPosition,
        travelMode: google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK" && result) {
          setDirections(result);
        }
      }
    );
  };

  return (
    <div>
      <h1>Google Map</h1>
      <a href="/">
        <button className="text-blue-600 text-xl">Home</button>
      </a>

      <h1>Commute?</h1>
      <h1>{JSON.stringify(myPosition)}</h1>
      
      <Places
        setOffice={(position: any) => {
          setMyPosition(position);
          mapRef.current?.panTo(position);
        }}
      />


      <MyMapComponent
        isMarkerShown
        latitude={latitude}
        longitude={longitude}
        myPosition={myPosition}
        houseArr={houseArr}
        mapRef={mapRef}
        onLoad={onLoad}
        fetchDirections={fetchDirections}
        directions={directions}
        myPositionIcon={"/images/hereMan2.png"}
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.googleMapsKey}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
};

export default index;
