import { Card } from "./Card";
import { styled, Typography } from "@mui/material";
import { Button } from "../reusables/Button";

export const Project = ({ title, pledges, text, slot, btntext, disabled }) => {
  return (
    <StyledCard className={disabled ? "disabled-card" : ""} variant="outlined">
      <div className="titleContainer">
        <Typography variant="h4" component="h3" className="title title2">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          compponent="h4"
          className="subtitle subtitle2"
        >
          Pledge ${pledges} or more
        </Typography>
      </div>
      <Typography variant="subtitle1" compponent="p" className="subtitle text2">
        {text}
      </Typography>
      <div className="metaWrapper">
        <Typography variant="h4" component="h3" className="title title3">
          {slot} <span>left</span>
        </Typography>
        <Button className="btnCard">{btntext}</Button>
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(Card)`
  margin-top: 24px;

  &.disabled-card {
    opacity: 0.5;

    & .muibutton-root {
      background: 979797;
    }
  }

  & .metawrapper {
    margin-top: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & .titlecontainer {
    @media only screen and (min-width: 768px) {
      display: flex;
      justify-content: space-between;
    }
  }

  & .title2 {
    font-size: 14px;
    margin-bottom: 8px;
  }

  & .subtitle2 {
    color: #3cb3ab;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 24px;
  }

  & .title3 {
    font-size: 32px;
    display: flex;
    align-items: center;
    column-gap: 8px;
  }

  & .title3 span {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: #7a7a7a;
  }

  & .muibutton-root {
    max-width: 157px;
    font-size: 14px;
    color: #ffffff;
    padding: 14px 33px 14px 33px;
  }
`;
