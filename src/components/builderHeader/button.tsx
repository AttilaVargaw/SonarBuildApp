import { AddableElementProps } from "./addableElementProps";

export function Button({ name }: AddableElementProps) {
  return (
    <a href="#" className="button blured w-inline-block">
      <div className="button-text">{name}</div>
    </a>
  );
}
