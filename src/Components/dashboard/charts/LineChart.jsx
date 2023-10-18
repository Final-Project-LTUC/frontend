import React from 'react'
import { Line } from 'react-chartjs-2';
import {Flex} from '@chakra-ui/react';
import {
    Chart as ChartJs,
    LineElement,
    PointElement,
    LinearScale,
    Tooltip,
    Legend,
    CategoryScale,
} from 'chart.js'
 
function LineChart({chartData}) {
    ChartJs.register(
        LineElement,
        PointElement,
        LinearScale,
        Tooltip,
        Legend,
        CategoryScale
    );
  return (
    <Flex
    w={'30%'}
    h={'40vh'}
    >
    <Line
    data={chartData}
    options={{
        plugins: {
            title: {
                display: true,
                text: "Total Earnings"
          },
          legend: {
            display: true
          }
        }
    }}
    >
    </Line>
        </Flex>
  )
}

export default LineChart