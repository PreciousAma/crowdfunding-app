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
      <div className="progressContainer">
        <ProgressStat
          title="$89,914"
          subtitle="of $100,000 backed"
          className="progressStatWrapper"
        />
        <Divider variant="middle" flexItem />
        <ProgressStat
          title="5,007"
          subtitle="total backers"
          className="progressStatWrapper"
        />
        <Divider variant="middle" flexItem />
        <ProgressStat
          title="56"
          subtitle="days left"
          className="progressStatWrapper"
        />
      </div>
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

  "& .progressContainer": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    "@media only screen and (min-width: 768px)": {
      flexDirection: "row",
      width: "100%",
      columnGap: "30px",
    },
  },

  "& .progressStatWrapper": {
    textAlign: "center",
  },

  "& .MuiDivider-root": {
    borderColor: "#979797",
    marginTop: "24px",
    marginBottom: "24px",
    width: "100%",
    maxWidth: "80px",
    alignSelf: "center",

    "@media only screen and (min-width: 768px)": {
      borderRightWidth: "thin",
      borderBottomWidth: 0,
      marginTop: 0,
      marginBottom: 0,
      // margin: "0 5% 0 7%",
      alignSelf: "stretch",
      width: "auto",
      marginLeft: "20px",
    },
  },

  "& .progressBar": {
    width: "100%",
    display: "block",
    marginTop: "32px",
    height: "12px",
    borderRadius: "4px",
    background: "#F2F2F2",
    // background: "#2F2F2F",
    // background: "#3CB3AB",
  },
  "& .MuiLinearProgress-bar": {
    borderRadius: "5px",
    background: "#3CB3AB",
  },
});
