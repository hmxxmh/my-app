import React from 'react';
 
const DataElement = (props) => {

    const { items } = props;
    return (
        <div>
            <p>{items.name}</p>
        </div>
    )
}

export default DataElement;