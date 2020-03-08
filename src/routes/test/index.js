import React, { useState } from 'react';
import Child from './Child';

const Father = (props) => {
    const data = [
        {
            name: 'zhangsan',
            id:  '1',
            age: '3'
        },
        {
            name: 'lisi',
            id:  '2',
            age: '32',
            children: [
                {
                    name: 'lisi111',
                    id:  '21',
                    age: '3'
                },
                {
                    name: 'lisi222',
                    id:  '22',
                    age: '3'
                },
            ]
        },
        {
            name: 'wangwu',
            id:  '3',
            age: '33'
        },
    ]
    const  [ dataList, setDataList ] = useState(data);

    function handleTest() {
        const aaa = [
            {
                name: 'zhangsan',
                id:  '1',
                age: '3'
            },
            {
                name: 'lisi',
                id:  '2',
                age: '32',
                children: [
                    {
                        name: 'lisi111',
                        id:  '21',
                        age: '3'
                    },
                    {
                        name: 'lisi222',
                        id:  '22',
                        age: '3'
                    },
                    {
                        name: 'lisi444',
                        id:  '23',
                        age: '3'
                    }
                ]
            },
            {
                name: 'wangwu',
                id:  '3',
                age: '33'
            },
        ]
        setTimeout(() => {
            setDataList(aaa);
        },1000)
    }

    return (
        <div>
            <button onClick={() => handleTest()}>测试按钮</button>
            <Child param={dataList}></Child>
        </div>
    )
}

export default Father;