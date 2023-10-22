import React from 'react'

const Analytics = () => {
  return (
    <div className="bg-gray-100 p-8">
      <h1 className="text-3xl font-semibold mb-4">Analytics Dashboard</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Total Users</h2>
          <div className="text-4xl font-bold">5,632</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Revenue</h2>
          <div className="text-4xl font-bold">$56,789</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white rounded-lg p-6 shadow-md">
          <h2 className="text-lg font-semibold mb-4">Page Views</h2>
          <div className="text-4xl font-bold">256,789</div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg p-6 shadow-md col-span-3">
          <h2 className="text-lg font-semibold mb-4">Website Traffic</h2>
          {/* Include your chart or graph component here */}
          <div className="w-full h-64 bg-blue-200 rounded-md"></div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg p-6 shadow-md col-span-3">
          <h2 className="text-lg font-semibold mb-4">Top Performing Products</h2>
          {/* Include your data table component here */}
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Product</th>
                <th className="py-2">Sales</th>
                <th className="py-2">Revenue</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2">Product A</td>
                <td className="py-2">450</td>
                <td className="py-2">$4,500</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Analytics