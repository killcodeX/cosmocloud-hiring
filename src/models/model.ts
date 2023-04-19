export interface fieldProps {
  id: string;
  name: string;
  type: string;
  required: boolean;
  level: number;
  children: Array<fieldProps>;
}

export type Type = "OBJECT" | "STRING" | "NUMBER" | "BOOLEAN";

export interface Iprops {
  item: fieldProps;
  index: number;
  field: Array<fieldProps>;
  setField: (value: fieldProps[]) => void;
}
