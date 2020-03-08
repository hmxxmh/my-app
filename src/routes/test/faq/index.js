import React, { useState } from 'react';
import ListCategory from './ListCategory';

const SortTable = (props) => {

    const source = [
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

    const [ dataList, setDataList ] = useState(source);

    function handleClick() {
        const list = [
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
                        name: 'lisi444新增加的测试数据',
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
            setDataList(list);
        },1000)
    }

    return (
        <div>
            <p>
                <button onClick={() => {handleClick()}}>按钮123</button>
            </p>
            <ListCategory data={dataList}></ListCategory>
        </div>
    )
}

export default SortTable;
