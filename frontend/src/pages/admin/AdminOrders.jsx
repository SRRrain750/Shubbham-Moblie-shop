import React, { useEffect, useState } from "react";
import Axios from "../../utils/Axios";
import DisplayPriceInRupees from "../../utils/DisplayPriceInRupees";

const AdminOrders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await Axios.get("/api/admin/orders", { withCredentials: true });
        setOrders(res.data.data);
      } catch (err) {
        console.error("Failed to fetch orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  //if (loading) return <p className="text-center mt-10">Loading orders...</p>;

  return (
    
    <div className="p-6 sm:p-6 bg-gray-50 min-h-screen space-y-4">
      
      <div className='bg-white shadow-xl p-3 font-semibold'>
        <h1> All Order </h1>
      </div>


      {orders.map((order) => (
        <div key={order._id}
         className=" bg-white shadow rounded-lg overflow-hidden  flex flex-col sm:flex-row">
          
          {/* Left: Product Image */}
          <div className=" px-1 w-full sm:w-40  justify-center sm:justify-center">
            <img
              src={order.productId?.image[0]}
              alt={order.productId?.name}
              className=" w-30 h-30 sm:w-32 sm:h-32  p-4"
            />
            <p className=" p-1 px-2 "><strong>Product : </strong> {order.productId?.name} </p>
          </div>

          {/* Right: Order Details */}
          <div className="flex-1 p-4 flex flex-col justify-between">
            
            {/* Order Header */}
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-bold text-gray-700">Order: {order.orderId}</h2>
            </div>

            {/* User & Product Info */}


            <p><strong>Name:</strong> {order.userId?.name || "N/A"}</p>
            <p><strong>Phone:</strong> {order.userId?.mobile || "N/A"}</p>
            <p><strong>Total Price:</strong> {DisplayPriceInRupees(order.productId?.price)}

            </p>
            <p><strong>Address:</strong> {order.delivery_address
              ? `${order.delivery_address.address_line}`
              : "N/A"}
            </p>


          </div>
        </div>
      ))}
    </div>
  );
};

export default AdminOrders;

