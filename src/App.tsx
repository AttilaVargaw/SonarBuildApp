import "./App.css";

import { ReactElement, useCallback, useState } from "react";

import {
  DndContext,
  DragEndEvent,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import { DraggableItem, DraggableItemProps } from "./components/draggableItem";
import { MainGrid } from "./components/grid";

type ElementType = {
  Element: (props: unknown) => ReactElement;
  HeaderElement: (props: {
    name: string;
    x: number;
    y: number;
  }) => ReactElement;
  name: string;
};

const addableElements = [
  {
    HeaderElement: ({ name, ...props }) => (
      <DraggableItem {...props} dragId="add-Circle" className="circle">
        <div id="add-circle" className="circle">
          {name}
        </div>
      </DraggableItem>
    ),
    name: "New-Circle",
  },
  {
    HeaderElement: ({ name, ...props }) => (
      <DraggableItem {...props} dragId="add-box" className="box">
        {name}
      </DraggableItem>
    ),
    name: "New-Box",
  },
  {
    HeaderElement: ({ name, ...props }) => (
      <DraggableItem {...props} dragId="add-Box" className="button">
        <a href="#" id="add-button" className="button blured w-inline-block">
          <div className="button-text">{name}</div>
        </a>
      </DraggableItem>
    ),
    name: "New-Button",
  },
] as ElementType[];

function App() {
  const [elements, setElements] = useState<
    ({ Element: ElementType["Element"] } & DraggableItemProps)[]
  >([]);

  const handleDragEnd = useCallback(({ over, active, delta }: DragEndEvent) => {
    if (over) {
      const newElement = addableElements.find(
        (element) => element.name === active.id
      )!;

      setElements([
        ...elements,
        {
          Element: newElement.Element,
          dragId: Date.now().toString(),
          x: (active.rect.current.initial?.left ?? 0) + delta.x,
          y: (active.rect.current.initial?.top ?? 0) + delta.y,
        },
      ]);
    }
  }, []);

  const mouseSensor = useSensor(MouseSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <div className="section-inner builder">
      <DndContext
        sensors={sensors}
        onDragEnd={handleDragEnd}
        onDragStart={() => console.log("drag")}
      >
        <div className="builder-header">
          {addableElements.map(({ HeaderElement, name }) => (
            <HeaderElement key={name} name={name} x={0} y={0} />
          ))}
        </div>
        <div className="builder-body">
          <MainGrid id="main-grid">
            {elements.map(({ Element, ...draggableProps }) => (
              <DraggableItem key={draggableProps.dragId} {...draggableProps}>
                {<Element />}
              </DraggableItem>
            ))}
          </MainGrid>
        </div>
      </DndContext>
    </div>
  );
}

export default App;
