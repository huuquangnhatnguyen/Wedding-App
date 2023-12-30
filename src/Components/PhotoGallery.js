// PhotoGallery.js

import React, { useState } from 'react';

const PhotoGallery = () => {
  const newestPhotos = [
    { id: 1, src: '/images/photo1.jpg', alt: 'Photo 1' },
    { id: 2, src: '/images/photo2.jpg', alt: 'Photo 2' },
    { id: 3, src: '/images/photo3.jpg', alt: 'Photo 3' },
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % newestPhotos.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + newestPhotos.length) % newestPhotos.length);
  };

  return (
    <div className="photoGallery">
      <h2>Newest Photos</h2>
      <div className="sliderContainer">
        <img
          src={process.env.PUBLIC_URL + newestPhotos[currentImageIndex].src}
          alt={newestPhotos[currentImageIndex].alt}
          className="sliderImage"
        />
        <div className="sliderButtons">
          <button onClick={handlePrevImage}>&lt;</button>
          <button onClick={handleNextImage}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
