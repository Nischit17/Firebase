import React from 'react';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-400">
      <div className="bg-white rounded-lg p-8 shadow-md text-center">
        <h1 className="text-4xl text-red-500 font-extrabold mb-4">Oops, something went wrong!</h1>
        <p className="text-gray-700 text-lg mb-4">I apologize for the inconvenience. Please try again later.</p>
        <button
          className="bg-red-500 text-white hover:bg-red-600 py-2 px-4 rounded focus:outline-none"
          onClick={() => window.location.reload()}
        >
          Refresh Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
