import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

const data = [
  { quarter: 1, earnings: 23000 },
  { quarter: 2, earnings: 10050 },
  { quarter: 3, earnings: 90250 },
  { quarter: 4, earnings: 49000 }
];
  
export default function MaterialChartPage() {
  return (
    <VictoryChart
    // domainPadding will add space to each side of VictoryLine to
    // prevent it from overlapping the axis
      domainPadding={20}
    >
      <VictoryAxis
      // tickValues specifies both the number of ticks and where
      // they are placed on the axis
        tickValues={[1, 2, 3, 4]}
        tickFormat={['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4']}
      />
      <VictoryAxis
        dependentAxis
      // tickFormat specifies how ticks should be displayed
        tickFormat={(x) => (`$${x / 1000}k`)}
      />
      <VictoryLine
        data={data}
        x="quarter"
        y="earnings"
      />
    </VictoryChart>

  );
}
