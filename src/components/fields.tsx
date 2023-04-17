import React, { useState } from "react";

type fieldProps = {
  id: number;
  name: string;
  type: string;
};

type Iprops = {
  field: fieldProps[];
  setField: (value: fieldProps[]) => void;
};

let options = ["OBJECT", "STRING", "NUMBER", "BOOLEAN"];

export default function Fields({ field, setField }: Iprops) {
  const handleDelete = (id: number) => {
    let newFields = field.filter(field => field.id !== id)
    setField(newFields)
  };
  return (
    <div className="fields">
      {field.map((item: any, index) => {
        console.log(item)
        return (
          <div key={item.id} className="field">
            <div className="field-id">{index+1}.</div>
            <div className="field-details">
              <div className="field-details-left">
                <input value={field[index].name} />
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
              <div className="field-details-right">
                <div
                  className="delete-field"
                  role="button"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="ri-delete-bin-line"></i>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
