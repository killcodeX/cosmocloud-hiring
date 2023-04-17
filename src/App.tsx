import React, { useState } from "react";
import Fields from "./components/fields";

type fieldProps = {
  id: number;
  name: string;
  type:string;
}

function App() {
  const [field, setField] = useState<fieldProps[]>([
    {
      id: 1,
      name: "person",
      type: "OBJECT",
    },
  ]);
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Field name and type</div>
        <div className="card-toolbar" role="button">
          <i className="ri-add-circle-line"></i>
        </div>
      </div>
      <div className="card-body">
        <Fields field={field} setField={setField} />
      </div>
    </div>
  );
}

export default App;
