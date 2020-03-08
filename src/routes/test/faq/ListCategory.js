import React from 'react';
import DataElement from './DataElement';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';
import ListWrapper from './ListWrapper';
import SortCom from './SortCom';

const ListCategory = (props) => {

    const { data } = props;

    const SortableItem = SortableElement(({value}) => {
        return (<div>
            <DataElement items={value}></DataElement>
            {
                value.children && <ListWrapper component={SortCom} data={value.children}></ListWrapper>
            }
            
            </div>
        )
    });

    const SortableList = SortableContainer(({items}) => {
      return (
        <ul>
          {items.map((value, index) => (
            <SortableItem key={value.id} index={index} value={value} />
          ))}
        </ul>
      );
    });

    return (
        <SortableList items={data}></SortableList>
    )
}

export default ListCategory;
