import React from "react";
import { Input } from "../styles";

const TextField = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="Type what you want to note..."
    />
  );
};

export default TextField;
