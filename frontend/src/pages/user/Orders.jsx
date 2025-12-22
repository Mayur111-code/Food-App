import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyOrders } from "../../features/order/orderSlice";
import Loader from "../../components/common/Loader";

const Orders = () => {
  const dispatch = useDispatch();
  const { orders, loading, error } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchMyOrders());
  }, [dispatch]);

  if (loading) return <Loader />;

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6 text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg p-4 flex justify-between items-center shadow-sm"
            >
              <div>
                <h2 className="font-medium">
                  {order.food?.name}
                </h2>
                <p className="text-sm text-gray-500">
                  ₹{order.food?.price} × {order.quantity}
                </p>
              </div>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  order.status === "completed"
                    ? "bg-green-100 text-green-600"
                    : "bg-yellow-100 text-yellow-600"
                }`}
              >
                {order.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
