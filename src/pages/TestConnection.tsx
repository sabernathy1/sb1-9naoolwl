import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

const TestConnection = () => {
  const [status, setStatus] = useState<'testing' | 'success' | 'error'>('testing');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const testConnection = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('count')
          .single();

        if (error) throw error;
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      }
    };

    testConnection();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Supabase Connection Test</h2>
        
        {status === 'testing' && (
          <div className="text-blue-600">
            Testing connection to Supabase...
          </div>
        )}
        
        {status === 'success' && (
          <div className="text-green-600">
            ✓ Successfully connected to Supabase!
          </div>
        )}
        
        {status === 'error' && (
          <div>
            <div className="text-red-600 font-semibold mb-2">
              ✗ Connection failed
            </div>
            <div className="text-gray-600 text-sm bg-gray-50 p-4 rounded">
              Error: {error}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TestConnection;