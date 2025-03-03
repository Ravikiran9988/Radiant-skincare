import React from "react";

const DashboardCard = ({ title, description, buttonText, onClick }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg text-center">
      <h3 className="text-xl font-bold text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded" onClick={onClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default DashboardCard;
