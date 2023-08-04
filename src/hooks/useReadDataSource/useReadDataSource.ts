import { useState } from "react";

import * as dataSourceVersions from "../../dataSources/versions.json";
import * as dataSourceProducts from "../../dataSources/products.json";
import * as dataSourceRegions from "../../dataSources/regions.json";
import { DataSource } from "./useReadDataSource.types";

const dataSourceMatrix: { [key in DataSource]: any } = {
  versions: dataSourceVersions,
  products: dataSourceProducts,
  regions: dataSourceRegions,
};

export function useReadDataSource() {
  const [dataSourceSelected, setDataSource] = useState<DataSource>("versions");

  const onButtonClick = (dataSource: DataSource) => {
    setDataSource(dataSource);
  };

  const dataSource = dataSourceMatrix[dataSourceSelected];

  return {
    dataSourceSelected,
    dataSource,
    onButtonClick,
  };
}
