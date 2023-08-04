import { HeatmapProps } from "../widgets";

export function getMinChartValue(tableData: HeatmapProps["tableData"]) {
  let min = tableData[0][1];

  for (let i = 0; i < tableData.length; i++) {
    for (let j = 1; j < tableData[i].length; j++) {
      if (tableData[i][j] < min) {
        min = tableData[i][j];
      }
    }
  }

  return min as number;
}
