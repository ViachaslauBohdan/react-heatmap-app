import { HeatmapProps } from "../../widgets";
import { getHeatmapSeries } from "./getHeatmapSeries";
import { getMinChartValue } from "./getHeatmapMinChartValue";

export function getHeatmapChartOptions({
  tableHeaders,
  tableData,
}: HeatmapProps): Highcharts.Options {
  return {
    xAxis: {
      categories: tableHeaders.slice(1),
      opposite: false,
    },
    yAxis: {
      title: {
        text: "",
      },
      categories: tableData.map((data) => data[0] as string),
      reversed: true,
    },
    title: {
      text: tableHeaders[0],
    },
    colorAxis: {
      min: getMinChartValue(tableData),
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
