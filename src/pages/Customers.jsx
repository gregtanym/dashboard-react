import React from 'react'
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids/src'

import { customersData, customersGrid } from '../data/dummy'
import { Header } from '../components'

// no implementation of CRUD fucntionalities here
// cannot edit primary key
// cant seem to edit name field??

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category='Page' title='Customers'/>
      {/* just change whatever settings to gridcomponent and make sure the additional features are injected and can alr */}
      <GridComponent
        dataSource={customersData}
        enableHover={false}
        allowPaging
        allowSorting
        selectionSettings={{persistSelection: true}}
        toolbar={['Delete']}
        editSettings = {{allowDeleting: true, allowEditing: true}}
        width='auto'
      >
        <ColumnsDirective>
          {customersGrid.map((item, index) => 
            <ColumnDirective key={index} {...item} />
          )}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Edit, Selection, Sort, Filter]}/>
      </GridComponent>
    </div>
  )
}

export default Customers