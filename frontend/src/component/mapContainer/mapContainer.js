import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import './mapContainer.css';

const MapContainer = () => {
  const points = [
    {
      name: "Location 1",
      location: {
        lat: 34.72986944444444,
        lng: 10.642122222222223,
      },
    },
    {
      name: "Location 2",
      location: {
        lat: 34.82986944444444,
        lng: 10.642122222222223,
      },
    },
    {
      name: "Location 3",
      location: {
        lat: 34.62986944444444,
        lng: 10.642122222222223,
      },
    },
    {
      name: "Location 4",
      location: {
        lat: 34.52986944444444,
        lng: 10.642122222222223,
      },
    },
  ];

  const mapStyles = {
    height: "400px",
    width: "100%",
  };

  const defaultCenter = {
    lat: 34.72986944444444,
        lng: 10.642122222222223,
  };

  return (
    <div className="googlemap">
      <LoadScript googleMapsApiKey="AIzaSyARVZnHOEfnLogWxs9tKH-qa78pNjxmAE4">
        <GoogleMap mapContainerStyle={mapStyles} zoom={20} center={defaultCenter}>
          {points.map((point) => (
            <Marker key={point.name} position={point.location} />
          ))}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default MapContainer;

