import styled from "styled-components";

import { BuilderelementProps } from "./builderElementProps";

const Container = styled.div`
  width: 60px;
  height: 60px;
  border-style: solid;
  border-width: 1px;
  border-color: var(--white) var(--white) var(--white) #fff;
  /* filter: blur(5px); */
`;

export function Box({ label }: BuilderelementProps) {
  return <Container>{}</Container>;
}
