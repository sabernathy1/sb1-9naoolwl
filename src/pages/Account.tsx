import React from 'react';
import { Helmet } from 'react-helmet-async';

const Account = () => {
  return (
    <>
      <Helmet>
        <title>My Account - Perfectly Personalized</title>
        <meta name="description" content="Manage your account settings and view order history." />
      </Helmet>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">My Account</h1>
        <p>Account management coming soon...</p>
      </div>
    </>
  );
};

export default Account;