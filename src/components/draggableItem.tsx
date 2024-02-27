import { PropsWithChildren } from "react";

import { useDraggable, type DraggableSyntheticListeners } from "@dnd-kit/core";
import type { Transform } from "@dnd-kit/utilities";

export enum Axis {
  All,
  Vertical,
  Horizontal,
}

export type DraggableItemProps = {
  dragOverlay?: boolean;
  dragging?: boolean;
  listeners?: DraggableSyntheticListeners;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  position?: Transform | null;
  dragId: string;
  className?: string;
  left?: number;
  top?: number;
  relative?: boolean;
} & PropsWithChildren;

export function DraggableItem({
  dragId,
  style,
  className,
  left,
  top,
  relative,
  ...props
}: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: dragId,
    });

  //

  const transformedStyle =
    transform && isDragging
      ? ({
          ...style,
          transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          position: relative ? "relative" : "absolute",
          cursor: "grabbing",
          left,
          top,
        } as React.CSSProperties)
      : ({
          ...style,
          left,
          top,
          position: relative ? "relative" : "absolute",
        } as React.CSSProperties);

  return (
    <div
      {...props}
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      style={transformedStyle}
      className={className}
    ></div>
  );
}
