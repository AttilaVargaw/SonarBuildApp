import styled from "styled-components";

import { BuilderelementProps } from "./builderElementProps";

const Container = styled.div`
  width: 60px;
  height: 60px;
  border: 1px solid var(--white);
  border-style: solid;
  border-width: 1px;
  /* filter: blur(5px); */
  border-radius: 70px;
`;

export function Circle({ label }: BuilderelementProps) {
  return <Container></Container>;
}