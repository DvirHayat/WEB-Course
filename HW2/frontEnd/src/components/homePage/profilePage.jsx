import React, { useState } from 'react';

const ProfilePage = () => {
  const [connections, setConnections] = useState([]);
  const [newConnection, setNewConnection] = useState('');

  const addConnection = () => {
    if (newConnection.trim()) {
      setConnections([...connections, newConnection]);
      setNewConnection('');
    }
  };

  const removeConnection = () => {
    if (connections.length > 0) {
      setConnections(connections.slice(0, -1));
    }
  };

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
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Connections</label>
          <ul id="connectionList" className="list-disc pl-5">
            {connections.map((connection, index) => (
              <li key={index}>{connection}</li>
            ))}
          </ul>
        </div>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="newConnection"
            type="text"
            placeholder="Add New Connection (Name, Type)"
            value={newConnection}
            onChange={(e) => setNewConnection(e.target.value)}
          />
        </div>
        <div className="flex space-x-2">
          <button
            onClick={addConnection}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Connection
          </button>
          <button
            onClick={removeConnection}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Remove Connection
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

