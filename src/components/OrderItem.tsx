import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteOrder, editOrder, Order } from '../redux/orderSlice';
import EditOrderModal from './EditOrderModal';

interface OrderItemProps {
  order: Order;
}

const OrderItem: React.FC<OrderItemProps> = ({ order }) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteOrder(order.id));
  };

  const handleEdit = (updatedOrder: Order) => {
    dispatch(editOrder({ id: order.id, updatedOrder }));
    setIsEditing(false);
  };

  return (
    <div className="p-4 border rounded flex flex-col md:flex-row justify-between items-start md:items-center space-y-2 md:space-y-0">
      <div className="flex-1">
        <p><strong>Name:</strong> {order.customerName}</p>
        <p><strong>Email:</strong> {order.customerEmail}</p>
        <p><strong>Product:</strong> {order.product}</p>
        <p><strong>Quantity:</strong> {order.quantity}</p>
        <p><strong>Order Value:</strong> ${order.orderValue}</p>
      </div>
      <div className="flex space-x-2">
        <button onClick={() => setIsEditing(true)} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
        <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
      </div>
      {isEditing && <EditOrderModal order={order} onSave={handleEdit} onClose={() => setIsEditing(false)} />}
    </div>
  );
};

export default OrderItem;
