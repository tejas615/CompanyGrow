import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import Card from '../ui/Card';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const PerformanceChart = ({
  data,
  chartType = 'line',
  title = 'Performance Over Time',
  className = '',
}) => {
  const chartData = {
    labels: data.map(item => item.month),
    datasets: [
      {
        label: 'Badge Value',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(14, 165, 233, 0.2)',
        borderColor: 'rgba(14, 165, 233, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Courses Completed',
        data: data.map(item => item.coursesCompleted * 100),
        backgroundColor: 'rgba(249, 115, 22, 0.2)',
        borderColor: 'rgba(249, 115, 22, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
      {
        label: 'Projects Completed',
        data: data.map(item => item.projectsCompleted * 150),
        backgroundColor: 'rgba(34, 197, 94, 0.2)',
        borderColor: 'rgba(34, 197, 94, 1)',
        borderWidth: 2,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        mode: 'index',
        intersect: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Card className={`p-6 ${className}`}>
      <h2 className="text-lg font-medium mb-4">{title}</h2>
      <div className="h-80">
        {chartType === 'line' ? (
          <Line data={chartData} options={options} />
        ) : (
          <Bar data={chartData} options={options} />
        )}
      </div>
    </Card>
  );
};

export default PerformanceChart;