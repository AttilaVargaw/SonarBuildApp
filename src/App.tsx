import "./App.css";

function App() {
  return (
    <div className="section-inner builder">
      <div className="builder-header">
        <div className="circle"></div>
        <div className="box"></div>
        <a href="#" className="button blured w-inline-block">
          <div className="button-text">Button text</div>
        </a>
      </div>
      <div className="builder-body">
        <div className="build-an-interaction-app"></div>
        <div className="w-layout-vflex slide-text">
          <h1 className="heading-1 white">Build an interaction</h1>
          <div className="w-layout-hflex flex-horizontal">
            <a href="#intro3" className="button w-inline-block w--current">
              <div className="button-text">Next</div>
              <div className="material-icons">arrow_forward</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
