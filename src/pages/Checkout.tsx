import React from 'react';
import { Helmet } from 'react-helmet-async';

const Checkout = () => {
  return (
    <>
      <Helmet>
        <title>Checkout - Perfectly Personalized</title>
        <meta name="description" content="Complete your purchase securely." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Checkout</h1>
        <p>Checkout process coming soon...</p>
      </div>
    </>
  );
};

export default Checkout;