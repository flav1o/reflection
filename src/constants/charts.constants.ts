export const NO_LEGEND = { legend: { position: "none" } };

export const NO_V_AXIS = {
  vAxis: { gridlines: { color: "none" } },
};
export const NO_H_AXIS = {
  hAxis: { gridlines: { color: "none" } },
};

export const NO_AXIS = { ...NO_V_AXIS, ...NO_H_AXIS };

export const FULL_AREA_CHART = {
  chartArea: { width: "100%", height: "100%" },
};

export const NO_BOTTOM_LINE = {
  series: {
    0: {
      lineWidth: 0,
    },
  },
};
