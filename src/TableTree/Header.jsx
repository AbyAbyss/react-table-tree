import React from 'react';
import './Tabletree.css'

export default (props) => {
    return <thead>
        <tr>            
            {props.items.map((elem, i) => {
                if (['children', 'CHILDREN'].includes(elem)) {
                    return null
                } 

                return <th key={`header_${i}`} style={{width: props.columnsWidth[elem]}}>{elem}</th>
            })}

        </tr>
    </thead>
}