import React, { useState } from "react";
import ApexChart from "react-apexcharts"; // Renamed to ApexChart to avoid conflict

const ChartComponent = () => {
  // Renamed to ChartComponent
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "series-1",
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
      },
    ],
  });

  return (
    <>
      <h2>Hello</h2>
      <ApexChart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        width={500}
        height={320}
      />
    </>
  );
};

export default ChartComponent; // Export the component with the new name
