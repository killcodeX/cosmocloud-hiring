import React, { useState } from "react";

type fieldProps = {
  id: number;
  name: string;
  type: string;
  required: boolean;
  children?: fieldProps;
};

type Iprops = {
  item: fieldProps;
  index: number;
  field: fieldProps[];
  setField: (value: fieldProps[]) => void;
};

let options = ["OBJECT", "STRING", "NUMBER", "BOOLEAN"];

export default function Fields({ item, index, field, setField }: Iprops) {
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

  // This function helps to update required the field
  const handleRequire = (id: number) => {
    let objIndex = field.findIndex((obj) => obj.id === id);
    field[objIndex].required = !field[objIndex].required;
    setField([...field]);
  };

  // This function helps to delete the field
  const handleDelete = (id: number) => {
    let newFields = field.filter((field) => field.id !== id);
    setField(newFields);
  };

  // This function helps to add field inside another field
  const handleFieldAdd = (id: number) => {
    let objIndex = field.findIndex((obj) => obj.id === id);
    let newObj: fieldProps = {
      id: field.length + 1,
      name: "Child",
      type: "OBJECT",
      required: false,
    };

    field[objIndex].children = newObj;
    setField([...field]);
  };
  return (
    <div key={item.id} className="field">
      <div className="field-id">{index + 1}.</div>
      <div className="field-details">
        <div className="field-details-left">
          <div className="form-group">
            <input
              type="text"
              value={field[index].name}
              onChange={(e) => handleInput(e, item.id)}
            />
            {field[index].required && !field[index].name ? (
              <span className="invalid">Field Required!</span>
            ) : null}
          </div>
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
          <div className="switch-componenet">
            <span>Required</span>
            <label className="switch">
              <input
                type="checkbox"
                checked={field[index].required}
                onChange={() => handleRequire(item.id)}
              />
              <span className="slider round"></span>
            </label>
          </div>
          {field[index].type === "OBJECT" ? (
            <div
              className="card-toolbar"
              role="button"
              onClick={() => handleFieldAdd(item.id)}
            >
              <i className="ri-add-circle-line"></i>
            </div>
          ) : null}
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
}
