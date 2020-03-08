import React from 'react';

const Grandson = (props) => {
    const { param } = props;
    console.log(param);
    return (
        <div>
            {
                param && param.map((item) => {
                    return (<div key={item.id}>
                        <span>孙组件：{ item.name }</span>
                        <span>孙组建：{ item.age }</span>
                    </div>)
                })
            }
        </div>
    )
}

export default Grandson;