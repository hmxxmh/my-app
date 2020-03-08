import React from 'react';

const Grandson = (props) => {
    const { param } = props;
    return (
        <div>
            <span>孙组件：{ param.name }</span>
            <span>孙组建：{ param.age }</span>
        </div>
    )
}

export default Grandson;