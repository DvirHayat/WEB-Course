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
      width: 3, // Increased width for the edges
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
        springLength: 300, // Increased spring length for more space between nodes
        springConstant: 0.05, // Reduced spring constant for more space between nodes
      },
      maxVelocity: 50,
      minVelocity: 0.1,
      stabilization: {
        enabled: true,
        iterations: 1000, // Increased iterations for better stabilization
      },
      timestep: 0.5, // Adjusted timestep for smoother animations
    },
    layout: {
      improvedLayout: true,
    },
  });
  
  export const getEdgeColor = (key) => {
    switch (key) {
      case 'workplace': return 'blue';
      case 'hobby': return 'green';
      case 'state': return 'purple';
      default: return 'gray';
    }
  };
  