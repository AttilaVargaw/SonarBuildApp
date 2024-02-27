import { BuilderelementProps } from "./builderElementProps";

export function Button({ label }: BuilderelementProps) {
  return (
    <a href="#" className="button blured w-inline-block">
      <div className="button-text">{label}</div>
    </a>
  );
}
