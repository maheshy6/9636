// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Dashboard from './components/Dashboard';
import EmergencySupport from './components/EmergencySupport';
import SmartAssistance from './components/SmartAssistance';
import DeliveryServices from './components/DeliveryServices'; // Assuming you have this component
import TransportOptions from './components/TransportOptions'; // Assuming you have this component
import LoginPage from './components/Login';
import RealTimeLocation from "./components/RealTimeLocation";

const App = () => (
  <div className="app">
     
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/delivery" element={<DeliveryServices />} />

      <Route path="/location" element={<RealTimeLocation />} />
      <Route path="/transport" element={<TransportOptions />} />
      <Route path="/emergency" element={<EmergencySupport />} />
      <Route path="/smart-assistance" element={<SmartAssistance />} />

    </Routes>
  </div>
);

export default App;
