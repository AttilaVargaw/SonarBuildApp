import { PropsWithChildren, createContext, useContext, useState } from "react";

import { ElementInstance } from "../data/elementInstance";

const Context = createContext<{
  builderElements: ElementInstance[];
  setBuilderItems: React.Dispatch<React.SetStateAction<ElementInstance[]>>;
}>({ builderElements: [], setBuilderItems: () => undefined });

export function BuilderElementsProvider({ children }: PropsWithChildren) {
  const [builderElements, setBuilderItems] = useState([] as ElementInstance[]);

  return (
    <Context.Provider value={{ builderElements, setBuilderItems }}>
      {children}
    </Context.Provider>
  );
}

export function useBuilderElements() {
  return useContext(Context);
}
