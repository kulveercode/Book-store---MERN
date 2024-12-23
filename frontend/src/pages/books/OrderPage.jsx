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
              <div key={index} className="mb-4 border-b pb-2">
                <p className="p-1 bg-secondary text-white w-10 rounded mb-1"># {index + 1}</p>
                <h3 className="font-bold">Order id: {order?._id}</h3>
                <p className="text-gray-600">Order Id: {order._id}</p>
                <p className="text-gray-600">Name: {order.name}</p>
                <p className="text-gray-600">Email: {order.email}</p>
                <p className="text-gray-600">Phone: {order.phone}</p>
                <p className="text-gray-600">Total Price: ${order.totalPrice}</p>
                <p className="text-gray-600"></p>
                <h3 className="font-medium">Address:</h3>
                <p>{order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}</p>
                <h3 className="font-medium">Product Id:</h3>
                <ul>
                  {order.productsIds.map((productId) => (
                    <li key={productId}>{productId}</li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        )}
      </div>
  );
};

export default OrderPage;
