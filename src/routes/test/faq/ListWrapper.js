import React from 'react';


const ListWrapper = (props) => {
    const Comp = props.component;
    const { data } = props;
    return (
        <div>
            <Comp data={data}></Comp>
        </div>
    )
}

export default ListWrapper;
