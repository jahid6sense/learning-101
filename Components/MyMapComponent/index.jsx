import {useState} from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  DirectionsRenderer,
  StreetViewPanorama,
  OverlayView,
  InfoWindow,
} from "react-google-maps";
import StandaloneSearchBox from "react-google-maps/lib/components/places/StandaloneSearchBox";
const {
  MarkerClusterer,
} = require("react-google-maps/lib/components/addons/MarkerClusterer");
const {
  SearchBox,
} = require("react-google-maps/lib/components/places/SearchBox");

const defaultOptions = {
  strokeOpacity: 0.5,
  strokeWeight: 2,
  clickable: false,
  draggable: false,
  editable: false,
  visible: true,
};
const closeOptions = {
  ...defaultOptions,
  zIndex: 3,
  fillOpacity: 0.05,
  strokeColor: "#8BC34A",
  fillColor: "#8BC34A",
};
const middleOptions = {
  ...defaultOptions,
  zIndex: 2,
  fillOpacity: 0.05,
  strokeColor: "#FBC02D",
  fillColor: "#FBC02D",
};
const farOptions = {
  ...defaultOptions,
  zIndex: 1,
  fillOpacity: 0.05,
  strokeColor: "#FF5252",
  fillColor: "#FF5252",
};


const MyMapComponent = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      defaultZoom={14}
      defaultCenter={props.myPosition}
      ref={props.mapRef}
      onLoad={props.onLoad}
    >
      {props.directions && (
        <DirectionsRenderer
          directions={props.directions}
          options={{
            polylineOptions: {
              zIndex: 50,
              strokeColor: "#1976D2",
              strokeWeight: 5,
            },
          }}
        />
      )}

      {props.isMarkerShown && (
        <Marker icon={props.myPositionIcon} position={props.myPosition} />
      )}

      <Circle center={props.myPosition} radius={1000} options={closeOptions} />
      <Circle center={props.myPosition} radius={2000} options={middleOptions} />
      <Circle center={props.myPosition} radius={3000} options={farOptions} />

      <MarkerClusterer>
        {props?.houseArr.map((house) => (
          <Marker
            key={house.lat}
            position={house}
            onClick={() => {
              props.fetchDirections(house);
            }}
          />
        ))}
      </MarkerClusterer>
    </GoogleMap>
  ))
);

export default MyMapComponent;
