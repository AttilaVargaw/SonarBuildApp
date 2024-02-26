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
} & PropsWithChildren;

export function DraggableItem({
  dragId,
  style,
  className,
  position,
  left,
  top,
  ...props
}: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragId,
  });

  const transformedStyle = transform
    ? ({
        ...style,
        transform: `translate3d(${transform.x + (left ?? 0)}px, ${
          transform.y + (top ?? 0)
        }px, 0)`,
        position: "relative",
      } as React.CSSProperties)
    : ({
        ...style,
        left,
        top,
        position: "relative",
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
