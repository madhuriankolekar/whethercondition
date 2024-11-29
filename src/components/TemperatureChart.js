import React from 'react';
import { Line } from 'react-chartjs-2';

const TemperatureChart = ({ data }) => {
  return (
    <div className="temperature-chart">
      <h3>3-Day Temperature Forecast</h3>
      <Line data={data} />
    </div>
  );
};

export default TemperatureChart;
