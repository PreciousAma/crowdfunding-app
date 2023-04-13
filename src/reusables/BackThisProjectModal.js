import React, { useState } from "react";
import { Pledge } from "./Pledge";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";

export const BackThisProjectModal = ({ show, onClose }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <StyledDialog open={show} onClose={onClose}>
      <StyledBox className="box">
        <Typography variant="h4" component="h3" className="title">
          Back This Project
        </Typography>
        <Typography variant="subtitle1" compponent="p" className="subtitle">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </Typography>

        <Pledge
          title="Pledge with no reward"
          text="Choose to support us without a reward if you simply believe in our
                project. As a backer, you will be signed up to receive product
                updates via email."
          radioValue="a"
          radioChecked={selectedValue === "a"}
          handleRadioChange={(e) => handleChange(e)}
        />

        <Pledge
          title="Bamboo Stand"
          amount="Pledge $25 or more"
          slot="101"
          text="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
          radioValue="b"
          radioChecked={selectedValue === "b"}
          handleRadioChange={(e) => handleChange(e)}
        />

        <Pledge
          title="Black Stand Edition"
          amount="Pledge $75 or more"
          slot="64"
          text="You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
          radioValue="c"
          radioChecked={selectedValue === "c"}
          handleRadioChange={(e) => handleChange(e)}
        />
        <Pledge
          title="Mahogany Special Edition"
          amount="Pledge $200 or more"
          slot="0"
          text="You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list.  Shipping is included."
          radioValue="d"
          radioChecked={selectedValue === "d"}
          handleRadioChange={(e) => handleChange(e)}
          disabled
        />
      </StyledBox>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  & .MuiPaper-root {
    scrollbar-width: none;
    width: 100%;
    max-width: 730px;
    border: 1px solid red;
  }

  & .MuiPaper-root::-webkit-scrollbar {
    display: none;
  }
`;

const StyledBox = styled("div")`
  background-color: #fff;
  border-radius: 8px;
  width: 400;
  border-radius: 5px;
  box-shadow: 24;
  padding: 48px;

  & .title {
    font-size: 24px;
    font-weight: 700;
    text-align: left;
    margin-bottom: 16px;
  }

  & .subtitle {
    font-size: 16px;
    text-align: left;
    margin-bottom: 32px;
    color: #7a7a7a;
  }
`;
