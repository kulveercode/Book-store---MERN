import { useAuth } from "../../context/AuthContext";
import { useGetOrdersByEmailQuery } from "../../redux/features/orders/orderApi";

const OrderPage = () => {
    const { currentUser } = useAuth();
  const { data: orders = [], isLoading, isError } = useGetOrdersByEmailQuery(currentUser.email);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return (
      <div>Error while fetching orders</div>
    );
  }
  return (
    <div className="container mx-auto p-6">
        <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
        {orders.length === 0 ? (
          <h2>No orders found</h2>
        ) : (
          <div>
            {orders.map((order, index) => (
              <div key={index}>
                <h3>Order id: {order?._id}</h3>
              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default OrderPage;
