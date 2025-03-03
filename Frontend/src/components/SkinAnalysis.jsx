import React, { useState } from "react";

const SkinAnalysis = () => {
  const [textAnalysis, setTextAnalysis] = useState("");
  const [image, setImage] = useState(null);

  const handleTextSubmit = (e) => {
    e.preventDefault();
    alert(`Analyzing text: ${textAnalysis}`);
  };

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      alert("Please upload an image.");
      return;
    }
    alert(`Uploading ${image.name} for analysis...`);
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">Skin Analysis</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text-Based Analysis */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Analyze via Text</h3>
          <p className="text-gray-600 mb-4">Describe your skin condition, and our AI will recommend the best skincare routine.</p>
          <form onSubmit={handleTextSubmit}>
            <textarea
              className="w-full p-3 border rounded-lg"
              placeholder="Enter details about your skin (e.g., dry, oily, acne, redness)..."
              value={textAnalysis}
              onChange={(e) => setTextAnalysis(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg">
              Analyze
            </button>
          </form>
        </div>

        {/* Image-Based Analysis */}
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Analyze via Image</h3>
          <p className="text-gray-600 mb-4">Upload a photo of your skin, and our AI will analyze it for issues.</p>
          <form onSubmit={handleImageSubmit}>
            <input type="file" accept="image/*" className="w-full p-2 border rounded-lg" onChange={handleImageUpload} />
            <button type="submit" className="mt-4 w-full bg-pink-500 text-white py-2 rounded-lg">
              Upload & Analyze
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SkinAnalysis;
