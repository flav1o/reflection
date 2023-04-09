import React from "react";
import { palette } from "@/core/theme";
import Chart from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["PT", 200],
  ["ES", 0],
];

const GeographicalChart = () => {
  const { background } = palette;

  return (
    <Chart
      chartType="GeoChart"
      data={data}
      options={{
        backgroundColor: background[90],
      }}
      height="100%"
      width="100%"
    />
  );
};

export { GeographicalChart };
