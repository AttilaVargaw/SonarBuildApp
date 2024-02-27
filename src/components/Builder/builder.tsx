import { PropsWithChildren, useCallback } from "react";

import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { useBuilderElements } from "../../hooks/useBuilderElements";
import { DraggableItem } from "../draggableItem";

export type BuilderBodyProps = PropsWithChildren;

export function BuilderBody() {
  const { builderElements, setBuilderItems } = useBuilderElements();

  const { isOver, setNodeRef } = useDroppable({
    id: "main-grid",
  });

  const style = {
    opacity: isOver ? 1 : 0.5,
    height: "80vh",
    width: "100%",
    color: "black",
    display: "flex",
  } as React.CSSProperties;

  const handleDragEnd = useCallback(
    ({ active, delta }: DragEndEvent) => {
      const element = builderElements.find(
        (element) => element.dragId === active.id
      )!;

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
    },
    [builderElements, setBuilderItems]
  );

  const mouseSensor = useSensor(MouseSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <div className="builder-body" ref={setNodeRef} style={style}>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {builderElements.map(({ Element, label, ...draggableProps }) => (
          <DraggableItem key={draggableProps.dragId} {...draggableProps}>
            <Element label={label} />
          </DraggableItem>
        ))}
      </DndContext>
    </div>
  );
}
