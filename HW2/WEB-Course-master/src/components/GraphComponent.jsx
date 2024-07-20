import React, { useEffect } from 'react';
import { DataSet, Network } from 'vis-network/standalone';
import 'vis-network/styles/vis-network.css';

const GraphComponent = () => {
  useEffect(() => {
    const container = document.getElementById('network-graph');
    if (!container) {
      const newContainer = document.createElement('div');
      newContainer.id = 'network-graph';
      newContainer.className = 'w-screen h-96 bg-gray-500 bg-opacity-50 p-8 rounded-lg shadow-lg flex items-center justify-center';
      document.body.appendChild(newContainer);
      renderGraph(newContainer);
    } else {
      renderGraph(container);
    }
  }, []);

  const renderGraph = (container) => {
    const nodes = new DataSet([
      { id: 1, label: 'Yael' },
      { id: 2, label: 'Shimon' },
      { id: 3, label: 'Lital' },
      { id: 4, label: 'Gershon' },
      { id: 5, label: 'Ravit' },
      { id: 6, label: 'Liora' },
      { id: 7, label: 'Orly' },
      { id: 8, label: 'Dor' },
    ]);

    const edges = new DataSet([
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 4, to: 3 },
      { from: 2, to: 5 },
      { from: 6, to: 7 },
      { from: 7, to: 8 },
      { from: 8, to: 6 },
    ]);

    const data = { nodes, edges };
    const options = {
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
      },
      physics: {
        enabled: true,
      },
    };

    new Network(container, data, options);
  };

  return null;
};

export default GraphComponent;
