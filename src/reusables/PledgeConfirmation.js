import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import { ThankYouModal } from "./ThankYouModal";

export const PledgeConfirmation = () => {
  const [show, setShow] = useState(false);
  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <StyledDiv>
      <Typography className="title">Enter your pledge</Typography>

      <div className="input-pledge">
        <TextField
          className="amount-input"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <button onClick={() => handleOpen()} className="cont-btn">
          Continue
        </button>
      </div>
      <ThankYouModal show={show} onClose={handleClose} />
    </StyledDiv>
  );
};

const StyledDiv = styled("div")`
  align-items: center;
  padding: 34px 28px;
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #0000001f;

  & .title {
    font-weight: 400;
    font-size: 15px;
    color: #7a7a7a;
  }

  & .input-pledge {
    display: flex;
    align-items: center;
    /* padding: 15px 24px; */
  }

  & .amount-input {
    font-weight: 700;
    font-size: 14px;
    margin-right: 16px;
    max-width: 100px;

    & .MuiOutlinedInput-root {
      & .MuiOutlinedInput-input {
        font-weight: 700;
        font-size: 14px;
        caret-color: #3cb3ab;
        padding: 15px 24px;
      }

      & .MuiOutlinedInput-notchedOutline {
        border: 1px solid #3cb3ab;
        border-radius: 33.5px;
      }
    }
  }

  & .cont-btn {
    background: #147a73;
    border-radius: 33.5px;
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
    padding: 15px 24px;
    border: none;
  }
`;
