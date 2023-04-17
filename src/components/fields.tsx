import React, { useState } from "react";

let options = ["OBJECT", "STRING", "NUMBER", "BOOLEAN"];

export default function Fields() {
  const [field, setField] = useState([
    {
      id: 1,
      name: "person",
      type: "OBJECT",
    },
  ]);
  return (
    <div className="fields">
      {field.map((item) => {
        return (
          <div key={item.id} className="field">
            <div className="field-id">{item.id}.</div>
            <div className="field-details">
              <input value={field[item.id - 1].name} />
              <select>
                {options.map((item, index) => {
                  return (
                    <option key={index} value={item}>
                      {item}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
        );
      })}
    </div>
  );
}
