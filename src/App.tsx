import React from "react";
import Fields from "./components/fields";

function App() {
  return <div className="card">
    <div className="card-header">
      <div className="card-title">Field name and type</div>
    </div>
    <div className="card-body">
      <Fields/>
    </div>
  </div>;
}

export default App;
