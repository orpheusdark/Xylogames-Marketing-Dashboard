import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics: React.FC = () => {
  const data = {
    labels: ['Game 1', 'Game 2', 'Game 3', 'Game 4', 'Game 5'],
    datasets: [
      {
        label: 'Downloads',
        data: [12000, 19000, 3000, 5000, 2000],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
      {
        label: 'Revenue ($)',
        data: [15000, 25000, 5000, 8000, 3000],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Game Performance',
      },
    },
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-2xl font-semibold text-gray-900">Analytics</h1>
      <div className="mt-8">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default Analytics;

