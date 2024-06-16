import React, { useState } from 'react';
import { Order } from '../redux/orderSlice';

interface CreateOrderModalProps {
  onSave: (order: Order) => void;
  onClose: () => void;
}

const CreateOrderModal: React.FC<CreateOrderModalProps> = ({ onSave, onClose }) => {
  const [formState, setFormState] = useState<Order>({
    id: '',
    customerName: '',
    customerEmail: '',
    product: 'Product 1',
    quantity: 1,
    orderValue: 29,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formState);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Create Order</h2>
        <input name="customerName" value={formState.customerName} onChange={handleChange} className="border p-2 rounded mb-2 w-full" />
        <input name="customerEmail" value={formState.customerEmail} onChange={handleChange} className="border p-2 rounded mb-2 w-full" />
        <select name="product" value={formState.product} onChange={handleChange} className="border p-2 rounded mb-2 w-full">
          <option value="Product 1">Product 1</option>
          <option value="Product 2">Product 2</option>
          <option value="Product 3">Product 3</option>
        </select>
        <input name="quantity" type="number" value={formState.quantity} onChange={handleChange} className="border p-2 rounded mb-2 w-full" />
        <div className="flex justify-end space-x-2">
          <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">Save</button>
          <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default CreateOrderModal;
