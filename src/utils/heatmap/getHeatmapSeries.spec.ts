import { getHeatmapSeries } from "./getHeatmapSeries";

const mockProductsData = {
  tableHeaders: ["Product", "Qtr1", "Qtr2", "Qtr3", "Qtr4"],
  tableData: [
    ["Bike Racks", 360, 360, 360, 1474],
    ["483-Bike Rack Standard", 360, 360, 360, 1474],
    ["Accessories", 100, 200, 300, 400],
  ],
};

const expected = [
  [0, 0, 360],
  [1, 0, 360],
  [2, 0, 360],
  [3, 0, 1474],

  [0, 1, 360],
  [1, 1, 360],
  [2, 1, 360],
  [3, 1, 1474],

  [0, 2, 100],
  [1, 2, 200],
  [2, 2, 300],
  [3, 2, 400],
];

describe("getHeatmapSeries", () => {
  it("should get heatmap series", () => {
    const result = getHeatmapSeries(mockProductsData);
    expect(result).toEqual(expected);
  });
});
