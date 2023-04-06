import React from "react";
import Chart from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["PT", 200],
  ["ES", 0],
];

const GeographicalChart = () => {
  return <Chart chartType="GeoChart" data={data} width="100%" height="100%" />;
};

export { GeographicalChart };
