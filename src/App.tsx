import "./App.css";

import { DndContext } from "@dnd-kit/core";

import { BuilderBody } from "./components/Builder/builder";
import { BuilderHeader } from "./components/builderHeader/builderHeader";
import { BuilderElementsProvider } from "./hooks/useBuilderElements";

function App() {
  return (
    <div className="section-inner builder">
      <BuilderElementsProvider>
        <DndContext>
          <BuilderHeader />
          <BuilderBody />
        </DndContext>
      </BuilderElementsProvider>
    </div>
  );
}

export default App;
