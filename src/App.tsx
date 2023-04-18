import React, { useState } from "react";
import Fields from "./components/fields";
import { useId } from "react";

interface fieldProps {
  id: string;
  name: string;
  type: string;
  required: boolean;
  level: number;
  children: Array<fieldProps>;
}

function App() {

  const fieldId = useId()
  const [field, setField] = useState<fieldProps[]>([
    {
      id: '0',
      name: "person",
      type: "OBJECT",
      required: false,
      level: 0,
      children: [
        {
          id: '10',
          name: "children1",
          type: "STRING",
          required: false,
          level: 1,
          children: [],
        },
        {
          id: '20',
          name: "children2",
          type: "NUMBER",
          required: false,
          level: 1,
          children: [
            {
              id: '30',
              name: "children2",
              type: "STRING",
              required: false,
              level: 2,
              children: [],
            },
          ],
        },
      ],
    },
  ]);

  const handleAdd = () => {
    let obj: fieldProps = {
      id: '40',
      name: "AddName",
      type: "OBJECT",
      required: false,
      level: 0,
      children: [],
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
            return (
              <Fields
                key={item.id}
                item={item}
                index={index}
                field={field}
                setField={setField}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
