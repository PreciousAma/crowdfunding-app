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
          <div className="radio-button">
            <Radio
              checked={selectedValue === "a"}
              onChange={handleChange}
              value="a"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />
          </div>
          <div className="text-content">
            <Typography
              variant="h6"
              component="h3"
              className="title pledge-title"
            >
              Pledge with no reward
            </Typography>
            <Typography variant="body1" component="p" className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Typography>
          </div>
        </Card>
        <Card className="card-content" variant="outlined">
          <div className="radio-button">
            <Radio
              checked={selectedValue === "b"}
              onChange={handleChange}
              value="b"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />
          </div>
          <div className="text-content">
            <div className="header-container">
              <Typography
                variant="h6"
                component="h3"
                className="title pledge-title"
              >
                Pledge with no reward
              </Typography>

              <Typography className="slot-title">
                101 <span>left</span>
              </Typography>
            </div>
            <Typography variant="body1" component="p" className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Typography>
          </div>
        </Card>
        <Card className="card-content" variant="outlined">
          <div className="radio-button">
            <Radio
              checked={selectedValue === "c"}
              onChange={handleChange}
              value="c"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />
          </div>
          <div className="text-content">
            <div className="header-container">
              <Typography
                variant="h6"
                component="h3"
                className="title pledge-title"
              >
                Pledge with no reward
              </Typography>

              <Typography className="slot-title">
                101 <span>left</span>
              </Typography>
            </div>
            <Typography variant="body1" component="p" className="text">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </Typography>
          </div>
        </Card>
        <Card className="card-content" variant="outlined">
          <div className="radio-button">
            <Radio
              checked={selectedValue === "d"}
              onChange={handleChange}
              value="d"
              name="radio-buttons"
              className="radio"
              inputProps={{ "aria-label": "A" }}
            />
          </div>
          <div className="text-content">
            <div className="header-container">
              <Typography
                variant="h6"
                component="h3"
                className="title pledge-title"
              >
                Pledge with no reward
              </Typography>

              <Typography className="slot-title">
                101 <span>left</span>
              </Typography>
            </div>

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
  }

  & .MuiPaper-root::-webkit-scrollbar {
    display: none;
  }
`;

const StyledBox = styled("div")`
  background-color: #fff;
  border-radius: 8px;
  text-align: center;
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
    margin-bottom: 20px;
    padding: 32px 28px;
  }
  & .header-container {
    display: flex;
    justify-content: space-between;
  }

  & .slot-title {
    font-size: 32px;
    font-weight: 700;
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  & .slot-title span {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #7a7a7a;
  }

  & .radio-button {
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    & .radio {
      color: #3cb3ab;
      display: inline-block;
      padding: 0px;
      align-items: center;
    }
  }

  & .pledge-title {
    font-size: 16px;
    font-weight: 700;
    text-align: left;
    cursor: pointer;
  }
  & .pledge-title:hover {
    color: #3cb3ab;
  }

  & .text {
    font-size: 15px;
    font-weight: 400;
    text-align: left;
    color: #7a7a7a;
  }
`;
