import React from "react";

interface ServiceDetailsPageProps {
  orderNumber: string;
  serviceInfo: {
    serviceName: string;
    bikeDetails: string;
    serviceType: string;
  };
  serviceLocation: {
    address: string;
    date: string;
    time: string;
  };
  paymentInfo: {
    status: string;
    amount: string;
  };
}

const ServiceDetailsPage: React.FC<ServiceDetailsPageProps> = ({
  orderNumber,
  serviceInfo,
  paymentInfo,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F4F4FB] text-gray-800">
      <div className="p-6 max-w-md w-full bg-[#FFFFFF] shadow-2xl rounded-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-bold">#{orderNumber}</h2>
          <span className="text-red-600 font-semibold">
            {paymentInfo.status}
          </span>
        </div>
        <hr className="mb-4 border-gray-300" />

        <div className="mb-6 p-6 rounded-2xl bg-[#F5F5F5] shadow-2xl">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src="https://cdn0.iconfinder.com/data/icons/iconshock_brillant_transportation/256/cruise_bike.png"
                alt="Bike Icon"
                className="w-16 h-16 rounded-full"
              />
              <div className="ml-4">
                <h3 className="text-xl font-bold">Bajaj Pulsar NS125 BS4</h3>
                <p className="text-sm text-gray-600">2018</p>
              </div>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/271/271228.png"
              alt="Dropdown Icon"
              className="w-5 h-5"
            />
          </div>
        </div>

        <div className="mb-6 p-6 rounded-2xl bg-[#F5F5F5] shadow-2xl">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">{serviceInfo.serviceType}</h3>
            <span className="text-xl font-bold">App Name</span>
          </div>
          <hr className="mb-4 border-gray-300" />
          <div className="mb-4">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/blueline-navigation/64/map-512.png"
                  alt="Location Icon"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <p className="text-sm font-bold">Service Location</p>
                  <p className="text-xs text-gray-600">
                    22/14, Popular Colony, Mangammanapalya, Bengaluru, Karnataka
                    560068, India
                  </p>
                </div>
              </div>
              <button className="text-xs text-blue-900 underline">Edit</button>
            </div>
            <hr className="mb-4 border-gray-300" />
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center">
                <img
                  src="https://cdn3.iconfinder.com/data/icons/planning-3/64/date-time-calendar-event-booking-1024.png"
                  alt="Slot Icon"
                  className="w-6 h-6 mr-2"
                />
                <div>
                  <p className="text-sm font-bold">
                    Service Between 10:00 AM to 11:00 AM
                  </p>
                  <p className="text-xs ttext-gray-600">June | 21, Sun</p>
                </div>
              </div>
              <button className="text-xs text-blue-900 underline">Edit</button>
            </div>
          </div>
        </div>

        <div className="mb-6 p-6 rounded-2xl bg-[#F5F5F5] shadow-2xl">
          <div className="mb-2">
            <h3 className="text-xl font-bold">Payment Details</h3>
            <hr className="mb-4 border-gray-300" />
          </div>
          <div className="flex justify-between items-center mb-2">
            <div>
              <p className="text-lg font-bold">Total Bill Amount</p>
              <p className="text-xs text-gray-600">*Incl. GST</p>
            </div>
            <p className="text-xl font-bold">₹{paymentInfo.amount}/-</p>
          </div>
          <hr className="mb-4 border-gray-300" />
          <div className="flex flex-col space-y-4">
            <div className="flex items-center">
              <p className="text-sm font-bold mr-2">Payment Status:</p>
              <p className="text-sm text-red-600">{paymentInfo.status}</p>
            </div>
            <p className="text-xs text-gray-600">
              Please pay to assign a Mechanic to your Order
            </p>
            <button className="bg-[#4681f4] text-white px-4 py-2 rounded-lg self-center">
              Pay Now ₹{paymentInfo.amount}/-
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
