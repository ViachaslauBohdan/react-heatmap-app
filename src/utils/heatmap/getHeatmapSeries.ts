import { HeatmapProps } from "../../widgets";

type HeatmapSerieItem = [number, number, number];
type HeatmapSeries = Array<HeatmapSerieItem>;

export function getHeatmapSeries(props: HeatmapProps) {
  const lastColumnIndex = props.tableHeaders.length - 1;
  const lastRowIndex = props.tableData.length;

  const heatmapSeries: HeatmapSeries = [];

  for (let row = 0; row < lastRowIndex; row++) {
    for (let column = 0; column < lastColumnIndex; column++) {
      const value = props.tableData[row][column + 1];
      const heatmapSerie: HeatmapSerieItem = [column, row, value as number];

      heatmapSeries.push(heatmapSerie);
    }
  }

  return heatmapSeries;
}
