import { AddableElementProps } from "./addableElementProps";

export function Box({ name }: AddableElementProps) {
  return <div className="box">{name}</div>;
}
