import React, { useState } from "react";
import Fields from "./components/fields";

type fieldProps = {
  id: number;
  name: string;
  type: string;
  required: boolean;
  children?: fieldProps;
};

function App() {
  const [field, setField] = useState<fieldProps[]>([
    {
      id: 0,
      name: "person",
      type: "OBJECT",
      required: false,
    },
  ]);

  const handleAdd = () => {
    let obj: fieldProps = {
      id: field.length + 1,
      name: "AddName",
      type: "OBJECT",
      required: false,
    };
    setField([...field, obj]);
  };
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-title">Field name and type</div>
        <div className="card-toolbar" role="button" onClick={handleAdd}>
          <i className="ri-add-circle-line"></i>
        </div>
      </div>
      <div className="card-body">
        <div className="fields">
          {field.map((item: any, index) => {
            return <Fields item={item} index={index} field={field} setField={setField} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
