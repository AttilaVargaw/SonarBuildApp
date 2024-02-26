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
  Element: (props: { label: string }) => ReactElement;
  AddElement: (props: { name: string }) => ReactElement;
  name: string;
};

type ElementInstance = {
  label: string;
  Element: ElementType["Element"];
} & DraggableItemProps;

const addableElements = [
  {
    AddElement: ({ name }) => <div className="circle">{name}</div>,
    Element: ({ label }) => <div className="circle">{label}</div>,
    name: "circle",
  },
  {
    AddElement: ({ name }) => <div className="box">{name}</div>,
    name: "box",
    Element: ({ label }) => <div className="box">{label}</div>,
  },
  {
    AddElement: ({ name }) => (
      <a href="#" className="button blured w-inline-block">
        <div className="button-text">{name}</div>
      </a>
    ),
    name: "button",
    Element: ({ label }) => (
      <a href="#" className="button blured w-inline-block">
        <div className="button-text">{label}</div>
      </a>
    ),
  },
] as ElementType[];

function App() {
  const [elements, setElements] = useState<ElementInstance[]>([]);

  const handleDragEnd = useCallback(
    ({ over, active, delta }: DragEndEvent) => {
      if (over && /add-/.test(active.id.toString())) {
        const newElement = addableElements.find(
          (element) => active.id === `add-${element.name}`
        )!;

        setElements([
          ...elements,
          {
            Element: newElement.Element,
            dragId: `${newElement.name}-${Date.now().toString()}`,
            left: delta.x, // adott cucc fele
            top: delta.y, //- 90,
            label: "Empty",
          },
        ]);
      } else if (/(circle|box|button)-d*/.test(active.id.toString())) {
        const element = elements.find(
          (element) => element.dragId === active.id
        )!;

        setElements([
          ...elements.filter((e) => element.dragId !== e.dragId),
          {
            Element: element.Element,
            dragId: element.dragId,
            left: (element.left ?? 0) + delta.x,
            top: (element.top ?? 0) + delta.y,
            label: element.label,
          },
        ]);
      }
    },
    [elements]
  );

  const mouseSensor = useSensor(MouseSensor, {});
  const touchSensor = useSensor(TouchSensor, {});
  const sensors = useSensors(mouseSensor, touchSensor);

  return (
    <div className="section-inner builder">
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <div className="builder-header">
          {addableElements.map(({ AddElement: HeaderElement, name }) => (
            <DraggableItem key={name} dragId={`add-${name}`}>
              <HeaderElement name={name} />
            </DraggableItem>
          ))}
        </div>
        <div className="builder-body">
          <MainGrid>
            <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
              {elements.map(({ Element, label, ...draggableProps }) => (
                <DraggableItem
                  style={{ position: "absolute" }}
                  key={draggableProps.dragId}
                  {...draggableProps}
                >
                  <Element label={label} />
                </DraggableItem>
              ))}
            </DndContext>
          </MainGrid>
        </div>
      </DndContext>
    </div>
  );
}

export default App;
