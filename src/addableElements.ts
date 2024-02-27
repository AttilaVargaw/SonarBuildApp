import { Box } from "./components/Builder/box";
import { Button } from "./components/Builder/button";
import { Circle } from "./components/Builder/circle";
import { Box as AddBox } from "./components/builderHeader/box";
import { Button as AddButton } from "./components/builderHeader/button";
import { Circle as AddCircle } from "./components/builderHeader/circle";
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
