import React from 'react';
import DataElement from './DataElement';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

const SortCom = (props) => {

    const { data } = props;

    const SortableItem = SortableElement(({value}) => {
        const items = value;
        return (
            <DataElement items={items}></DataElement>
            
        )
    });

    const SortableList = SortableContainer(({value}) => {
      return (
        <div>
          {value.map((value, index) => (
            <SortableItem key={value.id} index={index} value={value} />
          ))}
        </div>
      );
    });

    return (
        <SortableList value={data}></SortableList>
    )
}

export default SortCom;
