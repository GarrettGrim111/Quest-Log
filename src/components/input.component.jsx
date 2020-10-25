import React from "react";
import { Input } from "../styles";

const TextField = ({ inputValue, onChange }) => {
  return (
    <Input
      type="text"
      value={inputValue}
      onChange={onChange}
      placeholder="Type what you want to note..."
    />
  );
};

export default TextField;
