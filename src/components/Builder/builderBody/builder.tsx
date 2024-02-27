import { PropsWithChildren } from "react";
import styled from "styled-components";

import { useDroppable } from "@dnd-kit/core";

import { useBuilderElements } from "../../../hooks/useBuilderElements";
import { DraggableItem } from "../../draggableItem";

export type BuilderBodyProps = PropsWithChildren;

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: flex;
`;

export function BuilderBody() {
  const { builderElements } = useBuilderElements();

  const { isOver, setNodeRef } = useDroppable({
    id: "builder",
  });

  const style = {
    opacity: isOver ? 1 : 0.5,
    height: "85vh",
    width: "100%",
    color: "black",
    display: "flex",
  } as React.CSSProperties;

  return (
    <Container ref={setNodeRef} style={style}>
      {builderElements.map(({ Element, label, ...draggableProps }) => (
        <DraggableItem key={draggableProps.dragId} {...draggableProps}>
          <Element label={label} />
        </DraggableItem>
      ))}
    </Container>
  );
}
