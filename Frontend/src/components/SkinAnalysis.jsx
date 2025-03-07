import React, { useState } from "react";

const SkinAnalysis = () => {
  const [textAnalysis, setTextAnalysis] = useState("");
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleTextSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      console.log("Analyzing text:", textAnalysis);
      // TODO: Replace with API call (fetch or axios)
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
    } catch (err) {
      setError("Failed to analyze text. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setError("");
      console.log("Image selected:", file.name);
    } else {
      setError("Invalid file. Please upload an image.");
    }
  };

  const handleImageSubmit = async (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please upload an image.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      console.log("Uploading image:", image.name);
      // TODO: Replace with actual image upload API
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating API call
    } catch (err) {
      setError("Image upload failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">
        AI Skin Analysis
      </h2>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Text Analysis */}
        <form onSubmit={handleTextSubmit} className="bg-white p-6 rounded shadow">
          <label className="block text-gray-700">Describe your skin issues:</label>
          <textarea
            value={textAnalysis}
            onChange={(e) => setTextAnalysis(e.target.value)}
            className="w-full p-2 border rounded mt-2"
            required
          />
          <button type="submit" className="mt-4 bg-pink-500 text-white px-4 py-2 rounded" disabled={loading}>
            {loading ? "Analyzing..." : "Analyze Text"}
          </button>
        </form>

        {/* Image Analysis */}
        <form onSubmit={handleImageSubmit} className="bg-white p-6 rounded shadow">
          <label className="block text-gray-700">Upload a skin image:</label>
          <input type="file" accept="image/*" onChange={handleImageUpload} className="mt-2" required />
          {image && <p className="mt-2 text-sm text-gray-500">Selected: {image.name}</p>}
          <button type="submit" className="mt-4 bg-pink-500 text-white px-4 py-2 rounded" disabled={loading}>
            {loading ? "Uploading..." : "Upload & Analyze"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SkinAnalysis;
