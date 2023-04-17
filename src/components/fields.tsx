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
  // This function helps to update Input the field
  const handleInput = (e: any, id: number) => {
    let objIndex = field.findIndex((obj) => obj.id === id);
    field[objIndex].name = e.target.value;
    setField([...field]);
  };

  // This function helps to update select the field
  const handleSelect = (e: any, id: number) => {
    let objIndex = field.findIndex((obj) => obj.id === id);
    field[objIndex].type = e.target.value;
    setField([...field]);
  };

  // This function helps to delete the field
  const handleDelete = (id: number) => {
    let newFields = field.filter((field) => field.id !== id);
    setField(newFields);
  };
  return (
    <div className="fields">
      {field.map((item: any, index) => {
        console.log(item);
        return (
          <div key={item.id} className="field">
            <div className="field-id">{index + 1}.</div>
            <div className="field-details">
              <div className="field-details-left">
                <input
                  type="text"
                  value={field[index].name}
                  onChange={(e) => handleInput(e, item.id)}
                />
                <select
                  value={field[index].type}
                  onChange={(e) => handleSelect(e, item.id)}
                >
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
