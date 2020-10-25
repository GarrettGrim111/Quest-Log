import styled from "styled-components";

const Input = ({ placeholder, value, onChange, type }) => {
  return (
    <CustomInput
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      type={type}
    />
  );
};

const CustomInput = styled.input``;

export default Input;
