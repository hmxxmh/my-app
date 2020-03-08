import React from 'react';
import Grandson from './Grandson';
import Grandson1 from './Grandson1';

const Child = (props) => {

    const { param } = props;
    return (
        <div>
            {
                param && param.map((item) => {
                    return (<div key={item.id}>
                        子组件<span>{item.name}</span>
                        子组件<span>{item.age}</span>
                        {/* {
                            item.children && item.children.map((el) => {
                                return <Grandson key={el.id} param={el}></Grandson>
                            })
                        } */}
                        <Grandson1 param={item.children}></Grandson1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Child;