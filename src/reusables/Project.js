import { Card } from "./Card";
import { styled, Typography } from "@mui/material";
import { Button } from "../reusables/Button";

export const Project = ({
  title,
  subtitle,
  text,
  meta1,
  meta2,
  btntext,
  disabled,
}) => {
  return (
    <StyledCard className={disabled ? "disabledCard" : ""}>
      <div className="titleContainer">
        <Typography variant="h4" component="h3" className="title title2">
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          compponent="h4"
          className="subtitle subtitle2"
        >
          {subtitle}
        </Typography>
      </div>
      <Typography variant="subtitle1" compponent="p" className="subtitle text2">
        {text}
      </Typography>
      <div className="metaWrapper">
        <Typography variant="h4" component="h3" className="title title3">
          {meta1} <span>{meta2}</span>
        </Typography>
        <Button text={btntext} className="btnCard" />
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  marginTop: "24px",

  "&.disabledCard": {
    opacity: "0.6",
    "& .MuiButton-root": {
      background: "#979797",
    },
  },
  "& .metaWrapper": {
    marginTop: "24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
