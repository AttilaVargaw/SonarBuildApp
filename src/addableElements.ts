import { Box } from "./components/Builder/builderBody/box";
import { Button } from "./components/Builder/builderBody/button";
import { Circle } from "./components/Builder/builderBody/circle";
import { Box as AddBox } from "./components/Builder/builderHeader/box";
import { Button as AddButton } from "./components/Builder/builderHeader/button";
import { Circle as AddCircle } from "./components/Builder/builderHeader/circle";
import { ElementType } from "./data/elementType";

export const addableElements = [
  {
    AddElement: AddCircle,
    Element: Circle,
    name: "circle",
  },
  {
    AddElement: AddBox,
    name: "box",
    Element: Box,
  },
  {
    AddElement: AddButton,
    name: "button",
    Element: Button,
  },
] as readonly ElementType[];
