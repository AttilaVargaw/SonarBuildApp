import { BuilderelementProps } from "./builderElementProps";

export function Box({ label }: BuilderelementProps) {
  return <div className="box">{label}</div>;
}
