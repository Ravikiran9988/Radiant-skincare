import React from "react";
import Navbar from "../components/Navbar";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-6xl mx-auto mt-8 p-4">
        <h2 className="text-3xl font-semibold text-gray-800">Welcome, User!</h2>
        <p className="text-gray-600">Your personalized skincare recommendations are ready.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <DashboardCard
            title="AI Skin Analysis"
            description="Your skin type: Oily"
            buttonText="View Details"
            onClick={() => alert("AI Analysis Details")}
          />
          <DashboardCard
            title="Recommended Products"
            description="View products tailored for your skin."
            buttonText="Shop Now"
            onClick={() => alert("Redirecting to shop")}
          />
          <DashboardCard
            title="My Orders"
            description="Track your past skincare orders."
            buttonText="View Orders"
            onClick={() => alert("Viewing Orders")}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
