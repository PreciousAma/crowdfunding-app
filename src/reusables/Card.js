import { Card as MuiCard, styled } from "@mui/material";
import React from "react";

export const Card = ({ children, ...rest }) => {
  return <StyledMuiCard {...rest}>{children}</StyledMuiCard>;
};

const StyledMuiCard = styled(MuiCard)({
  padding: "48px",
  borderColor: "1px solid rgba(0, 0, 0, 0.0497193)",
  borderRadius: "8px",
  alignItems: "space-between",
});
