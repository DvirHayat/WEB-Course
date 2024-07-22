// src/components/Connections.js
import React, { useState } from 'react';

const Connections = () => {
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
    <div>
      <div className="mb-4">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="newConnection"
          type="text"
          placeholder="Add New Connection"
          value={newConnection}
          onChange={(e) => setNewConnection(e.target.value)}
        />
      </div>
      <div className="flex space-x-2 mb-4">
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
      <ul className="list-disc pl-5">
        {connections.map((connection, index) => (
          <li key={index} className="mb-2">
            {connection}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Connections;
