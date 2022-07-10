import React, { useEffect, useState } from 'react'
import Row from './Row'

export default (props) => {

    const [dataToDisplay, setDataToDisplay] = useState(flattenArray(props.data))

    const clickHandler = (key, index) => {

        var tempState = dataToDisplay.slice(0)

        tempState[index]._showChildren = !tempState[index]._showChildren

        if (tempState[index]._showChildren) {
            insertInArray(
                tempState,
                index + 1,
                flattenArray(tempState[index].children, tempState[index]))
        } else {
            removeChildren(tempState, key)
        }

        
        setDataToDisplay(tempState)
        // this.setState({dataToDisplay: tempState})
    }

    const removeChildren = (array, key) => {
        let childrenIndex = indexOfProperty(array, "_parent", key)

        while (childrenIndex !== -1) {
            removeChildren(array, array[childrenIndex]._key)
            array.splice(childrenIndex, 1)
            childrenIndex = indexOfProperty(array, "_parent", key)
        }
    }

    const insertInArray = (array, index, obj) => {
        if (obj.constructor === Array) {
            obj.forEach((elem, i) => {
                array.splice(index + i, 0, elem)
            })
        } else {
            array.splice(index, 0, obj)
        }
    }

    const indexOfProperty = (array, property, value) => {
        for (let i = 0; i < array.length; i ++) {
            if (array[i][property] === value) {
                return i
            }
        }

        return -1
    }

    useEffect(() => {
        flattenArray(props.data)
    }, [props.data])

    // componentWillReceiveProps(nextProps) {
    //     if (this.props !== nextProps) {
    //         this.flattenArray(nextProps.data)
    //     }
    // }

    function generateUUID() {
        return (Math.random() + 1).toString(36).substring(7) + Date.now();
    }

        
    function flattenArray(DataArray, parent, returnArray) {
        parent = parent || {}
        returnArray = returnArray || []

        if (parent._showChildren === false) {
            return returnArray
        }

        var level = parent._level === undefined ? 0 : parent._level + 1

        DataArray.forEach((element) => {
            let elemToAdd = {
                ...element,
                _hasChildren: element._hasChildren || false,
                _level: level,
                _parent: parent._key,
                _key: element._key || generateUUID(),
                _showChildren: element._showChildren || false,
                _visible: parent._showChildren || true
            }

            returnArray.push(elemToAdd)
            if (element.children && element.children.constructor === Array) {
                elemToAdd._hasChildren = true
            }
        });

        return returnArray
    }

    return (
        <tbody>
            {
                dataToDisplay.map((elem, i) => (
                    <Row 
                    key={`row_${i}`}
                    fields={props.fields}
                    data={elem}
                    level={elem._level}
                    index={i}
                    onClick={(key, index) => clickHandler(key, index)} />
                ))
            }
                {/* dataToDisplay.map((elem, i) => {
                 <Row 
                    key={`row_${i}`}
                    fields={props.fields}
                    data={elem}
                    level={elem._level}
                    index={i}
                    onClick={(key, index) => clickHandler(key, index)} />
                
                } */}
            
        </tbody>
    )

    // render() {
    //     const rows = this.state.dataToDisplay.map((elem, i) =>
    //         <Row 
    //         key={`row_${i}`}
    //         fields={this.props.fields}
    //         data={elem}
    //         level={elem._level}
    //         index={i}
    //         onClick={(key, index) => clickHandler(key, index)} />
    //     )

    //     return (
    //         <tbody>
    //             {rows}
    //         </tbody>
    //     )
    // }
}
