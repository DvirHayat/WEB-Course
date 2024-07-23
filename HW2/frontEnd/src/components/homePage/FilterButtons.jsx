import React from 'react';

const FilterButtons = ({ setFilter }) => (
  <div className="tabs flex justify-center space-x-4 my-4">
    <button onClick={() => setFilter('all')} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">All</button>
    <button onClick={() => setFilter('hobby')} className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">Hobby</button>
    <button onClick={() => setFilter('workplace')} className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-700">Workplace</button>
    <button onClick={() => setFilter('state')} className="px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-700">State</button>
  </div>
);

export default FilterButtons;
