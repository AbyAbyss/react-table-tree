import React, { useState } from 'react';
import TableTreeGrid from './TableTree/TableTreeGrid';

function App() {

  const [data, setData] = useState(getData(100));

  function getData(maxLength=100) {
    let data = []
    for (let i = 0; i < maxLength; i++) {
          data = data.concat(makeData(i, maxLength))
    }
    return data
    
  }
  function makeData(label, maxLevel, level) {
    maxLevel = maxLevel || 49
    level = level || 0

    var obj = {
      Product: `product_${label}.${level}`,
      Qty: Math.random()
    }

    if (level < maxLevel) {
      obj.children = makeData(label, maxLevel, level + 1)
    }

    return [obj]
  }

  // const data = [
  //   {
  //     name: "item 1hhhhhhhh",
  //     qty: 2,
  //     children: [
  //       {
  //         name: "item 1.1",
  //         qty: 1,
  //         children: [
  //           {
  //             name: "item 1.1.2",
  //             qty: 5
  //           }
  //         ]
  //       }
  //     ]
  //   },
  //   {
  //     name: "item 2",
  //     qty: 4
  //   }
  // ]

  function getHeaderElems(data) {
    if (data && data.length) {
      return Object.keys(data[0])
    }

    return []
  }

  return (
    <div>
      <TableTreeGrid data={data}
        items={getHeaderElems(data).map(e => e.toLocaleUpperCase())}     // for header, optional will be genrated automatically
        fields={getHeaderElems(data)}    // optional will be genrated automatically
        maximizeIcon={<span>{'>'}</span>} // optional, default: +
        minimizeIcon={<span>\/</span>}    // optional, default: -
        indentLevelOffset={16}              // optional, default: 16   
        columnsWidth={{
              name: "70%",
              qty: "30%"
        }} // optional to use custom width
         />
    </div>
  );
}

export default App;