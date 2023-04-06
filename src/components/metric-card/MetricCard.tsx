import React, { FC } from "react";
import S from "./MetricCard.styles";
import { PropTypes } from "./MetricCard.types";
import { Typography } from "@/components";
import { TypographyVariant } from "@/components/typography/Typography.types";

const MetricCard: FC<PropTypes> = ({ metricValue, metricName, component }) => {
  return (
    <S.Card>
      <div>
        <Typography variant={TypographyVariant.H4}>{metricValue}</Typography>
        <Typography variant={TypographyVariant.SPAN}>{metricName}</Typography>
      </div>
      <div>{component}</div>
    </S.Card>
  );
};

export { MetricCard };
