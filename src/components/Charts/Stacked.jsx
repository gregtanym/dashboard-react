import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts/src'

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy'

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='charts'

      // ???
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}

      // removing border of the chart
      chartArea={{border: {width: 0}}}
      tooltip={{enable: true}}
      legendSettings={{background:'white'}}
    >

      {/* inject is like having additional syncfusion components inside your syncfusion component */}
      <Inject services={[
        Legend, Category, StackingColumnSeries, Tooltip
      ]}/>

      <SeriesCollectionDirective>
        {/* creating the actual stacked bar graph with the data, based on the same index? */}
        {/* able to recognise what is the index even tho it is not specified in data */}
        {stackedCustomSeries.map((item, index) => 
          <SeriesDirective key={index} {...item}/>
        )}
      </SeriesCollectionDirective>

    </ChartComponent>
  )
}

export default Stacked