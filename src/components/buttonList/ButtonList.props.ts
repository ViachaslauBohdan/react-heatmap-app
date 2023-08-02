import { DataSource } from "./ButtonList.types";

export interface ButtonListProps {
  onButtonClick: (dataSource: DataSource) => void;
}
