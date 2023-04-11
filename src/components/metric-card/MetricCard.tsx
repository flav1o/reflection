import React, { FC } from "react";
import S from "./MetricCard.styles";
import { PropTypes } from "./MetricCard.types";
import { MetricCardSkeleton, Typography } from "@/components";
import {
  TypographyVariant,
  TypographyWeight,
} from "@/components/typography/Typography.types";

const MetricCard: FC<PropTypes> = ({
  metricValue,
  metricName,
  component,
  isLoading,
}) => {
  if (isLoading) {
    return <MetricCardSkeleton />;
  }

  return (
    <S.Card>
      <S.Content>
        <Typography
          variant={TypographyVariant.H1}
          weight={TypographyWeight.SEMI_BOLD}
          content={metricValue}
        />
        <Typography variant={TypographyVariant.SPAN} content={metricName} />
      </S.Content>
      <S.Component>{component}</S.Component>
    </S.Card>
  );
};

export { MetricCard };
