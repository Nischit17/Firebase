import React from 'react';

function DashboardLanding() {
  return (
    <div className="bg-gray-100 min-h-screen">

      <header className="bg-blue-400 p-4 text-white">
        <h1 className="text-3xl font-semibold">Dashboard LandingPage </h1>
      </header>

      <section className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Metric 1</h2>
            <p className="text-3xl font-bold mt-2">1234</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Metric 2</h2>
            <p className="text-3xl font-bold mt-2">5678</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Metric 3</h2>
            <p className="text-3xl font-bold mt-2">9101</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Metric 4</h2>
            <p className="text-3xl font-bold mt-2">2345</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-8 shadow-lg rounded-lg mb-8 mx-8">
        <h2 className="text-3xl font-semibold">Data Visualizations</h2>
      </section>
    </div>
  );
}

export default DashboardLanding;
