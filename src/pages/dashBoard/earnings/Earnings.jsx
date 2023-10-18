import React,{useState,useEffect} from 'react'
import LineChart from '../../../Components/dashboard/charts/LineChart'
import axios from 'axios'
function Earnings({tasks}) {
  
    const [chartData, setChartData] = useState({
        labels: tasks.map((task) => task.schdualedAt), 
        datasets: [
          {
            label: "Earnings",
            data: tasks.map((data) => data.taskDetails.totalPrice),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0"
            ],
            borderColor: "teal",
            borderWidth: 2
          }
        ]
      });
  return (
   <LineChart chartData={chartData}/>
  )
}

export default Earnings