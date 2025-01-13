'use client';

import React, { useEffect, useRef } from 'react';
import { Chart, ChartConfiguration } from 'chart.js/auto';
import { toPersianDigits } from '@/app/helpers/utils';

// Extend the HTMLCanvasElement to include the `chart` property
interface ChartCanvas extends HTMLCanvasElement {
  chart?: Chart; // Optional property for storing the chart instance
}

export default function Line() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        
        label: 'Dataset',
        data: [810166, 804272, 802533, 799750, 806000, 811888, 816000, 819000, 822437, 818888],
        backgroundColor:"#70d6db",
                      borderColor: "#006CEA",
                      borderWidth: 1,
                      pointBackgroundColor: "#006CEA",
      				  pointBorderColor:"#006CEA",
                      pointRadius: 1,
                      pointBorderWithe:0,
                      pointHoverRadius: 5,
      				  pointHoverBackgroundColor: "#006CEA",
                      pointHoverBorderColor: "#ffffff",
                      pointHoverBorderWidth: 3,
        tension: 0.4,
       
      },
    ],
  };

  const config: ChartConfiguration<'line', number[], unknown> = {
    type: 'line', // Specify the chart type explicitly
    data: data,
    options: {
        
      plugins: {
        legend: {
            display: false
          },
        filler: {
          propagate: false,
        },
        title: {
            display: true,
            text: `تغییرات ${toPersianDigits(30)} روز گذشته دلار` , // Example title
            align: 'end', // Align the title to the right (options: 'start', 'center', 'end')
            font: {
              family: 'IRANYekanXFaNum',
              size: 14,        
              weight: 400,  
            },
            color: '#262626', // Customize the title color
            padding: {
              top: 10,
              bottom: 10,
            },
          },
        tooltip: {
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            boxPadding: 16, 
            caretSize: 0,
          enabled: true, // Enable tooltips on each data point
          callbacks: {
            labelColor: function (context) {
                return {
                    borderColor: "rgba(0, 0, 0, 0.7)",
                    backgroundColor: "rgba(0, 0, 0, 0.7)",
                 borderWidth: 1,
                };
              },
            label: function (tooltipItem) {
                return `${tooltipItem.raw}  ریال `; // Show only the Y value
              },
              title(tooltipItems) {
                  return ""
              },
              
          },
          bodyFont: {
            family: 'IRANYekanXFaNum', // Font family for the body
            size: 14, 
            weight :500,                    // Font size for the body
            style: 'italic',               // Font style for the body
          },
          padding: 16, // Padding inside the tooltip box
        
        },
          
        },
    
      interaction: {
        intersect: true, // Tooltips only show on data points
      },
      scales: {
        x: { 
            ticks: {display: false,},
            grid: {
                display: false, // Remove the title for the Y axis
              },
            title: {
                display: false, // Remove the title for the Y axis
              },
            beginAtZero:false,
            border: {
                display:false,
            }},
        y: {
            ticks: {
                // forces step size to be 5 units
                stepSize: 5000 // <----- This prop sets the stepSize
              },
            suggestedMin: Math.min(...data.datasets[0].data) ,
            
            title: {
                display: false, // Remove the title for the Y axis
              },
            beginAtZero:false,

            border: {
                display:false,
                dash: [5, 5],
            },
          
         
            
              grid: {
                 drawTicks: false,
                 display: true
              } 
         
        },
      },
    },
  };

  const chartRef = useRef<ChartCanvas | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      // Ensure the context is not null
      const context = chartRef.current.getContext('2d');
      if (context) {
        // Destroy the previous chart if it exists
        if (chartRef.current.chart) {
          chartRef.current.chart.destroy();
        }

        // Create a new chart with the context
        const newChart = new Chart(context, config);
        // Store the new chart instance in the canvas element
        chartRef.current.chart = newChart;
      }
    }
  }, []);

  return <canvas ref={chartRef} />;
}
