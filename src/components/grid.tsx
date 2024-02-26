import { PropsWithChildren } from "react";

import { DndContext, useDroppable } from "@dnd-kit/core";

export type MainGridProps = {} & PropsWithChildren;

export function MainGrid({ children }: MainGridProps) {
  const { isOver, setNodeRef } = useDroppable({
    id: "main-grid",
  });

  const style = {
    opacity: isOver ? 1 : 0.5,
    height: "100vh",
    width: "100%",
    color: "black",
    display: "flex",
  } as React.CSSProperties;

  return (
    <DndContext>
      <div ref={setNodeRef} style={style}>
        {children}
      </div>
    </DndContext>
  );
}
