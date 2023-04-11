import React from "react";
import S from "./UserAnalytics.styles";
import {
  DraggableContainer,
  GeographicalChart,
  Main,
  MetricCard,
  NewSessionsChart,
} from "@/components";

const UserAnalytics = () => {
  return (
    <Main>
      <DraggableContainer
        scrollDirection="row"
        style={{ justifyContent: "space-between" }}
      >
        {[...Array(4)].map((_, index) => (
          <MetricCard
            key={index}
            component={<NewSessionsChart />}
            metricValue={10201}
            metricName="Last 12h sessions"
          />
        ))}
      </DraggableContainer>

      <S.GeoChartWrapper style={{ marginTop: "5vh" }}>
        <GeographicalChart />
      </S.GeoChartWrapper>
    </Main>
  );
};

export { UserAnalytics };
