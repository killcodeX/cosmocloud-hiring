import { useId } from "react";
import React, { useState } from "react";

interface fieldProps {
  id: string;
  name: string;
  type: string;
  required: boolean;
  level: number;
  children: Array<fieldProps>;
}

interface Iprops {
  item: fieldProps;
  index: number;
  field: Array<fieldProps>;
  setField: (value: fieldProps[]) => void;
}

let options = ["OBJECT", "STRING", "NUMBER", "BOOLEAN"];

export default function Fields({ item, index, field, setField }: Iprops) {
  const fieldId = useId();
  const [inputName, setName] = useState(item.name);
  const [inputType, setType] = useState(item.type);
  const [inputRequire, setRequire] = useState(item.required);

  console.log("this is item --->", item);
  console.log("this id field --->", field);

  // This function helps to update Input the field
  const handleInput = (e: any, id: string) => {
    item.name = e.target.value;
    setName(e.target.value);
  };

  // This function helps to update select the field
  const handleSelect = (e: any, id: string) => {
    item.type = e.target.value;
    setType(e.target.value);
  };

  // This function helps to update required the field
  const handleRequire = (id: string) => {
    item.required = !item.required;
    setRequire(!inputRequire);
  };

  //   // This function helps to delete the field
  const handleDelete = (fields: fieldProps[], id: string) => {
    function removeItem(fields: fieldProps[], id: string) {
      return fields.filter((item) => {
        if (item.id === id) {
          return false;
        } else if (item.children) {
          item.children = removeItem(item.children, id);
        }
        return true;
      });
    }

    const newItems = removeItem(fields, id);
    setField(newItems);
  };

  //   // This function helps to add child field inside parent field field
  const handleFieldAdd = (id: string) => {
    let obj: fieldProps = {
      id: fieldId,
      name: "AddName",
      type: "OBJECT",
      required: false,
      level: item.level + 1,
      children: [],
    };
    item.children.push(obj);
    console.log(item);
  };

  return (
    <div className="field">
      <div className="parent-field">
        <div className="field-id">{index + 1}.</div>
        <div className="field-details">
          <div className="field-details-left">
            <div className="form-group">
              <input
                type="text"
                value={inputName}
                onChange={(e) => handleInput(e, item.id)}
              />
              {item.required && !inputName ? (
                <span className="invalid">Field Required!</span>
              ) : null}
            </div>
            <select
              value={inputType}
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
                  checked={item.required}
                  onChange={() => handleRequire(item.id)}
                />
                <span className="slider round"></span>
              </label>
            </div>
            {item.type === "OBJECT" ? (
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
              onClick={() => handleDelete(field, item.id)}
            >
              <i className="ri-delete-bin-line"></i>
            </div>
          </div>
        </div>
      </div>
      {item.children.length > 0 ? (
        <div className="children-field">
          {item.children.map((child, index) => {
            return (
              <Fields
                key={child.id}
                item={child}
                index={index}
                field={field}
                setField={setField}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
