import React, { useState } from "react";

type fieldProps = {
    id: number;
    name: string;
    type:string;
}

type Iprops = {
    field: fieldProps[];
    setField: (value: fieldProps[]) => void;
}

let options = ["OBJECT", "STRING", "NUMBER", "BOOLEAN"];

export default function Fields({field, setField}:Iprops) {
  
  return (
    <div className="fields">
      {field.map((item:any) => {
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
