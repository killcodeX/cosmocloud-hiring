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
      id: 0,
      name: "person",
      type: "OBJECT",
    },
  ]);

  const handleAdd = () => {
    let obj = {
      id:field.length+1,
      name:"AddName",
      type:"String"
    }
    setField([...field, obj])
  }
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Field name and type</div>
        <div className="card-toolbar" role="button" onClick={handleAdd}>
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
