import { AddableElementProps } from "./addableElementProps";

export function Circle({ name }: AddableElementProps) {
  return <div className="circle">{name}</div>;
}
