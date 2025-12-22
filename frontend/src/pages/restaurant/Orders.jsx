const dummyOrders = [
  {
    id: 1,
    user: "Mayur",
    food: "Pizza",
    quantity: 2,
    status: "Pending",
  },
  {
    id: 2,
    user: "Amit",
    food: "Burger",
    quantity: 1,
    status: "Completed",
  },
];

const Orders = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">Restaurant Orders</h1>

      <div className="space-y-4">
        {dummyOrders.map((order) => (
          <div
            key={order.id}
            className="border rounded-lg p-4 flex justify-between items-center shadow-sm"
          >
            <div>
              <p className="font-medium">{order.food}</p>
              <p className="text-sm text-gray-500">
                User: {order.user} | Qty: {order.quantity}
              </p>
            </div>

            <span
              className={`px-3 py-1 rounded-full text-sm ${
                order.status === "Completed"
                  ? "bg-green-100 text-green-600"
                  : "bg-yellow-100 text-yellow-600"
              }`}
            >
              {order.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
