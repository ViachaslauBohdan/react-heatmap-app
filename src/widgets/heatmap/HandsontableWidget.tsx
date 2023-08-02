import { HeatmapProps } from "./Heatmap.props";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";

registerAllModules();

export const HandsontableWidget = ({
  tableHeaders,
  tableData,
}: HeatmapProps) => {
  return (
    <HotTable
      data={[tableHeaders, ...tableData]}
      rowHeaders={true}
      colHeaders={true}
      height="auto"
      licenseKey="non-commercial-and-evaluation"
    />
  );
};
