// src/components/PeopleList.js
import React from 'react';

const users = [
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
//add function get!!!!!!!!!!!!!!!!!!!!
const UsersList = () => {
  return (
    <div className="p-1">
      <h1 className="text-xl font-bold mb-4">Connections:</h1>
      <ul className="list-disc pl-5">
        {users.map(user => (
          <li key={user.email} className="mb-2">
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;