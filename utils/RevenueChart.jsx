import React, { useRef } from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const RevenueChart = () => {
  const chartRef = useRef(null)

  // Chart Data
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        label: 'Monthly Data',
        backgroundColor: function (context) {
          const chart = context.chart
          const { ctx, chartArea } = chart

          if (!chartArea) return

          // Gradients for specific bars
          const gradientMar = ctx.createLinearGradient(
            0,
            0,
            0,
            chartArea.height
          )
          gradientMar.addColorStop(0, '#33C600')
          gradientMar.addColorStop(1, '#CDF4FF')

          const gradientJun = ctx.createLinearGradient(
            0,
            0,
            0,
            chartArea.height
          )
          gradientJun.addColorStop(0, '#B8B7FF')
          gradientJun.addColorStop(1, '#6C5DD3')

          const gradientOct = ctx.createLinearGradient(
            0,
            0,
            0,
            chartArea.height
          )
          gradientOct.addColorStop(0, '#FF4CE2')
          gradientOct.addColorStop(1, '#FFB7F5')

          const backgroundColors = [
            '#E6E8F0', // Jan
            '#E6E8F0', // Feb
            gradientMar, // Mar
            '#E6E8F0', // Apr
            '#E6E8F0', // May
            gradientJun, // Jun
            '#E6E8F0', // Jul
            '#E6E8F0', // Aug
            '#E6E8F0', // Sep
            gradientOct, // Oct
            '#E6E8F0', // Nov
            '#E6E8F0', // Dec
          ]

          return backgroundColors[context.dataIndex]
        },
        data: [
          1850, 4700, 3540, 1800, 3530, 4800, 3440, 4700, 1440, 3540, 1840,
          3540,
        ],
        barPercentage: 0.8,
        categoryPercentage: 0.8,
      },
    ],
  }

  // Chart Options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable default legend, custom one will be used
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide grid lines
        },
        ticks: {
          font: {
            size: 12,
          },
         
        },
        border: {
          display: false, // Remove bottom border
        },
      },
      y: {
        display: false, // Completely hide the y-axis and ticks
      },
    },
    elements: {
      bar: {
        borderRadius: {
          topLeft: 6,
          topRight: 6,
          bottomLeft: 6,
          bottomRight: 6,
        },
        borderSkipped: false, // Ensure no bottom line on bars
      },
    },
  }

  // Custom Legend
  const renderCustomLegend = () => {
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '16px',
          marginTop: '20px',
        }}
      >
        {/* Pending */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              background:
                'linear-gradient(283.95deg, #0049C6 -12.57%, #CDF4FF 126.88%)',
              borderRadius: '4px',
            }}
          ></div>
          <span style={{ fontSize: '12px', color: '#000' }}>Pending (10%)</span>
        </div>

        {/* Income */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              background: 'linear-gradient(135deg, #FFB7F5 0%, #6C5DD3 100%)',
              borderRadius: '4px',
            }}
          ></div>
          <span style={{ fontSize: '12px', color: '#000' }}>Income</span>
        </div>

        {/* Expense */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div
            style={{
              width: '12px',
              height: '12px',
              background:
                'linear-gradient(333.01deg, #FF754C -23.54%, #FFB7F5 173.81%)',
              borderRadius: '4px',
            }}
          ></div>
          <span style={{ fontSize: '12px', color: '#000' }}>Expense</span>
        </div>
      </div>
    )
  }

  return (
    <div style={{ width: '100%', height: '161px', margin: '0 auto' }}>
      <Bar ref={chartRef} data={data} options={options} />
      {renderCustomLegend()}
    </div>
  )
}

export default RevenueChart
