import Body from "./Body"
import Header from "./Header"

import './Tabletree.css'

export default ({ columnsWidth = {}, items, fields, data = [], minimizeIcon = null, maximizeIcon = null, indentLevelOffset = null }) => {

  const getHeaderElems = (data) => {
    if (data && data.length) {
      return Object.keys(data[0])
    }

    return []
  }
  return (
    <div>
      <table className="table table-striped table-hover">
        <Header
          items={items ? items : getHeaderElems(data)}
          columnsWidth={columnsWidth} />
        <Body
          fields={fields ? fields : getHeaderElems(data)}
          data={data}
          minimizeIcon={minimizeIcon}
          maximizeIcon={maximizeIcon}
          indentLevelOffset={indentLevelOffset} />
      </table>
    </div>
  )
}