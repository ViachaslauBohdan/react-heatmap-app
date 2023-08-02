import { HeatmapProps } from "../widgets";
import { getHeatmapSeries } from "./getHeatmapSeries";

export function getHeatmapChartOptions({
  tableHeaders,
  tableData,
}: HeatmapProps): Highcharts.Options {
  return {
    xAxis: {
      categories: tableHeaders.slice(1),
      title: { text: tableHeaders[0] },
      opposite: false,
    },
    yAxis: {
      categories: tableData.map((data) => data[0] as string),
      reversed: true,
    },
    colorAxis: {
      min: 0,
      minColor: "#ffffff",
      maxColor: "#fa4b42",
    },
    series: [
      {
        type: "heatmap",
        data: getHeatmapSeries({ tableHeaders, tableData }),
        dataLabels: {
          enabled: true,
          color: "#000000",
        },
      },
    ],
  };
}
