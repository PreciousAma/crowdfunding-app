import React from "react";
import { Card } from "../../reusables/Card";
import { LinearProgress, styled, Divider } from "@mui/material";
import { ProgressStat } from "./ProgressStat";

export const Progress = () => {
  //<Card key={1} id="firstId">First Card</Card>
  //React.createElement(Card, { id: 'firstId',  key: 1 }, 'First card')

  //<Card key={2} id="secondId" text="First Card" />
  //React.createElement(Card, { id: 'secondId', key: 2, text: 'Second card' })

  return (
    <StyledCard variant="outlined">
      <ProgressStat
        title="$89,914"
        subtitle="of $100,000 backed"
        className="progressStatWrapper"
      />
      <Divider variant="middle" />
      <ProgressStat
        title="5,007"
        subtitle="total backers"
        className="progressStatWrapper"
      />
      <Divider variant="middle" />
      <ProgressStat
        title="56"
        subtitle="days left"
        className="progressStatWrapper"
      />
      <LinearProgress
        variant="determinate"
        value={85}
        className="progressBar"
      />
    </StyledCard>
  );
};
const StyledCard = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .progressStatWrapper": {
    textAlign: "center",
  },

  "& .MuiDivider-root": {
    borderColor: "#979797",
    marginTop: "24px",
    marginBottom: "24px",
    width: "100%",
    maxWidth: "80px",
    textAlign: "center",
  },

  "& .progressBar": {
    width: "100%",
    display: "block",
    marginTop: "10px",
    height: "12px",
    borderRadius: "4px",
  },

  "& .MuiLinearProgress-bar": {
    borderRadius: "5px",
  },
});
