import React from 'react'
import { SparklineComponent, Inject, SparklineTooltip } from '@syncfusion/ej2-react-charts'

// bug in syncfusion, need to just class component for SparklineComponent if not when u resize it will throw an error and return null
class SparkLine extends React.PureComponent {
  render() {
    const {id, height, width, color, data, type, currentColor} = this.props
    return (
          <SparklineComponent
            id={id}
            width={width}
            height={height}
            lineWidth={1}
            valueType='Numeric'
            fill={color}
            border={{color: currentColor, width: 2}}
            dataSource={data}
            // axes must match input data
            xName='x'
            yName='yval'
            type={type}
            tooltipSettings={{
              visible: true, 
              // NOT template string, syncfusion knows to take the x and y values in the tooltip
              format:'${x} : data ${yval}',
              trackLineSettings: {visible: true}
            }}
          >
            {/* inject is like having additional syncfusion components inside your syncfusion component */}
            <Inject services={[SparklineTooltip]}/>
          </SparklineComponent>
        )
  }
}

// const SparkLine = ({id, height, width, color, data, type, currentColor}) => {
//   return (
//     <SparklineComponent
//       id={id}
//       width={width}
//       height={height}
//       lineWidth={1}
//       valueType='Numeric'
//       fill={color}
//       border={{color: currentColor, width: 2}}
//       dataSource={data}
//       // axes must match input data
//       xName='x'
//       yName='yval'
//       type={type}
//       tooltipSettings={{
//         visible: true, 
//         // NOT template string, syncfusion knows to take the x and y values in the tooltip
//         format:'${x} : data ${yval}',
//         trackLineSettings: {visible: true}
//       }}
//     >
//       {/* inject is like having additional syncfusion components inside your syncfusion component */}
//       <Inject services={[SparklineTooltip]}/>
//     </SparklineComponent>
//   )
// }

export default SparkLine