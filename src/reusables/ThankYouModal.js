import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Dialog from "@mui/material/Dialog";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "../reusables/Button";
// import { Project } from "../reusables/Project";
import checkmark from "../images/icon-checkmark.svg";

export const ThankYouModal = ({ show, onClose }) => {
  return (
    <StyledDialog open={show} onClose={() => onClose()}>
      <StyledBox>
        <div className="checkmark">
          <img src={checkmark} alt="checkmark-icon" />
        </div>
        <Typography variant="h4" component="h3" className="title">
          Thanks for your support!
        </Typography>
        <Typography variant="subtitle1" compponent="p" className="subtitle">
          Your pledge brings us one step closer to sharing Mastercraft Bamboo
          Monitor Riser worldwide. You will get an email once our campaign is
          completed.
        </Typography>
        <Button className="btntext" onClick={() => onClose()}>
          Got it!
        </Button>
      </StyledBox>
    </StyledDialog>
  );
};

const StyledDialog = styled(Dialog)`
  padding: 48px;
  border: 1px solid red;
  position: absolute;
`;

const StyledBox = styled("div")`
  background-color: #fff;
  /* position: absolute; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: "center";
  border: 1px solid red;
  width: 400;

  //   bgcolor: "background.paper",
  border-radius: 5px;
  box-shadow: 24;
  padding: 48px;

  & .checkmark {
    align-items: center;
    position: relative;
    display: inline-block;
    margin: auto;
    justify-content: center;
    // border: "2px solid red",
  }

  & .title {
    font-weight: 700;
    font-size: 18px;
    color: #000000;
    margin-bottom: 24px;
  }

  & .subtitle {
    font-weight: 400;
    font-size: 14px;
    color: #7a7a7a;
  }

  & .btntext {
    padding: 10px 30px;
    background: #147a73;
    margin-top: 15px;
  }
`;
