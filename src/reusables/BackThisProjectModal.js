import React, { useState } from "react";
import { Card } from "./Card";
import Radio from "@mui/material/Radio";

import Box from "@mui/material/Box";
import { styled } from "@mui/material";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import { Button } from "../reusables/Button";

export const BackThisProjectModal = ({ show, onClose }) => {
  const [selectedValue, setSelectedValue] = useState("a");

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

        <Card className="card-content" variant="outlined">
          <div className="header-container">
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />

            <Typography variant="h6" component="h3" className="pledge-title">
              Pledge with no reward
            </Typography>
          </div>
          <div className="text-content">
            <Typography variant="body1" component="p" className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Typography>
          </div>
        </Card>
        <Card className="card-content" variant="outlined">
          <div className="header-container">
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />
            <Typography variant="h6" component="h3" className="pledge-title">
              Pledge with no reward
            </Typography>
            <Typography component="h3" className="pledge-amount">
              Pledge $25 or more
            </Typography>
            <Typography component="h3" className="slot-title">
              101 <span>left</span>
            </Typography>
          </div>
          <div className="text-content">
            <Typography variant="body1" component="p" className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Typography>
          </div>
        </Card>
        <Card className="card-content" variant="outlined">
          <div className="header-container">
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />
            <Typography variant="h6" component="h3" className="pledge-title">
              Pledge with no reward
            </Typography>

            <Typography component="h3" className="slot-title">
              101 <span>left</span>
            </Typography>
          </div>
          <div className="text-content">
            <Typography variant="body1" component="p" className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Typography>
          </div>
        </Card>
        <Card className="card-content" variant="outlined">
          <div className="header-container">
            <Radio
              checked={selectedValue === "d"}
              onChange={handleChange}
              value="d"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />
            <Typography variant="h6" component="h3" className="pledge-title">
              Pledge with no reward
            </Typography>

            <Typography component="h3" className="slot-title">
              101 <span>left</span>
            </Typography>
          </div>
          <div className="text-content">
            <Typography variant="body1" component="p" className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Typography>
          </div>
        </Card>
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
  }

  & .subtitle {
    font-size: 16px;
    text-align: left;
  }

  & .card-content {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding: 32px 28px;
    row-gap: 17px;
  }

  & .header-container {
    display: flex;

    & .radio {
      color: #3cb3ab;
      display: inline-block;
      padding: 0px;
      align-items: center;
      margin-right: 24px;
    }

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
      align-items: center;
      /* display: flex; */
      column-gap: 8px;
    }

    & .slot-title span {
      font-size: 15px;
      font-weight: 400;
      /* color: #7a7a7a; */
    }
  }

  & .text {
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    color: #7a7a7a;
  }
`;
