import { DISABLE_GRID } from "@/constants";

export const options = {
  tension: 0.4,
  showTooltips: false,
  maintainAspectRatio: false,
  legend: {
    display: false,
  },
  scales: {
    ...DISABLE_GRID,
  },
  elements: {
    point: {
      radius: 0,
      hitRadius: 5,
      hoverRadius: 5,
    },
  },
};
