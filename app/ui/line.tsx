import React, { useEffect, useRef, useState } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { toPersianDigits } from '@/app/helpers/utils';

interface ChartCanvas extends HTMLCanvasElement {
  chart?: Chart;
}
const Mock= [1000000, 1000000, 1000000, 1000000, 1000000, 811888, 816000, 819000, 822437, 818888]

export default function Line({ data }: { data: Array<Number> }) {
  const chartRef = useRef<ChartCanvas | null>(null);
  const [chartData, setChartData] = useState({
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Dataset',
        data:Mock,
        backgroundColor: "#70d6db",
        borderColor: "#006CEA",
        borderWidth: 1,
        pointBackgroundColor: "#006CEA",
        pointBorderColor: "#006CEA",
        pointRadius: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#006CEA",
        pointHoverBorderColor: "#ffffff",
        pointHoverBorderWidth: 3,
        tension: 0.4,
      },
    ],
  });

  useEffect(() => {
    if (data && data.length) {
      const series = [] as any;
      data.map((value: any) =>{
        series.push(value)})
      console.log(series,"data")
      setChartData({
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Dataset',
            data: series,
            backgroundColor: "#70d6db",
            borderColor: "#006CEA",
            borderWidth: 1,
            pointBackgroundColor: "#006CEA",
            pointBorderColor: "#006CEA",
            pointRadius: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#006CEA",
            pointHoverBorderColor: "#ffffff",
            pointHoverBorderWidth: 3,
            tension: 0.4,
          },
        ],
      });
    }
    
  
  }, [data]);

  useEffect(() => {
    if (chartRef.current) {
      const context = chartRef.current.getContext('2d');
      if (context) {
        // Destroy the previous chart if it exists
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        // Create a new chart instance with updated data
        const config: ChartConfiguration<'line', number[], string> = {
          type: 'line',
          data: chartData,
          options: {
            plugins: {
              legend: { display: false },
              title: {
                display: true,
                text: `تغییرات ${toPersianDigits(30)} روز گذشته دلار`,
                align: 'end',
                font: { family: 'IRANYekanXFaNum', size: 14, weight: 400 },
                color: '#262626',
                padding: { top: 10, bottom: 10 },
              },
              tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                callbacks: {
                  label: (tooltipItem) => `${tooltipItem.raw}  ریال`,
                  title: () => '',
                },
                bodyFont: { family: 'IRANYekanXFaNum', size: 14, weight: 500, style: 'italic' },
                padding: 16,
              },
            },
            interaction: { intersect: true },
            scales: {
              x: {
                ticks: { display: false },
                grid: { display: false },
                border: { display: false },
              },
              y: {
            
                ticks: { stepSize: 5000,
                  callback: function (tickValue: string | number) {
                    return toPersianDigits(tickValue.toString());
                  },
                 },
                title: { display: false },
                border: { display: false, dash: [5, 5] },
                grid: { drawTicks: false, display: true },
              },
            },
          },
        };

        // Create a new chart instance
        const newChart = new Chart(context, config);
        chartRef.current.chart = newChart;
      }
    }
  }, [chartData]);

  return <canvas ref={chartRef} />;
}
