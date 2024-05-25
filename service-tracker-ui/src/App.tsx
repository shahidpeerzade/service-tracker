import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServiceDetailsPage from './components/ServiceDetailsPage';
import TrackServicePage from './components/TrackServicePage';

const App: React.FC = () => {
  const serviceDetails = {
    orderNumber: 'ORD123456',
    serviceInfo: {
      serviceName: 'Bike Repair Service',
      bikeDetails: 'Pulsar NS200 BS4',
      bikeYear: '2018',
      serviceType: 'Full Service'
    },
    serviceLocation: {
      address: '123 Main St, Springfield',
      date: '2024-05-24',
      time: '10:00 AM'
    },
    paymentInfo: {
      status: 'Pending',
      amount: '699.00',
    }
  };

  const serviceManDetails = {
    name: 'John Doe',
    rating: 4.5,
    experience: '5 years'
  };

  return (
    <Router>
      <Routes>
        <Route path="/service-details" element={<ServiceDetailsPage {...serviceDetails} />} />
        <Route path="/track-service" element={<TrackServicePage serviceMan={serviceManDetails} />} />
      </Routes>
    </Router>
  );
}

export default App;
