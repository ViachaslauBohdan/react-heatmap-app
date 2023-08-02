import { Box } from "@mui/material";
import { HeatmapProps } from "./Heatmap.props";

import * as Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import heatmapModule from "highcharts/modules/heatmap";
import { getChartOptions, getHeatmapChartOptions } from "../../utils";

heatmapModule(Highcharts);

export const HighchartsWidget = (props: HeatmapProps) => {
  const options = getHeatmapChartOptions(props);

  return (
    <Box>
      <HighchartsReact
        highcharts={Highcharts}
        options={getChartOptions(options)}
      />
    </Box>
  );
};
