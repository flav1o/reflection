import React from "react";
import { SkeletonWrapper } from "@/components";
import Skeleton from "react-loading-skeleton";
import S from "./MetricCard.styles";

import "react-loading-skeleton/dist/skeleton.css";

const MetricCardSkeleton = () => {
  return (
    <SkeletonWrapper>
      <S.CardSkeleton count={1} />
    </SkeletonWrapper>
  );
};

export { MetricCardSkeleton };
