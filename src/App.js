import React, { Component } from 'react';

import './App.css';
import Tree from './TableTree/CustomTree';

// function App() {
//   return (
//     <div className="App">
     
//     </div>
//   );
// }

// export default App;

class App extends Component {
  constructor(props) {
    super()
    this.makeData = this.makeData.bind(this)
    // this.data = []
    this.data = [
      {
        name: "item 1hhhhhhhh",
        qty: 2,
        children: [
          {
            name: "item 1.1",
            qty: 1
          }
        ]
      },
      {
        name: "item 2",
        qty: 4
      }
    ]
    this.getHeaderElems = this.getHeaderElems.bind(this)
  }

  componentWillMount() {
    // for (let i = 0; i < 50; i++) {
    //   this.data = this.data.concat(this.makeData(i))
    // }
    console.log('SDSSSSSSSSSSSSSSS componentWillMount', this.data)
  }

  makeData(label, maxLevel, level) {
    maxLevel = maxLevel || 49
    level = level || 0

    var obj = {
      Product: `product_${label}.${level}`,
      Qty: Math.random()
    }

    if (level < maxLevel) {
      obj.children = this.makeData(label, maxLevel, level + 1)
    }

    return [obj]
  }
  
  getHeaderElems(data) {
    if (data && data.length) {
      return Object.keys(data[0])
    }

    return []
  }

  render() {  
    return (
      <Tree data={this.data} 
      items={this.getHeaderElems(this.data)}
      fields={this.getHeaderElems(this.data)}
      columnsWidth={{
            name: "70%",
            qty: "30%"
      }}
       />
      // <div>
      //   <table className="table table-striped table-hover">
      //     <Header items={this.getHeaderElems()} columnsWidth={{
      //       Product: "70%",
      //       Qty: "30%"
      //     }}/>
      //     <Body fields={this.getHeaderElems()} data={this.data} /> 
      //   </table>
      // </div>
    );
  }
}


export default App;
