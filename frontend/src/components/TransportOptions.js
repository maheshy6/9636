import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import "./styles/traficoption.css";




const App = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [selectedTransport, setSelectedTransport] = useState('');
  const [transportLocation, setTransportLocation] = useState(null);
  const [bookingTime, setBookingTime] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [bookingMessage, setBookingMessage] = useState('');

  // Fetch user's location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
        },
        (error) => {
          console.error('Geolocation error: ', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  }, []);

  // Handle selecting a transport mode
  const handleTransportChange = (event) => {
    setSelectedTransport(event.target.value);
  };

  // Handle map click to set transport request location
  const handleMapClick = (event) => {
    if (selectedTransport) {
      setTransportLocation([event.latlng.lat, event.latlng.lng]);
      setBookingMessage('');
    } else {
      setBookingMessage('Please select a transport first.');
    }
  };

  // Handle booking the transport
  const handleBookTransport = () => {
    if (transportLocation && selectedTransport) {
      const time = new Date().toLocaleTimeString();
      setBookingTime(time);
      setIsBooked(true);
      setBookingMessage(`Transport booked for a ${selectedTransport.charAt(0).toUpperCase() + selectedTransport.slice(1)} at ${time}`);
    } else {
      setBookingMessage('Please select a transport and location before booking.');
    }
  };

  // Define icons for transport modes
  const transportIcons = {
    bike: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Font_Awesome_5_regular_bicycle.svg',
    scooter: 'https://upload.wikimedia.org/wikipedia/commons/4/42/SCOTTER.svg',
    car: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Car_icon.png',
    auto: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Auto-rickshaw_icon.svg',
  };

  return (
    <div className="container">
      <h1>Geo-location and Transport Booking</h1>

      {/* Transport Mode Selection */}
      <div>
        <select onChange={handleTransportChange} value={selectedTransport}>
          <option value="">Select Transport</option>
          <option value="bike">Bike</option>
          <option value="scooter">Scooter</option>
          <option value="car">Car</option>
          <option value="auto">Auto</option>
        </select>
      </div>

      {/* Map container */}
      <div style={{ height: '500px', width: '100%' }}>
        {userLocation ? (
          <MapContainer
            center={userLocation}
            zoom={14}
            style={{ height: '100%', width: '100%' }}
            onClick={handleMapClick}
          >
            {/* TileLayer for base map */}
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />

            {/* Marker for user's location */}
            <Marker
              position={userLocation}
              icon={
                new Icon({
                  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                  iconSize: [25, 41],
                  iconAnchor: [12, 41],
                  popupAnchor: [1, -34],
                })
              }
            >
              <Popup>
                <span>Your location</span>
              </Popup>
            </Marker>

            {/* Marker for transport booking */}
            {transportLocation && (
              <Marker
                position={transportLocation}
                icon={
                  new Icon({
                    iconUrl: transportIcons[selectedTransport],
                    iconSize: [30, 30], // Adjust size
                    iconAnchor: [15, 30], // Adjust anchor
                    popupAnchor: [1, -30],
                  })
                }
              >
                <Popup>
                  <span>{selectedTransport.charAt(0).toUpperCase() + selectedTransport.slice(1)} Booking</span>
                </Popup>
              </Marker>
            )}
          </MapContainer>
        ) : (
          <p>Loading your location...</p>
        )}
      </div>

      {/* Transport Booking Button */}
      <div className="booking-container">
        <button onClick={handleBookTransport}>Book Transport</button>
        {bookingMessage && (
          <div className="booking-time">
            <p>{bookingMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
