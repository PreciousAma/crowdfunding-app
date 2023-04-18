import React from "react";
import { Card } from "./Card";
import { PledgeConfirmation } from "./PledgeConfirmation";
import { styled } from "@mui/material";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
// import Dialog from "@mui/material/Dialog";

export const Pledge = ({
  title,
  amount,
  className,
  slot,
  disabled = false,
  text,
  radioValue,
  radioChecked,
  handleRadioChange,
}) => {
  return (
    <StyledCard variant="outlined" className={disabled ? "disabled-card" : ""}>
      <Radio
        checked={radioChecked}
        onChange={(e) => handleRadioChange(e)}
        value={radioValue}
        name="radio-buttons"
        className="radio"
        disabled={disabled}
      />
      <div className="card-content">
        <div className="header-container">
          <Typography variant="h6" component="h3" className="pledge-title">
            {title}
          </Typography>
          <Typography component="h3" className="pledge-amount">
            {amount}
          </Typography>
          {slot && (
            <Typography component="h3" className="slot-title">
              {slot} <span>left</span>
            </Typography>
          )}
        </div>
        <div className="text-content">
          <Typography variant="body1" component="p" className="text">
            {text}
          </Typography>
        </div>
      </div>
      {radioChecked ? (
        <div className="pledge-payment">
          <Typography>Enter your</Typography>
        </div>
      ) : null}
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  padding: 32px 28px;
  row-gap: 17px;

  &.disabled-card {
    opacity: 0.5;

    & .header-container {
      & .pledge-title:hover {
        color: #000000;
      }
    }
  }

  & .radio {
    color: #3cb3ab;
    display: inline-block;
    padding: 2px 0;
    align-items: center;
    margin-right: 24px;
  }

  & .card-content {
    display: flex;
    flex-direction: column;
    row-gap: 17px;
  }

  & .header-container {
    display: flex;

    & .pledge-title {
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
      padding-right: 17px;
    }

    & .pledge-title:hover {
      color: #3cb3ab;
    }

    & .pledge-amount {
      color: #3cb3ab;
    }
    /* display: flex; */
    /* justify-content: space-between; */

    & .slot-title {
      margin-left: auto;
      font-size: 18px;
      font-weight: 700;
      line-height: 0.5;
      display: flex;
      color: #000000;
      align-items: center;
      /* display: flex; */
      column-gap: 8px;
    }

    & .slot-title span {
      font-size: 15px;
      font-weight: 400;
      color: #7a7a7a;
    }
  }

  & .text {
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    color: #7a7a7a;
  }

  & .pledge-payment {
  }
`;
