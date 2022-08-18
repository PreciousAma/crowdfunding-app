import React from "react";
import { Card } from "../../reusables/Card";
import { styled, Typography } from "@mui/material";
import { Button } from "../../reusables/Button";

export const TitleCard = () => {
  return (
    <StyledCard>
      <Typography variant="h4" component="h3" className="title">
        Mastercraft Bamboo <br />
        Monitor Riser
      </Typography>
      <Typography variant="subtitle1" compponent="p" className="subtitle">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </Typography>
      <Button text="Back this project" />
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  marginBottom: "24px",

  "& .title": {
    fontWeight: "700",
    fontSize: "20px",
    color: "#000000",
    textAlign: "center",
    marginBottom: "24px",
  },

  "& .subtitle": {
    fontWeight: "400",
    fontSize: "14px",
    textAlign: "center",
    color: "#7A7A7A",
    marginBottom: "24px",
  },

  "& .MuiButton-root": {
    maxWidth: "214px",
    fontSize: "14px",
    color: "#FFFFFF",
    padding: "15px 33px 16px 32px",
  },
});
