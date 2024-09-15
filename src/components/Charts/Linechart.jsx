import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';


ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);


const totalExpense=8000;
const totalIncome=12000;


const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Sample Data',
        data: data.Expense,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            return `Expense: ${context.raw}`;
          }
        }
      }
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'X-axis Label'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Y-axis Label'
        }
      }
    }
  };

  return  <div className="flex-col justify-center items-center h-screen">
  <div className="w-full max-w-4xl">
    <Line data={chartData} options={options} />
  </div>

  <div className="flex justify-center items-center gap-8 p-6">
      {/* Total Expense Block */}
      <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h3 className="text-xl font-semibold">Total Expense</h3>
        <p className="text-3xl mt-4">₹{totalExpense}</p>
      </div>

      {/* Total Income Block */}
      <div className="bg-green-500 text-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
        <h3 className="text-xl font-semibold">Total Income</h3>
        <p className="text-3xl mt-4">₹{totalIncome}</p>
      </div>
    </div>


</div>
};

export default LineChart;
