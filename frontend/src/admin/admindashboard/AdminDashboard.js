import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, PointElement, LinearScale, LineElement, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin
import './AdminDashboard.css'; 
import AdminSidebar from '../adminsidebar/AdminSidebar';

ChartJS.register(CategoryScale, LinearScale, PointElement, BarElement, LineElement, Title, Tooltip, Legend, ArcElement, ChartDataLabels);

const AdminDashboard = () => {
  const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Students Enrolled',
        backgroundColor: 'rgba(75,192,192,0.6)', 
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
        type: 'bar', 
        hoverBackgroundColor: 'rgba(75,192,192,1)',
      },
      {
        label: 'Target Enrollment',
        data: [50, 70, 60, 90, 80, 75, 50], 
        borderColor: 'rgba(255, 99, 132, 1)', 
        backgroundColor: 'transparent',
        borderWidth: 3,
        fill: false, 
        type: 'line',
      },
    ],
  };

  const optionsBar = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Students Enrolled vs Target Enrollment',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.dataset.label + ': ' + tooltipItem.raw;
          },
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const dataDoughnut = {
    labels: ['Students', 'Resources', 'References'],
    datasets: [
      {
        data: [200, 150, 100],
        backgroundColor: [
          'rgba(224, 82, 82, 0.6)', 
          'rgba(82, 122, 224, 0.6)',
          'rgba(224, 82, 217, 0.6)',
        ],
        hoverBackgroundColor: [
          'rgba(224, 82, 82, 1)', 
          'rgba(82, 122, 224, 1)',
          'rgba(224, 82, 217, 1)',
        ],
      },
    ],
  };

  const optionsDoughnut = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Resource Distribution',
      },
      datalabels: {
        color: 'black',
        formatter: (value, context) => {
          return context.chart.data.labels[context.data];
        },
      },
    },
  };

  return (
    <>
      <AdminSidebar />
      <div className="dashboard">
        <div className='header'>
          <h2>Admin Dashboard</h2>
        </div>
        <div className="stats">
          <div className="stat" id='stat1'>
            Students: 200
            <a href="/admin/students" className="stat-link">
              <img src='https://cdn-icons-png.flaticon.com/128/271/271228.png' alt=' none' width={20} height={20} />
            </a>
          </div>
          <div className="stat" id='stat3'>
            Resources: 150
            <a href="/admin/resources" className="stat-link">
              <img src='https://cdn-icons-png.flaticon.com/128/271/271228.png' alt='none' width={20} height={20} />
            </a>
          </div>
          <div className="stat" id='stat4'>
            References: 100
            <a href="/admin/references" className="stat-link">
              <img src='https://cdn-icons-png.flaticon.com/128/271/271228.png' alt='none' width={20} height={20} />
            </a>
          </div>
        </div>

        <div className="charts">
          <div className="chart" style={{ width: '33%' }}>
            <h3>Website Data</h3>
            <Doughnut data={dataDoughnut} options={optionsDoughnut} />
          </div>
          <div className="chart" style={{ width: '60%' }}>
            <h3>Students Enrolled</h3>
            <Bar data={dataBar} options={optionsBar} />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;