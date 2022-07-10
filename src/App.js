import React from 'react';
import TableTreeGrid from './TableTree/TableTreeGrid';

function App() {

  const data = [
    {
      name: "item 1hhhhhhhh",
      qty: 2,
      children: [
        {
          name: "item 1.1",
          qty: 1,
          children: [
            {
              name: "item 1.1.2",
              qty: 5
            }
          ]
        }
      ]
    },
    {
      name: "item 2",
      qty: 4
    }
  ]

  function getHeaderElems(data) {
    if (data && data.length) {
      return Object.keys(data[0])
    }

    return []
  }

  return (
    <div>
      <TableTreeGrid data={data}
        items={getHeaderElems(data)}     // optional will be genrated automatically
        fields={getHeaderElems(data)}    // optional will be genrated automatically
        maximizeIcon={<span>{'>'}</span>} // optional, default: +
        minimizeIcon={<span>\/</span>}    // optional, default: -
        indentLevelOffset={0}              // optional, default: 16   
        columnsWidth={{
              name: "70%",
              qty: "30%"
        }} // optional to use custom width
         />
    </div>
  );
}

export default App;