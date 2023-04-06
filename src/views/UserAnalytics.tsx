import React from "react";
import {
  GeographicalChart,
  Main,
  MetricCard,
  NewSessionsChart,
  Typography,
} from "@/components";

const UserAnalytics = () => {
  return (
    <>
      <Main
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-around",
          height: "30vh",
        }}
      >
        <MetricCard
          component={<NewSessionsChart />}
          metricValue={10201}
          metricName="Last 12h sessions"
        />
        <MetricCard
          component={<NewSessionsChart />}
          metricValue={10201}
          metricName="Last 12h sessions"
        />
        <MetricCard
          component={<NewSessionsChart />}
          metricValue={10201}
          metricName="Last 12h sessions"
        />
        <MetricCard
          component={<NewSessionsChart />}
          metricValue={10201}
          metricName="Last 12h sessions"
        />
      </Main>
      <GeographicalChart />
    </>
  );
};

export { UserAnalytics };
