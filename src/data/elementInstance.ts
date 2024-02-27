import { DraggableItemProps } from "../components/draggableItem";
import { ElementType } from "./elementType";

export type ElementInstance = {
  label: string;
  Element: ElementType["Element"];
} & DraggableItemProps;
