import React from 'react';

interface ServiceManDetails {
  name: string;
  rating: number;
  experience: string;
}

interface TrackServicePageProps {
  serviceMan: ServiceManDetails;
}

const TrackServicePage: React.FC<TrackServicePageProps> = ({ serviceMan }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow relative">
        <div className="absolute inset-0 bg-gray-200 rounded"></div> {/* Placeholder for Google Map */}
      </div>
      
      <div className="bg-white p-4 border-t shadow-lg">
        <h2 className="text-xl font-bold text-gray-800">Service Man Details</h2>
        <div className="mt-4">
          <p className="text-gray-700"><strong>Name:</strong> {serviceMan.name}</p>
          <p className="text-gray-700"><strong>Rating:</strong> {serviceMan.rating} / 5</p>
          <p className="text-gray-700"><strong>Experience:</strong> {serviceMan.experience}</p>
        </div>
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">Contact Service Man</button>
      </div>
    </div>
  );
}

export default TrackServicePage;
