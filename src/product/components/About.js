import React from "react";
import { Card } from "../../reusables/Card";
import { styled, Typography } from "@mui/material";
// import { Button } from "../../reusables/Button";
import { Project } from "../../reusables/Project";

export const About = () => {
  return (
    <StyledCard variant="outlined">
      <Typography variant="h4" component="h3" className="title">
        About this project
      </Typography>
      <Typography variant="subtitle1" compponent="p" className="subtitle">
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
        <p>
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </p>
      </Typography>

      <Project
        title="Bamboo Stand"
        pledges={25}
        text="You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list."
        slot={101}
        btntext="select reward"
      />
      <Project
        title="Black Edition Stand"
        pledges={75}
        text="You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included."
        slot={64}
        btntext="select reward"
      />
      <Project
        title="Mahogany Special Edition"
        pledges={200}
        text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
        personal thank you. You’ll be added to our Backer member list.
        Shipping is included."
        slot={0}
        btntext="out of stock"
        disabled
      />
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  marginTop: "24px",

  // "@media only screen and (min-width: 768px)": {
  //   display: "flex",
  // },

  "& .title": {
    fontWeight: "700",
    fontSize: "18px",
    color: "#000000",
    marginBottom: "24px",
  },

  "& .subtitle": {
    fontWeight: "400",
    fontSize: "14px",
    color: "#7A7A7A",
  },
});
