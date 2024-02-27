import styled from "styled-components";

import { addableElements } from "../../../addableElements";
import { DraggableItem } from "../../draggableItem";

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
  return (
    <Container>
      {addableElements.map(({ AddElement: HeaderElement, name }) => (
        <DraggableItem relative key={name} dragId={`add-${name}`}>
          <HeaderElement name={name} />
        </DraggableItem>
      ))}
    </Container>
  );
}
