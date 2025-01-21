import React from 'react';
import { Helmet } from 'react-helmet-async';

const Cart = () => {
  return (
    <>
      <Helmet>
        <title>Shopping Cart - Perfectly Personalized</title>
        <meta name="description" content="Review and manage your shopping cart items." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
        <p>Cart content coming soon...</p>
      </div>
    </>
  );
};

export default Cart;