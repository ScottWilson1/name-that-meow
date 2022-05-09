import { Typography } from "@mui/material";
import React from "react";

const Result = ({ result }) => {
  if (result === "correct") {
    return <Typography>Correct!</Typography>;
  } else if (result === "wrong") {
    return <Typography>Wrong</Typography>;
  } else {
    return <Typography></Typography>;
  }
};

export default Result;
