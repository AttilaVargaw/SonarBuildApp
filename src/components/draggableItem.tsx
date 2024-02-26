import classNames from "classnames";
import { PropsWithChildren, forwardRef, useState } from "react";

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
  transform?: Transform | null;
  dragId: string;
  y: number;
  x: number;
  className?: string;
} & PropsWithChildren;

export function DraggableItem({
  dragId,
  style,
  className,
  ...props
}: DraggableItemProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragId,
  });

  const transformedStyle = transform
    ? {
        ...style,
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      style={transformedStyle}
      className={className}
      {...listeners}
      {...attributes}
      {...props}
    ></div>
  );
}
