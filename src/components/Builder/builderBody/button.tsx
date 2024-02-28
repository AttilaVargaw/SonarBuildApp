import styled from "styled-components";

import { BuilderelementProps } from "./builderElementProps";

const Container = styled.a`
  width: auto;
  grid-column-gap: 10px;
  color: var(--white);
  border: 1px solid #fff;
  border-radius: 60px;
  flex: 0 auto;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  text-decoration: none;

  display: flex;

  &:hover {
    border-color: var(--blue);
    background-color: var(--blue);
    /*filter: blur();*/
  }

  &:focus {
    border-color: var(--blue);
    outline-offset: 2px;
    outline: 4px solid rgba(0, 0, 255, 0.6);
  }

  &.secondary {
    background-color: rgba(255, 255, 255, 0.1);
    border-style: solid;
    border-color: rgba(255, 255, 255, 0.1);
  }

  &.blured {
    /* filter: blur(10px); */
  }

  &.blured:hover {
    /* filter: blur(); */
  }
`;

const Text = styled.div`
  color: #fff;
  margin-top: 0;
  margin-bottom: 0;
  font-family: Neuemontreal, sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 100%;
  text-decoration: none;
`;

export function Button({ label }: BuilderelementProps) {
  return (
    <Container>
      <Text>{label}</Text>
    </Container>
  );
}
