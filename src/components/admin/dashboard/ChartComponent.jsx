import React, { useState, useEffect } from "react";
import { Spin } from "antd";
import ApexChart from "react-apexcharts";

const ChartComponent = () => {
  const [chartData, setChartData] = useState({
    options: {
      chart: {
        id: "apexchart-example",
      },
      xaxis: {
        categories: [],
      },
    },
    series: [
      {
        name: "Number of Car Sells",
        data: [],
      },
    ],
  });

  const [selectedYearRange, setSelectedYearRange] = useState("2015-2023");
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Set loading to false after 1 second
    }, 1000); // 1 second delay
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      const [startYear, endYear] = selectedYearRange.split("-").map(Number);
      const categories = [];
      const data = [];
      for (let year = startYear; year <= endYear; year++) {
        categories.push(year.toString());
        // Sample logic to generate random number of car sells for each year
        data.push(Math.floor(Math.random() * 200) + 50);
      }
      setChartData({
        ...chartData,
        options: {
          ...chartData.options,
          xaxis: {
            ...chartData.options.xaxis,
            categories,
          },
        },
        series: [
          {
            ...chartData.series[0],
            data,
          },
        ],
      });
    }
  }, [selectedYearRange, loading]);

  const handleYearRangeChange = (e) => {
    setSelectedYearRange(e.target.value);
  };

  return (
    <>
      <h2>Number of Car Sells Over the Years</h2>
      <div>
        <label htmlFor="yearRange">Select Year Range: &nbsp; </label>
        <select
          id="yearRange"
          value={selectedYearRange}
          onChange={handleYearRangeChange}
        >
          <option value="2015-2023">2015-2023</option>
          <option value="2016-2023">2016-2023</option>
          <option value="2017-2023">2017-2023</option>
          {/* Add more options as needed */}
        </select>
      </div>
      <Spin spinning={loading}>
        <ApexChart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width={500}
          height={320}
        />
      </Spin>
    </>
  );
};

export default ChartComponent;
