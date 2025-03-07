import React from "react";

const LazyImage = ({ src, alt }) => {
  return <img src={src} alt={alt} loading="lazy" className="w-full rounded-lg shadow-md" />;
};

export default LazyImage;
