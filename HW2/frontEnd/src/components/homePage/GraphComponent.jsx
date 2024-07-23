import React, { useEffect, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import { getGraphOptions, getEdgeColor } from './Utilities';
import FilterButtons from './FilterButtons';
import Legend from './Legend';

const GraphComponent = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const userData = getUsers();
    setUsers(userData);
  }, []);

  useEffect(() => {
    const renderGraph = (users, filter) => {
      const container = document.getElementById('network-graph');
      if (!container) return;

      container.classList.add('border-2', 'border-black');
      const canvas = container.getElementsByTagName('canvas')[0];
      if (canvas) {
        canvas.style.height = '300px';
      }

      const me = {
        id_num: '000000000',
        firstName: 'Me',
        lastName: '',
        workplace: 'Tech Company Inc.',
        hobby: 'Reading',
        state: 'New York'
      };

      const filteredUsers = users.filter(user => {
        switch (filter) {
          case 'all':
            return user.workplace === me.workplace || user.hobby === me.hobby || user.state === me.state;
          case 'workplace':
            return user.workplace === me.workplace;
          case 'hobby':
            return user.hobby === me.hobby;
          case 'state':
            return user.state === me.state;
          default:
            return false;
        }
      });

      const nodes = new DataSet([
        ...filteredUsers.map(user => ({
          id: user.id_num,
          label: `${user.firstName} ${user.lastName}`
        })),
        { id: me.id_num, label: 'Me', color: { background: 'red', border: 'black' }, size: 30 }
      ]);

      const edges = new DataSet();
      const connectionMap = {
        workplace: {},
        hobby: {},
        state: {}
      };

      filteredUsers.forEach(user => {
        ['workplace', 'hobby', 'state'].forEach(key => {
          if (!connectionMap[key][user[key]]) connectionMap[key][user[key]] = [];
          connectionMap[key][user[key]].push(user.id_num);
        });
      });

      const connectNodes = (ids, color, key) => {
        ids.forEach((id1, idx1) => {
          ids.slice(idx1 + 1).forEach(id2 => {
            edges.add({ from: id1, to: id2, color: { color, inherit: false, opacity: 1.0 } });
          });
        });
      };

      Object.keys(connectionMap).forEach(key => {
        Object.values(connectionMap[key]).forEach(ids => {
          connectNodes(ids, getEdgeColor(key), key);
        });
      });

      ['workplace', 'hobby', 'state'].forEach(key => {
        if (connectionMap[key][me[key]]) {
          connectionMap[key][me[key]].forEach(id => {
            edges.add({ from: me.id_num, to: id, color: { color: getEdgeColor(key), inherit: false, opacity: 1.0 } });
          });
        }
      });

      const data = { nodes, edges };
      const options = getGraphOptions();
      new Network(container, data, options);
    };

    renderGraph(users, filter);
  }, [users, filter]);

  const getUsers = () => [
    {
      "firstName": "John",
      "lastName": "Doe",
      "birthday": "1990-01-01",
      "workplace": "Tech Company Inc.",
      "email": "john.doe@example.com",
      "country": "United States",
      "city": "New York",
      "state": "New York",
      "gender": "Male",
      "id_num": "123456789",
      "hobby": "Reading"
    },
    {
      "firstName": "Jane",
      "lastName": "Smith",
      "birthday": "1985-05-15",
      "workplace": "Health Corp",
      "email": "jane.smith@example.com",
      "country": "Canada",
      "city": "Toronto",
      "state": "Ontario",
      "gender": "Female",
      "id_num": "987654321",
      "hobby": "Hiking"
    },
    {
      "firstName": "Alice",
      "lastName": "Johnson",
      "birthday": "1992-08-25",
      "workplace": "Finance Group",
      "email": "alice.johnson@example.com",
      "country": "United Kingdom",
      "city": "London",
      "state": "England",
      "gender": "Female",
      "id_num": "123498765",
      "hobby": "Traveling"
    },
    {
      "firstName": "Bob",
      "lastName": "Brown",
      "birthday": "1978-11-30",
      "workplace": "Retail Co.",
      "email": "bob.brown@example.com",
      "country": "Australia",
      "city": "Sydney",
      "state": "New South Wales",
      "gender": "Male",
      "id_num": "654321987",
      "hobby": "Gardening"
    },
    {
      "firstName": "Charlie",
      "lastName": "Williams",
      "birthday": "1982-02-14",
      "workplace": "Construction LLC",
      "email": "charlie.williams@example.com",
      "country": "United States",
      "city": "Los Angeles",
      "state": "California",
      "gender": "Male",
      "id_num": "321654987",
      "hobby": "Reading"
    },
    {
      "firstName": "Diana",
      "lastName": "Evans",
      "birthday": "1995-07-20",
      "workplace": "Media Group",
      "email": "diana.evans@example.com",
      "country": "France",
      "city": "Paris",
      "state": "Ile-de-France",
      "gender": "Female",
      "id_num": "456789123",
      "hobby": "Photography"
    },
    {
      "firstName": "Edward",
      "lastName": "Martinez",
      "birthday": "1988-09-10",
      "workplace": "Education Center",
      "email": "edward.martinez@example.com",
      "country": "Spain",
      "city": "Madrid",
      "state": "Community of Madrid",
      "gender": "Male",
      "id_num": "789123456",
      "hobby": "Cooking"
    },
    {
      "firstName": "Fiona",
      "lastName": "Garcia",
      "birthday": "1993-03-05",
      "workplace": "Tech Innovations",
      "email": "fiona.garcia@example.com",
      "country": "Mexico",
      "city": "Mexico City",
      "state": "Mexico City",
      "gender": "Female",
      "id_num": "123654789",
      "hobby": "Drawing"
    },
    {
      "firstName": "George",
      "lastName": "Harris",
      "birthday": "1975-12-25",
      "workplace": "Automotive Inc.",
      "email": "george.harris@example.com",
      "country": "Germany",
      "city": "Berlin",
      "state": "Berlin",
      "gender": "Male",
      "id_num": "987321654",
      "hobby": "Fishing"
    },
    {
      "firstName": "Hannah",
      "lastName": "Clark",
      "birthday": "1991-06-10",
      "workplace": "Logistics Ltd.",
      "email": "hannah.clark@example.com",
      "country": "Japan",
      "city": "Tokyo",
      "state": "Tokyo",
      "gender": "Female",
      "id_num": "321987654",
      "hobby": "Hiking"
    },
    {
      "firstName": "Michael",
      "lastName": "Thompson",
      "birthday": "1985-08-15",
      "workplace": "Tech Company Inc.",
      "email": "michael.thompson@example.com",
      "country": "United States",
      "city": "New York",
      "state": "New York",
      "gender": "Male",
      "id_num": "876543210",
      "hobby": "Reading"
    },
    {
      "firstName": "Emily",
      "lastName": "Davis",
      "birthday": "1992-10-12",
      "workplace": "Tech Company Inc.",
      "email": "emily.davis@example.com",
      "country": "United States",
      "city": "New York",
      "state": "New York",
      "gender": "Female",
      "id_num": "678901234",
      "hobby": "Reading"
    },
    {
      "firstName": "William",
      "lastName": "Miller",
      "birthday": "1980-02-25",
      "workplace": "Tech Company Inc.",
      "email": "william.miller@example.com",
      "country": "United States",
      "city": "Mexico City",
      "state": "Mexico",
      "gender": "Male",
      "id_num": "345678901",
      "hobby": "Reading"
    },
    {
      "firstName": "Sophia",
      "lastName": "Wilson",
      "birthday": "1995-09-30",
      "workplace": "Tech Company Inc.",
      "email": "sophia.wilson@example.com",
      "country": "United States",
      "city": "New York",
      "state": "New York",
      "gender": "Female",
      "id_num": "234567890",
      "hobby": "Gym"
    },
    {
      "firstName": "David",
      "lastName": "Taylor",
      "birthday": "1987-04-17",
      "workplace": "Tech Company Inc.",
      "email": "david.taylor@example.com",
      "country": "United States",
      "city": "isarel",
      "state": "isarel",
      "gender": "Male",
      "id_num": "901234567",
      "hobby": "Reading"
    },
    {
      "firstName": "Olivia",
      "lastName": "Anderson",
      "birthday": "1990-07-05",
      "workplace": "Tech Company Inc.",
      "email": "olivia.anderson@example.com",
      "country": "United States",
      "city": "New York",
      "state": "New York",
      "gender": "Female",
      "id_num": "112233445",
      "hobby": "Running"
    }
];

  return (
    <div>
      <FilterButtons setFilter={setFilter} />
      <div id="network-graph" className="w-full h-800 border-4 border-black"></div>
      <Legend />
    </div>
  );
};

export default GraphComponent;
