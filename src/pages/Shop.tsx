import React from 'react';
import { Helmet } from 'react-helmet-async';

const Shop = () => {
  return (
    <>
      <Helmet>
        <title>Shop - Perfectly Personalized</title>
        <meta name="description" content="Browse our collection of customizable apparel and accessories." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shop</h1>
        <p>Shop page content coming soon...</p>
      </div>
    </>
  );
};

export default Shop;