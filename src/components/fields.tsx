import React, { useState } from "react";
import uuid from "react-uuid";

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
  const [inputName, setName] = useState(item.name);
  const [inputType, setType] = useState(item.type);
  const [inputRequire, setRequire] = useState(item.required);

  // This function helps to update Input the field
  const handleInput = (e: any, id: string) => {
    function updateItem(fields: fieldProps[], id: string) {
      return fields.map((item) => {
        if (item.id === id) {
          item.name = e.target.value;
        } else if (item.children) {
          item.children = updateItem(item.children, id);
        }
        return item;
      });
    }

    const newItems = updateItem(field, id);
    setField(newItems);
    setName(e.target.value);
  };

  // This function helps to update select the field
  const handleSelect = (e: any, id: string) => {
    function updateItem(fields: fieldProps[], id: string) {
      return fields.map((item) => {
        if (item.id === id) {
          item.type = e.target.value;
        } else if (item.children) {
          item.children = updateItem(item.children, id);
        }
        return item;
      });
    }

    const newItems = updateItem(field, id);
    setField(newItems);
    setType(e.target.value);
  };

  // This function helps to update required the field
  const handleRequire = (id: string) => {
    function updateItem(fields: fieldProps[], id: string) {
      return fields.map((item) => {
        if (item.id === id) {
          item.required = !item.required;
        } else if (item.children) {
          item.children = updateItem(item.children, id);
        }
        return item;
      });
    }
    const newItems = updateItem(field, id);
    setField(newItems);
    setRequire(!inputRequire);
  };

  // This function helps to delete the field
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
      id: uuid(),
      name: "AddName",
      type: "OBJECT",
      required: false,
      level: item.level + 1,
      children: [],
    };
    function updateItem(fields: fieldProps[], id: string, obj: fieldProps) {
      return fields.map((item) => {
        if (item.id === id) {
          item.children.push(obj);
        } else if (item.children) {
          item.children = updateItem(item.children, id, obj);
        }
        return item;
      });
    }

    const newItems = updateItem(field, id, obj);
    setField(newItems);
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
