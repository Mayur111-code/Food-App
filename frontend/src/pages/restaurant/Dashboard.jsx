const Dashboard = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Restaurant Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium">Total Foods</h2>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium">Total Orders</h2>
          <p className="text-2xl font-bold mt-2">34</p>
        </div>

        <div className="border rounded-lg p-6 shadow-sm">
          <h2 className="text-lg font-medium">Pending Orders</h2>
          <p className="text-2xl font-bold mt-2 text-yellow-600">5</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
