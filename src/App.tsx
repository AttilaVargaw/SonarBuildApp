import "./App.css";

import { Builder } from "./components/Builder/builder";
import { BuilderElementsProvider } from "./hooks/useBuilderElements";

function App() {
  return (
    <div className="section-inner builder">
      <BuilderElementsProvider>
        <Builder />
      </BuilderElementsProvider>
    </div>
  );
}

export default App;
