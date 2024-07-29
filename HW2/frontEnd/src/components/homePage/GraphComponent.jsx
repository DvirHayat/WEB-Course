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

  useEffect(() => {
    const renderGraph = (users, filter) => {
      let container = document.getElementById('network-graph');
      console.log("container:")
      console.log(container)

      if (!container) {
        container = document.createElement('div');
        container.id = 'network-graph';
        document.body.appendChild(container);
        console.log("Not container")
      }

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

      const createNodes = () => {
        return new DataSet([
          ...users.map(user => ({
            id: user.id_num,
            label: `${user.firstName} ${user.lastName}`
          })),
          { id: me.id_num, label: 'Me', color: { background: 'red', border: 'black' }, size: 30 }
        ]);
      };

      const { commonHobby, commonState, commonWorkplace } = classifySpecificUser(classifiedUsers, me);

      const nodes = createNodes();
      const edges = new DataSet();

      if (filter === 'all') {
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
      <div id="network-graph" className="w-4/5 h-[500px] border-4 border-black mx-auto my-auto flex justify-center items-center"></div>
      <Legend />
    </div>
  );
};

export default GraphComponent;
