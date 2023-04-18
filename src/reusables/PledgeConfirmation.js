import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

export const PledgeConfirmation = () => {
  return (
    <StyledDiv>
      <Typography className="input">Enter your pledge</Typography>

      <div className="input-pledge">
        <TextField
          className="amount-input"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <button className="cont-btn">Continue</button>
      </div>
    </StyledDiv>
  );
};

const StyledDiv = styled("div")`
  align-items: center;
  padding: 24px 28px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;

  & .input {
    font-weight: 400;
    font-size: 15px;
    color: #7a7a7a;
  }

  & .input-pledge {
    display: flex;
    align-items: center;
  }

  & .amount-input {
    font-weight: 700;
    font-size: 14px;
    margin-right: 16px;
    & .MuiOutlinedInput-notchedOutline {
      border: 1px solid #3cb3ab;
      border-radius: 33.5px;

    & .MuiOutlinedInput-input {
      font-weight: 700;
      font-size: 14px;
      caret-color: #3cb3ab;
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
