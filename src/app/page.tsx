'use client';

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SignOutButton, SignedIn, SignedOut, RedirectToSignIn } from '@clerk/nextjs';
import AccountDetails from '../components/AccountDetails';
import OrderList from '../components/OrderList';
import CreateOrderModal from '../components/CreateOrderModal';
import { addOrder, Order } from '../redux/orderSlice';

const Home: React.FC = () => {
  const [isCreating, setIsCreating] = useState(false);
  const dispatch = useDispatch();

  const handleCreateOrder = (newOrder: Order) => {
    dispatch(addOrder(newOrder));
    setIsCreating(false);
  };

  return (
    <>
    <SignedIn>
      <div className="min-h-screen bg-gray-100 p-4">
        <div className="flex flex-col md:flex-row justify-between items-center border-b pb-4 mb-4">
          <AccountDetails />
          <SignOutButton />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Orders</h1>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create New Order
          </button>
        </div>
        <OrderList />
        {isCreating && <CreateOrderModal onSave={handleCreateOrder} onClose={() => setIsCreating(false)} />}
      </div>
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
    </>
  );
};

export default Home;
