
// src/App.js (or wherever your ProfilePage component is located)
import React from 'react';
import UsersList from './UsersList';

const ProfilePage = () => {
  return (
    <div className="flex flex-row justify-center items-center gap-4 mt-4">
      <div className="bg-white text-gray-800 rounded-lg shadow-md p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">User Profile</h1>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Full Name: John Doe</label>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">ID: 123456789</label>
        </div>
        <UsersList />
      </div>
    </div>
  );
};

export default ProfilePage;

