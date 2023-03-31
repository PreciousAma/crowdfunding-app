import React from "react";
import { Button as muiButton, styled } from "@mui/material";

export const Button = ({ children, ...rest }) => {
  return (
    <StyledButton variant="contained" {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled(muiButton)({
  borderRadius: "33.5px",
  // width: "100%",
  textTransform: "capitalize",
  background: "#3CB3AB",
});
