import { useCallback } from "react";

import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { addableElements } from "../../addableElements";
import { useBuilderElements } from "../../hooks/useBuilderElements";
import { BuilderBody } from "./builderBody/builder";
import { BuilderHeader } from "./builderHeader/builderHeader";

export function Builder() {
  const mouseSensor = useSensor(MouseSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor);

  const { builderElements, setBuilderItems } = useBuilderElements();

  const handleDragEnd = useCallback(
    ({ active, delta, over, activatorEvent }: DragEndEvent) => {
      console.log(active.id, over?.id);
      if (over) {
        if (/add-.*/.test(active.id.toString()) && over.id === "builder") {
          const element = addableElements.find(
            (element) => `add-${element.name}` === active.id
          );

          const { top, left } = (
            activatorEvent.target as Element
          ).getBoundingClientRect();

          const lenght =
            active.rect.current.initial!.left -
            active.rect.current.initial!.top;

          const height =
            active.rect.current.initial!.bottom -
            active.rect.current.initial!.top;

          console.log(lenght, height);

          element &&
            active.rect.current.initial &&
            setBuilderItems([
              ...builderElements,
              {
                Element: element.Element,
                dragId: `${element.name}-${Date.now().toString()}`,
                left,
                top,
                label: "Empty",
              },
            ]);
        } else if (
          over?.id === "builder" &&
          /(box|circle|button)-d*/.test(active.id.toString())
        ) {
          const element = builderElements.find(
            (element) => element.dragId === active.id
          )!;

          element &&
            setBuilderItems([
              ...builderElements.filter((e) => element.dragId !== e.dragId),
              {
                Element: element.Element,
                dragId: element.dragId,
                left: (element.left ?? 0) + delta.x,
                top: (element.top ?? 0) + delta.y,
                label: element.label,
              },
            ]);
        }
      }
    },
    [builderElements, setBuilderItems]
  );

  return (
    <DndContext onDragEnd={handleDragEnd} sensors={sensors}>
      <BuilderHeader />
      <BuilderBody />
    </DndContext>
  );
}
