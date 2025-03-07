import React from "react";

const AIConsultation = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
        AI Skincare Consultation
      </h2>
      <p className="text-gray-700 text-center mb-4">
        Upload your skin image or describe your concerns for AI-powered analysis.
      </p>
      <div className="flex justify-center">
        <button className="px-6 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600">
          Start Analysis
        </button>
      </div>
    </div>
  );
};

export default AIConsultation;
