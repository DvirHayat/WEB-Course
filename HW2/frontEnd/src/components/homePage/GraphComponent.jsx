import React, { useEffect, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import { getGraphOptions, getEdgeColor, getMe, getUsers } from './Utilities';
import FilterButtons from './FilterButtons';
import Legend from './Legend';
import {classifyUsers, classifySpecificUser} from './users';

const GraphComponent = () => {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const userData = getUsers();
    console.log("Fetched users:", userData); // Log fetched users
    setUsers(userData);
  }, []);

  // const GraphComponent = () => {
  //   useEffect(() => {
  //     const container = document.getElementById('network-graph');
  //     if (!container) {
  //       const newContainer = document.createElement('div');
  //       newContainer.id = 'network-graph';
  //       newContainer.className = 'w-screen h-96 bg-gray-500 bg-opacity-50 p-8 rounded-lg shadow-lg flex items-center justify-center';
  //       newContainer.style.marginTop = '4px'; // Added inline style for top margin
  //       document.body.appendChild(newContainer);
  //       renderGraph(newContainer);
  //     } else {
  //       renderGraph(container);
  //     }
  //   }, []);







  useEffect(() => {
    const renderGraph = (users, filter) => {
      const container = document.getElementById('network-graph');
      console.log("container:")
      console.log(container)

      if (!container) {
        const newContainer = document.createElement('div');
        newContainer.id = 'network-graph';
        newContainer.className = 'w-screen h-screen bg-gray-500 bg-opacity-50 p-8 rounded-lg shadow-lg flex items-center justify-center';
        newContainer.style.marginTop = '4px'; // Added inline style for top margin
        document.body.appendChild(newContainer);
        console.log("Not container")
      }

      //container.classList.add('border-2', 'border-black');
      // const canvas = container.getElementsByTagName('canvas')[0];
      // if (canvas) {
      //   canvas.style.height = '800px';
      // }

      const me = getMe();

      const classifiedUsers = classifyUsers(users);

      const connectEdge = (user1, user2, color) => {
        edges.add({ from: user1.id_num, to: user2.id_num, color: { color, inherit: false, opacity: 2 } });
      };

      const addEdgesToMe = (users, color) => {
        if (!users) return;
        users.forEach(user => {
          connectEdge(me, user, color);
        });
      };

      // Create nodes from the users.
      const createNodes = () => {
        return new DataSet([
          ...users.map(user => ({
            id: user.id_num,
            label: `${user.firstName} ${user.lastName}`
          })),
          { id: me.id_num, label: 'Me', color: { background: 'red', border: 'black' }, size: 30 } // Add Me as node.
        ]);
      };

      const { commonHobby, commonState, commonWorkplace } = classifySpecificUser(classifiedUsers, me);

      const nodes = createNodes();
      const edges = new DataSet();

      if (filter === 'all') {
        // Connect "Me" to all common attributes
        addEdgesToMe(commonHobby, getEdgeColor('hobby'));
        addEdgesToMe(commonState, getEdgeColor('state'));
        addEdgesToMe(commonWorkplace, getEdgeColor('workplace'));
        
      } else {
        if (filter === 'hobby') {
          addEdgesToMe(commonHobby, getEdgeColor('hobby'));
        } else if (filter === 'state') {
          addEdgesToMe(commonState, getEdgeColor('state'));
        } else if (filter === 'workplace') {
          addEdgesToMe(commonWorkplace, getEdgeColor('workplace'));
        }
      }

      const data = { nodes, edges };
      const options = getGraphOptions();
      new Network(container, data, options);
    };

    renderGraph(users, filter);
  }, [users, filter]);

  return (
    <div>
      <FilterButtons setFilter={setFilter} />
      <div id="network-graph" className="w-full h-800 border-4 border-black"></div>
      <Legend />
    </div>
  );
};

export default GraphComponent;
