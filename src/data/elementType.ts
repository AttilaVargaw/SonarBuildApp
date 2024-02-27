import { ReactElement } from "react";

export type ElementType = {
  Element: (props: { label: string }) => ReactElement;
  AddElement: (props: { name: string }) => ReactElement;
  name: string;
};
