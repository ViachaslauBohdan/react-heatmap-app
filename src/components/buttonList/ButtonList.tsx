import { Button, Stack } from "@mui/material";
import { ButtonListProps } from "./ButtonList.props";
import { ButtonElement } from "./ButtonList.types";

export function ButtonList({ onButtonClick }: ButtonListProps) {
  const buttons: ButtonElement[] = [
    {
      label: "Products",
      slug: "products",
    },
    {
      label: "Regions",
      slug: "regions",
    },
    {
      label: "Versions",
      slug: "versions",
    },
  ];

  return (
    <Stack spacing={2} direction="row">
      {buttons.map(({ label, slug }) => (
        <Button variant="outlined" onClick={() => onButtonClick(slug)}>
          {label}
        </Button>
      ))}
    </Stack>
  );
}
