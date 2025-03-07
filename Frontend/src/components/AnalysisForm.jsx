import React, { useState } from "react";

const AnalysisForm = () => {
  const [skinDescription, setSkinDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting skin description:", skinDescription);
    // TODO: Send data to backend API
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      console.log("Image selected:", file.name);
    }
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image.");
      return;
    }
    console.log("Uploading image:", image.name);
    // TODO: Upload image to backend API
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
        Skin Analysis
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Analysis */}
        <form onSubmit={handleTextSubmit} className="bg-white p-6 rounded shadow">
          <label className="block text-gray-700">Describe your skin concerns:</label>
          <textarea
            value={skinDescription}
            onChange={(e) => setSkinDescription(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <button type="submit" className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">
            Analyze
          </button>
        </form>

        {/* Image Analysis */}
        <form onSubmit={handleImageSubmit} className="bg-white p-6 rounded shadow">
          <label className="block text-gray-700">Upload a skin image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" required />
          {image && <p className="mt-2 text-sm text-gray-500">Selected: {image.name}</p>}
          <button type="submit" className="mt-4 bg-pink-500 text-white px-4 py-2 rounded">
            Upload & Analyze
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnalysisForm;
