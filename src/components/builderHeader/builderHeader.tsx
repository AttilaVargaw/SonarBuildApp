import { useCallback } from "react";
import styled from "styled-components";

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

const Container = styled.div`
  width: 100%;
  height: 90px;
  grid-column-gap: 46px;
  grid-row-gap: 46px;
  border-style: none none solid;
  border-width: 1px;
  border-color: var(--white);
  align-items: center;
  margin-left: 0;
  margin-right: 0;
  padding-bottom: 0;
  padding-left: 60px;
  padding-right: 60px;
  display: flex;
`;

export function BuilderHeader() {
  const mouseSensor = useSensor(MouseSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor);

  const { builderElements, setBuilderItems } = useBuilderElements();

  const handleDragEnd = useCallback(
    ({ active, delta, collisions }: DragEndEvent) => {
      const element = addableElements.find(
        (element) => element.name === active.id
      )!;

      console.log(collisions);

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
    <Container>
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        {addableElements.map(({ AddElement: HeaderElement, name }) => (
          <DraggableItem relative key={name} dragId={name}>
            <HeaderElement name={name} />
          </DraggableItem>
        ))}
      </DndContext>
    </Container>
  );
}
