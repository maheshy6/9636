import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
import L from "leaflet";
import axios from "axios";
import "leaflet/dist/leaflet.css";
import "./SmartAssistance.css";

const TrafficAssistance = () => {
  const [location, setLocation] = useState(null);
  const [trafficData, setTrafficData] = useState(null);
  const [suggestions, setSuggestions] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get user location
    navigator.geolocation.getCurrentPosition((pos) => {
      setLocation([pos.coords.latitude, pos.coords.longitude]);
    });
  }, []);

  useEffect(() => {
    if (location) {
      fetchTrafficData();
      fetchRouteSuggestions();
    }
  }, [location]);

  const fetchTrafficData = async () => {
    setLoading(true);
    try {
      // Example API request for traffic data (use actual traffic API)
      const response = await axios.get(`https://api.trafficdata.com/location=${location[0]},${location[1]}`);
      setTrafficData(response.data);
    } catch (error) {
      console.error("Error fetching traffic data", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRouteSuggestions = async () => {
    try {
      // Example API request for route suggestions (use actual routing API)
      const response = await axios.get(`https://api.routingdata.com/suggest-routes?origin=${location[0]},${location[1]}`);
      setSuggestions(response.data.suggestions);
      setRoutes(response.data.routes);
    } catch (error) {
      console.error("Error fetching route suggestions", error);
    }
  };

  return (
    <div className="traffic-assistance">
      <h2>Traffic Assistance</h2>
      {loading ? (
        <div>Loading traffic data...</div>
      ) : (
        <>
          {location && (
            <MapContainer center={location} zoom={13} style={{ height: "400px", width: "100%" }}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={location}>
                <Popup>Your location</Popup>
              </Marker>
              {trafficData && (
                <Polyline
                  positions={trafficData.trafficPoints} // Sample data for traffic points
                  color="red"
                  weight={4}
                />
              )}
            </MapContainer>
          )}

          <div className="route-suggestions">
            <h3>Route Suggestions</h3>
            {suggestions.length > 0 ? (
              suggestions.map((suggestion, index) => (
                <div key={index} className="suggestion-card">
                  <h4>{suggestion.name}</h4>
                  <p>{suggestion.description}</p>
                  <p>Time: {suggestion.time}</p>
                </div>
              ))
            ) : (
              <p>No suggestions available at the moment.</p>
            )}
          </div>

          <div className="alternate-routes">
            <h3>Alternate Routes</h3>
            {routes.length > 0 ? (
              routes.map((route, index) => (
                <div key={index} className="route-card">
                  <h4>Route {index + 1}</h4>
                  <p>{route.description}</p>
                  <p>Distance: {route.distance} km</p>
                  <p>Time: {route.time} mins</p>
                </div>
              ))
            ) : (
              <p>No alternate routes found.</p>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default TrafficAssistance;
