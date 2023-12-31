import React,{useState} from 'react'
import LineChart from '../../../Components/dashboard/charts/LineChart'
function Earnings({tasks}) {
    const [chartData, setChartData] = useState({
        labels: tasks.map((task) => task.schdualedAt), 
        datasets: [
          {//localhost
            label: "Earnings",
            data: tasks.map((data) => data.taskDetails.totalProfit),
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
};
export default Earnings