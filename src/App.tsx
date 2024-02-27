import "./App.css";

import { BuilderBody } from "./components/Builder/builder";
import { BuilderHeader } from "./components/builderHeader/builderHeader";
import { BuilderElementsProvider } from "./hooks/useBuilderElements";

function App() {
  return (
    <div className="section-inner builder">
      <BuilderElementsProvider>
        <BuilderHeader />
        <BuilderBody />
      </BuilderElementsProvider>
    </div>
  );
}

export default App;
