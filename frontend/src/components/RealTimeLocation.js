import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "./styles/RealTimeLocation.css";

// Set a custom icon for the marker
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // Replace with any marker image URL
  iconSize: [38, 38],
});

const RealTimeLocation = () => {
  const [location, setLocation] = useState({ lat: 51.505, lng: -0.09 }); // Default to London
  const [hasLocation, setHasLocation] = useState(false);

  useEffect(() => {
    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            });
            setHasLocation(true);
          },
          () => {
            alert("Unable to fetch location. Ensure location services are enabled.");
          }
        );
      } else {
        alert("Geolocation is not supported by your browser.");
      }
    };

    updateLocation();
    const interval = setInterval(updateLocation, 5000); // Update every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="map-container">
      <h2>Real-Time Location Map</h2>
      {hasLocation ? (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={15}
          style={{ height: "400px", width: "100%" }}
        >
          {/* Add a tile layer for the map */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Add a marker at the user's location */}
          <Marker position={[location.lat, location.lng]} icon={customIcon}>
            <Popup>You are here</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Fetching your location...</p>
      )}
    </div>
  );
};

export default RealTimeLocation;
