import Body from "./Body"
import Header from "./Header"

import './Tabletree.css'

const Tree = ({columnsWidth = {}, items, fields, data = []}) => {

    const getHeaderElems = (data) => {
      if (data && data.length) {
        return Object.keys(data[0])
      }
  
      return []
    }
    return (
      <div>
          <table className="table table-striped table-hover">
            <Header items={items? items : getHeaderElems(data)} columnsWidth={columnsWidth}/>
            <Body fields={fields ? fields : getHeaderElems(data)} data={data} /> 
          </table>
        </div>
    )
}

export default Tree;