import { Typography } from "@mui/material";
import React from "react";

const DottedLine = () => {
  const lines = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Typography>
      {lines.map((line) => (
        <Typography
          sx={{
            height: "2px",
            width: "10px",
            color: "#fff",
            marginBottom: "1px",
          }}
        ></Typography>
      ))}
    </Typography>
  );
};

export default DottedLine;
