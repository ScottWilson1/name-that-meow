import React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { meowYellowLight } from "../utils/consts";

const OutlinedButton = styled(Button)(({ theme }) => ({
  textTransform: "capitalize",
  border: "2px solid black",
  color: "black",
  "&:hover": {
    backgroundColor: meowYellowLight,
    border: `2px solid black`,
  },
  "&:focus": {
    backgroundColor: meowYellowLight,
  },
}));

class AnswerButton extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <OutlinedButton variant="outlined">Porter</OutlinedButton>;
  }
}
