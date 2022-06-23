import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  Circle,
  MarkerClusterer,
} from "react-google-maps";

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
    <GoogleMap defaultZoom={14} defaultCenter={props.myPosition}>
      {props.isMarkerShown && (
        <Marker icon={"/images/3mb.jpg"} position={props.myPosition} />
      )}

      <Circle center={props.myPosition} radius={1000} options={closeOptions} />
      <Circle center={props.myPosition} radius={2000} options={middleOptions} />
      <Circle center={props.myPosition} radius={3000} options={farOptions} />

      {/* <MarkerClusterer>
        {(clusterer) => */}
      {props?.houseArr.map((house) => (
        <Marker key={house.lat} position={house} onClick={() => {}} />
      ))}
      {/* }
      </MarkerClusterer> */}
    </GoogleMap>
  ))
);

export default MyMapComponent;
