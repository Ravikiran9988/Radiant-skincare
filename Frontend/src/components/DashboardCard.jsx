import React from "react";

const DashboardCard = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg text-center hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
      <button
        className="mt-4 bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-300"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default DashboardCard;
