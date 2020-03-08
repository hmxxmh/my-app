import React from 'react';
import Sortable from './sortable/index';
import Father from './test/index';
import SortTable from './test/faq/index';

const Origin = () => {
    return (<div>
        <p>this is routes index page</p>
        <Sortable/>
        <Father/>
        <div>
            <hr/>
            <SortTable></SortTable>
        </div>
    </div>)
}

export default Origin