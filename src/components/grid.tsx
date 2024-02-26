import { PropsWithChildren, useState } from "react";

import { DragOverlay, useDroppable } from "@dnd-kit/core";

export type MainGridProps = {
  id: string;
} & PropsWithChildren;

export function MainGrid({ id, children }: MainGridProps) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  const [activeId, setActiveId] = useState(null);

  const style = {
    opacity: isOver ? 1 : 0.5,
    height: "100vh",
    width: "100%",
    color: "black",
  };

  return (
    <div ref={setNodeRef} style={style}>
      {children}
    </div>
  );
}
