import React, { useEffect } from 'react';
import './Tabletree.css';

const LEVEL_OFFSET = 16

export default (props) => {

    const getExpandIcon = (data, clickHandler) => {
        if (data._hasChildren) {
            if (data._showChildren) {
                return (
                    <span className="treegrid-expander">
                        <button className='no-style' onClick={clickHandler}>
                            {props.minimizeIcon ? props.minimizeIcon : <span>-</span>}
                        {/* - */}
                        </button>
                        {/* <i className="fa fa-minus" onClick={clickHandler}></i> */}
                    </span>
                )
            }

            return (
                <span className="treegrid-expander">
                    <button className='no-style' onClick={clickHandler}>
                        {props.maximizeIcon ? props.maximizeIcon : <span>+</span>}
                    </button>
                    {/* <i className="fa fa-plus" onClick={clickHandler}>+</i> */}
                </span>
            )
        }

        return <span className="treegrid-expander"></span>
    }

    const clickHandler = () => {
        if (props.data._hasChildren) {
            props.onClick(props.data._key, props.index)
        }
    }

    const getIndent = (level) => {
        return <span className="treegrid-indent" style={{width: level * LEVEL_OFFSET}}></span>
    }

    useEffect(() => {

    }, []);

    return <Render 
        data={props.data}
        fields={props.fields}
        level={props.level}
        getExpandIcon={getExpandIcon}
        clickHandler={clickHandler}
        getIndent={getIndent}
        />


}

const Render = (props) => {
    let hasChildren = props.getExpandIcon(props.data, props.clickHandler)

    useEffect(() => {
        if (!props.data._visible) {
            return null
        }
    
    }, [])


    const items = props.fields.map((field, i) => {
        if (field === 'children') {
            return null
        }

        let expandIcon
        let offset = i === 0 ? props.getIndent(props.level) : null

        if (i === 0) {
            expandIcon = hasChildren
        }
        
        return (
            <td key={`${props.data._id}_${field}`} >
                <div>
                    {offset}
                    {expandIcon}
                    {"  " + (props.data[field] || '')}
                </div>
            </td>
        )
    })

    return (
        <tr>
            {items}
        </tr>
    )
}
