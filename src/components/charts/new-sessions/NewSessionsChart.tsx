import React, { useCallback } from "react";
import { palette } from "@/core/theme";
import S from "./NewSessionsChart.styles";
import { options } from "./NewSessionsChart.config";
import { getTodayPreviousWeekDays } from "@/common/utils";

const NewSessionsChart = () => {
  const { primary } = palette;
  const labels = getTodayPreviousWeekDays();

  const genDataSet = useCallback(
    () => ({
      labels,
      datasets: [
        {
          data: [10, 8, 3, 10, 8, 13, 14],
          borderColor: primary[60],
          backgroundColor: primary[90],
          fill: "origin",
        },
      ],
    }),
    []
  );

  return <S.NewSessionChart options={options} data={genDataSet()} />;
};

export { NewSessionsChart };
