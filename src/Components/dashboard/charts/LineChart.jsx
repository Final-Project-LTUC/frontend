import React from 'react'
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJs,
    LineElement,
    PointElement,
    LinearScale,
    Tooltip,
    Leged,
} from 'chart.js'
ChartJs.register(
    LineElement,
    PointElement,
    LinearScale,
    Tooltip,
    Leged,

);
function LineChart() {
    const data={
        label:['Mon','Tue','Wed'],
        datasets:[
            {
                label:'Weekdays',
                data:[30,33,66],
                borderColor:'teal',
                tension:0.4,
            }
        ]
    };
    const options={
        
    }
  return (
    <Line
    data={data}
    options={options}
    >

    </Line>
  )
}

export default LineChart