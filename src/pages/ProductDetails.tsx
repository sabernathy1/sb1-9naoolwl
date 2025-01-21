import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const ProductDetails = () => {
  const { id } = useParams();

  return (
    <>
      <Helmet>
        <title>Product Details - Perfectly Personalized</title>
        <meta name="description" content="View product details and customize your order." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Product Details</h1>
        <p>Product ID: {id}</p>
        <p>Product details coming soon...</p>
      </div>
    </>
  );
};

export default ProductDetails;