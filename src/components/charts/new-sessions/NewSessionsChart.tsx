import React from "react";
import Chart from "react-google-charts";
import {
  FULL_AREA_CHART,
  NO_AXIS,
  NO_BOTTOM_LINE,
  NO_LEGEND,
} from "@/constants";
import { palette } from "@/core/theme";

const { primary } = palette;

const DUMMY = [
  ["Duration", "07:00 - 08:00", { role: "style" }],
  ["", 1000, primary[40]],
  ["", 1170, primary[40]],
  ["", 640, primary[40]],
  ["", 1030, primary[40]],
  ["", 1000, primary[40]],
  ["", 1170, primary[40]],
  ["", 640, primary[40]],
  ["", 1030, primary[40]],
  ["", 1030, primary[40]],
  ["", 110, primary[40]],
  ["", 100, primary[40]],
  ["", 1020, primary[40]],
];

const NewSessionsChart = () => {
  return (
    <>
      <Chart
        chartType="ColumnChart"
        data={DUMMY}
        options={{
          ...NO_LEGEND,
          ...NO_AXIS,
          ...FULL_AREA_CHART,
          ...NO_BOTTOM_LINE,
          bar: { groupWidth: "40%" },
        }}
        style={{
          width: "100%",
          height: "10vh",
        }}
      />
    </>
  );
};

export { NewSessionsChart };
