import React from 'react';

const TableHead = () => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="py-3 px-6">
          ID
        </th>
        <th scope="col" className="py-3 px-6">
          Cliente
        </th>
        <th scope="col" className="py-3 px-6">
          Pizzas
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;