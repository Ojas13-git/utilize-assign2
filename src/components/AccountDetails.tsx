import React from 'react';
import { useUser } from '@clerk/nextjs';

const AccountDetails: React.FC = () => {
  const { user } = useUser();

  return (
    <div className="p-4 border-b border-gray-300">
      <h2 className="text-xl font-bold">Account Details</h2>
      <p>{user?.fullName}</p>
      <p>{user?.primaryEmailAddress?.emailAddress}</p>
    </div>
  );
};

export default AccountDetails;
