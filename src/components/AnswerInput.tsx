import React from "react";
import { Input } from "@mui/material";

const AnswerInput = (props) => {
  return (
    <Input
      onChange={props.onChange}
      onKeyDown={props.onKeyPress}
      value={props.value}
    ></Input>
  );
};

export default AnswerInput;
