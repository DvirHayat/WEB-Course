export const getGraphOptions = () => ({
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
    width: 3,
    color: {
      color: '#848484',
      highlight: '#848484',
      hover: '#848484',
      opacity: 3,
    },
    smooth: {
      type: 'dynamic',
    },
  },
  physics: {
    enabled: true,
    solver: 'forceAtlas2Based',
    forceAtlas2Based: {
      gravitationalConstant: -50,
      centralGravity: 0.01,
      springLength: 300,
      springConstant: 0.05,
    },
    maxVelocity: 50,
    minVelocity: 0.1,
    stabilization: {
      enabled: true,
      iterations: 1000,
    },
    timestep: 0.5,
  },
  layout: {
    improvedLayout: true,
  },
});
  
  export const getEdgeColor = (key) => {
    switch (key) {
      case 'workplace': return 'orange';
      case 'hobby': return 'green';
      case 'state': return 'purple';
      default: return 'gray';
    }
  };

  export const getMe =()=>{ return {
    id_num: '000000000',
    firstName: 'Me',
    lastName: '',
    workplace: 'Tech Company Inc.',
    hobby: 'Reading',
    state: 'New York'
  };
}

export const getUsers = () =>{
  return [
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
      "workplace": "Tech Company Inc.",
      "email": "jane.smith@example.com",
      "country": "Canada",
      "city": "Toronto",
      "state": "New York",
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
      "hobby": "Reading"
    },
    {
      "firstName": "Bob",
      "lastName": "Brown",
      "birthday": "1978-11-30",
      "workplace": "Tech Company Inc.",
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
      "workplace": "Tech Company Inc.",
      "email": "diana.evans@example.com",
      "country": "France",
      "city": "New York",
      "state": "Ile-de-France",
      "gender": "Female",
      "id_num": "456789123",
      "hobby": "Photography"
    },
    {
      "firstName": "Edward",
      "lastName": "Martinez",
      "birthday": "1988-09-10",
      "workplace": "Tech Company Inc.",
      "email": "edward.martinez@example.com",
      "country": "Spain",
      "city": "Madrid",
      "state": "Community of Madrid",
      "gender": "Male",
      "id_num": "789123456",
      "hobby": "Reading"
    },
    {
      "firstName": "Fiona",
      "lastName": "Garcia",
      "birthday": "1993-03-05",
      "workplace": "Tech Innovations",
      "email": "fiona.garcia@example.com",
      "country": "Mexico",
      "city": "Mexico City",
      "state": "New york",
      "gender": "Female",
      "id_num": "123654789",
      "hobby": "Reading"
    },
    {
      "firstName": "George",
      "lastName": "Harris",
      "birthday": "1975-12-25",
      "workplace": "Tech Company Inc.",
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
      "workplace": "Tech Company Inc.",
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
      "hobby": "Running"
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
      "hobby": "Riding bike"
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
}

