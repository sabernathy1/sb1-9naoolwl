import React from 'react';
import { Helmet } from 'react-helmet-async';

const Gallery = () => {
  return (
    <>
      <Helmet>
        <title>Design Gallery - Perfectly Personalized</title>
        <meta name="description" content="Browse our gallery of custom designs and get inspired." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Design Gallery</h1>
        <p>Gallery content coming soon...</p>
      </div>
    </>
  );
};

export default Gallery;