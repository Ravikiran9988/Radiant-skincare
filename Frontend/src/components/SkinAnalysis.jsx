import React, { useState, Suspense } from "react";

const LazyImage = React.lazy(() => import("./LazyImage"));

const SkinAnalysis = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">AI Skin Analysis</h2>
      <Suspense fallback={<p className="text-gray-500 text-center">Loading image...</p>}>
        <LazyImage src="/public/sample-skin.jpg" alt="Skin Analysis Example" />
      </Suspense>
    </div>
  );
};

export default SkinAnalysis;
