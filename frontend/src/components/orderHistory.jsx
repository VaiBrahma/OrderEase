// components/OrderHistory.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import state from "../state";
import { useNavigate } from "react-router-dom";

const OrderHistory = () => {
  const [orders, setOrders] = useState([]);
  const userId = useSelector((state) => state.user._id);
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/orders/user/${userId}`
        );
        setOrders(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, [userId]);
  console.log(orders);
  const orderItems = orders.items;

  // const itemsArray = Object.values(orderItems);
  let itemsArray;
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-white ">Order History</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {orders.map((order) => (
          <div key={order._id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">
              Order ID: {order._id}
            </h3>
            <div className="mb-2">
              <strong>Items:</strong>{" "}
              {
                JSON.stringify(order.items)
                // let itemsArray = Object.values(order.items)
              }
            </div>
            <div className="mb-2">
              <strong>Payment Method:</strong> {order.paymentMethod}
            </div>
            <div className="mb-2">
              <strong>Total Amount:</strong> ${order.totalAmount}
            </div>
            <div className="mb-2">
              <strong>Order Time:</strong>{" "}
              {new Date(order.orderTime).toLocaleString()}
            </div>
            <div>
              <strong>Delivery Address:</strong> {order.deliveryAddress}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderHistory;
