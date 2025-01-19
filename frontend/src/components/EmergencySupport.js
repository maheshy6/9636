import React, { useState } from 'react';
import './EmergencySupport.css';

const EmergencySupportPage = () => {
  const [isCalling, setIsCalling] = useState(false);

  const handleCallAmbulance = () => {
    setIsCalling(true);
    // Simulate an API call to request ambulance
    setTimeout(() => {
      alert('Ambulance is on the way!');
      setIsCalling(false);
    }, 2000); // Simulating a 2-second delay for ambulance response
  };

  const handleCallMechanic = () => {
    alert('Mechanic is on the way!');
  };

  const handleCallTowTruck = () => {
    alert('Tow truck is on the way!');
  };

  return (
    <div className="emergency-support-page">
      <header className="header">
        <h1>Emergency Support</h1>
        <p>Click below for immediate assistance.</p>
      </header>
      <div className="button-container">
        {/* Ambulance Button */}
        <button
          className="emergency-button ambulance"
          onClick={handleCallAmbulance}
          disabled={isCalling}
        >
          {isCalling ? 'Calling Ambulance...' : 'Call Ambulance'}
        </button>

        {/* Vehicle Breakdown Section */}
        <div className="vehicle-support">
          <h2>Vehicle Breakdown Assistance</h2>
          <button className="emergency-button" onClick={handleCallMechanic}>
            Call Mechanic
          </button>
          <button className="emergency-button" onClick={handleCallTowTruck}>
            Call Tow Truck
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmergencySupportPage;
