import React, { useEffect, useState } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import { getGraphOptions, getEdgeColor, getMe, getUsers } from './Utilities';
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
        canvas.style.height = '800px';
      }

      const me = getMe()

      const classifyUsers = (users) => {
        const commonHobby = [];
        const commonState = [];
        const commonWorkplace = [];

        users.forEach(user => {
          if (user.hobby === me.hobby) commonHobby.push(user);
          if (user.state === me.state) commonState.push(user);
          if (user.workplace === me.workplace) commonWorkplace.push(user);
        });

        return { commonHobby, commonState, commonWorkplace };
      };

      const classifyUsersAtt = (users) => {
        const commonAttributes = [
          { attribute: 'hobby', users: [] },
          { attribute: 'state', users: [] },
          { attribute: 'workplace', users: [] },
        ];

        users.forEach(user => {
          commonAttributes.forEach(attr => {
            if (user[attr.attribute] === me[attr.attribute]) {
              attr.users.push(user);
            }
          });
        });

        return commonAttributes;
      };

      const connectEdge = (user1, user2, color) => {
        edges.add({ from: user1.id_num, to: user2.id_num, color: { color, inherit: false, opacity: 2 } });
      };

      const addEdgesToMe = (users, color) => {
        users.forEach(user => {
          connectEdge(me, user, color)
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
      }


      const { commonHobby, commonState, commonWorkplace } = classifyUsers(users);
       
      const nodes = createNodes();

      const edges = new DataSet();

      if (filter === 'all') {
        // Connect "Me" to all common attributes
        addEdgesToMe(commonHobby, getEdgeColor('hobby'));
        addEdgesToMe(commonState, getEdgeColor('state'));
        addEdgesToMe(commonWorkplace, getEdgeColor('workplace'));

      }
      else {
        if (filter === 'hobby') {
          addEdgesToMe(commonHobby, getEdgeColor('hobby'));
         // addEdges(commonState.filter(user => !commonHobby.includes(user)), getEdgeColor('state'));
         // addEdges(commonWorkplace.filter(user => !commonHobby.includes(user)), getEdgeColor('workplace'));
        } else if (filter === 'state') {
          addEdgesToMe(commonState, getEdgeColor('state'));
          //addEdges(commonHobby.filter(user => !commonState.includes(user)), getEdgeColor('hobby'));
         //addEdges(commonWorkplace.filter(user => !commonState.includes(user)), getEdgeColor('workplace'));
        } else if (filter === 'workplace') {
          addEdgesToMe(commonWorkplace, getEdgeColor('workplace'));
        //  addEdges(commonHobby.filter(user => !commonWorkplace.includes(user)), getEdgeColor('hobby'));
        //  addEdges(commonState.filter(user => !commonWorkplace.includes(user)), getEdgeColor('state'));
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
