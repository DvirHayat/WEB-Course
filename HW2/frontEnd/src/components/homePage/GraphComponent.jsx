import React, { useEffect, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';

const GraphComponent = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');

    // Get all the users from the data set and store it locally.
  useEffect(() => {
    const userData = getUsers();
    setUsers(userData);
  }, []);

    // Renders the graph using given users and filter.
  useEffect(() => {
    const renderGraph = (users, filter) => {
      const container = document.getElementById('network-graph');
      if (!container) return;
        container.classList.add( 'border-2', 'border-black'); // Set the height and border size of the root element
        const canvas = container.getElementsByTagName('canvas')[0];
        if (canvas) {
          canvas.height = '700px'; // Set the height of the canvas
        }
      


        // For development poprpuse.
      const me = {
        id_num: '000000000',
        firstName: 'Me',
        lastName: '',
        workplace: 'Tech Company Inc.',
        hobby: 'Reading',
        state: 'New York'
      };

        // Filter the users by common category.
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

        //For each filter user convert it to a node object.
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

      const connectNodes = (ids, color) => {
        ids.forEach((id1, idx1) => {
          ids.slice(idx1 + 1).forEach(id2 => {
            edges.add({ from: id1, to: id2, color: { color } });
          });
        });
      };

      Object.keys(connectionMap).forEach(key => {
        if (filter === 'all' || filter === key) {
          Object.values(connectionMap[key]).forEach(ids => {
            connectNodes(ids, getEdgeColor(key));
          });
        }
      });

      ['workplace', 'hobby', 'state'].forEach(key => {
        if (connectionMap[key][me[key]]) {
          connectionMap[key][me[key]].forEach(id => {
            edges.add({ from: me.id_num, to: id, color: { color: getEdgeColor(key) } });
          });
        }
      });

      const data = { nodes, edges };
      const options = getGraphOptions();
      new Network(container, data, options);
    };

    renderGraph(users, filter);
  }, [users, filter]);

  const getGraphOptions = () => ({
    nodes: {
      shape: 'dot',
      size: 32,
      font: {
        size: 32,
        color: '#314155',
      },
      borderWidth: 2,
    },
    edges: {
      width: 2,
      color: {
        color: '#848484',
        highlight: '#848484',
        hover: '#848484',
        opacity: 1.0,
      },
      smooth: {
        type: 'continuous',
      },
    },
    physics: {
      enabled: true,
      solver: 'forceAtlas2Based',
      forceAtlas2Based: {
        gravitationalConstant: -50,
        centralGravity: 0.01,
        springLength: 200,
        springConstant: 0.08,
      },
      maxVelocity: 50,
      minVelocity: 0.1,
    },
  });

  const getEdgeColor = conn => {
    switch (conn) {
      case 'workplace': return 'blue';
      case 'hobby': return 'green';
      case 'state': return 'purple';
      default: return 'black';
    }
  };

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
      <div className="tabs flex justify-center space-x-4 my-4">
        <button onClick={() => setFilter('all')} className="px-4 py-2 bg-black text-white rounded hover:bg-slate-950">All</button>
        <button onClick={() => setFilter('hobby')} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Hobby</button>
        <button onClick={() => setFilter('workplace')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">Workplace</button>
        <button onClick={() => setFilter('state')} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700">State</button>
      </div>
      <div id="network-graph" className="w-full h-600"></div>
      <div className="legend mt-4 text-center">
        <p><span className="text-blue-500">■</span> Workplace Connections</p>
        <p><span className="text-green-500">■</span> Hobby Connections</p>
        <p><span className="text-purple-500">■</span> State Connections</p>
      </div>
    </div>
  );
};

export default GraphComponent;
