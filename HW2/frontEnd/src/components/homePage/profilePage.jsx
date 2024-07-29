// src/App.js (or wherever your ProfilePage component is located)
import React from 'react';
import UsersList from './UsersList';
import Connections from './Connections';

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
/*
<div className="mb-4">
          <label className="block text-sm font-bold mb-2">Connections</label>
          <Connections />
        </div>
        */


// src/App.js
/*import React, { useState } from 'react';

const people = [
  {
    firstName: "John",
    lastName: "Doe",
    birthday: "1990-01-01",
    workplace: "Tech Company Inc.",
    email: "john.doe@example.com",
    country: "United States",
    city: "New York",
    gender: "Male",
    id_num: "123456789",
    hobby: "Reading"
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    birthday: "1985-05-15",
    workplace: "Health Corp",
    email: "jane.smith@example.com",
    country: "Canada",
    city: "Toronto",
    gender: "Female",
    id_num: "987654321",
    hobby: "Hiking"
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    birthday: "1992-08-25",
    workplace: "Finance Group",
    email: "alice.johnson@example.com",
    country: "United Kingdom",
    city: "London",
    gender: "Female",
    id_num: "123498765",
    hobby: "Traveling"
  },
  {
    firstName: "Bob",
    lastName: "Brown",
    birthday: "1978-11-30",
    workplace: "Retail Co.",
    email: "bob.brown@example.com",
    country: "Australia",
    city: "Sydney",
    gender: "Male",
    id_num: "654321987",
    hobby: "Gardening"
  },
  {
    firstName: "Charlie",
    lastName: "Williams",
    birthday: "1982-02-14",
    workplace: "Construction LLC",
    email: "charlie.williams@example.com",
    country: "United States",
    city: "Los Angeles",
    gender: "Male",
    id_num: "321654987",
    hobby: "Reading"
  },
  {
    firstName: "Diana",
    lastName: "Evans",
    birthday: "1995-07-20",
    workplace: "Media Group",
    email: "diana.evans@example.com",
    country: "France",
    city: "Paris",
    gender: "Female",
    id_num: "456789123",
    hobby: "Photography"
  },
  {
    firstName: "Edward",
    lastName: "Martinez",
    birthday: "1988-09-10",
    workplace: "Education Center",
    email: "edward.martinez@example.com",
    country: "Spain",
    city: "Madrid",
    gender: "Male",
    id_num: "789123456",
    hobby: "Cooking"
  },
  {
    firstName: "Fiona",
    lastName: "Garcia",
    birthday: "1993-03-05",
    workplace: "Tech Innovations",
    email: "fiona.garcia@example.com",
    country: "Mexico",
    city: "Mexico City",
    gender: "Female",
    id_num: "123654789",
    hobby: "Drawing"
  },
  {
    firstName: "George",
    lastName: "Harris",
    birthday: "1975-12-25",
    workplace: "Automotive Inc.",
    email: "george.harris@example.com",
    country: "Germany",
    city: "Berlin",
    gender: "Male",
    id_num: "987321654",
    hobby: "Fishing"
  },
  {
    firstName: "Hannah",
    lastName: "Clark",
    birthday: "1991-06-10",
    workplace: "Logistics Ltd.",
    email: "hannah.clark@example.com",
    country: "Japan",
    city: "Tokyo",
    gender: "Female",
    id_num: "321987654",
    hobby: "Hiking"
  }
];

const PeopleList = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">People List</h1>
      <ul className="list-disc pl-5">
        {people.map(person => (
          <li key={person.email} className="mb-2">
            {person.firstName} {person.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

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
          <PeopleList />
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
*/