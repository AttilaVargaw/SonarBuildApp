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
import { DraggableItem } from "../draggableItem";

export function BuilderHeader() {
  const mouseSensor = useSensor(MouseSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor);

  const { builderElements, setBuilderItems } = useBuilderElements();

  const handleDragEnd = useCallback(
    ({ active, delta }: DragEndEvent) => {
      const element = addableElements.find(
        (element) => element.name === active.id
      )!;

      setBuilderItems([
        ...builderElements,
        {
          Element: element.Element,
          dragId: `${element.name}-${Date.now().toString()}`,
          left: delta.x, // adott cucc fele
          top: delta.y, //- 90,
          label: "Empty",
        },
      ]);
    },
    [builderElements, setBuilderItems]
  );

  return (
    <div className="builder-header">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {addableElements.map(({ AddElement: HeaderElement, name }) => (
          <DraggableItem relative key={name} dragId={name}>
            <HeaderElement name={name} />
          </DraggableItem>
        ))}
      </DndContext>
    </div>
  );
}
