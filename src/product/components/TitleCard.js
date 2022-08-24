import React from "react";
import { Card } from "../../reusables/Card";
import { ReactComponent as BookmarkIcon } from "../../images/icon-bookmark.svg";
import { styled, Typography, SvgIcon } from "@mui/material";
import { Button } from "../../reusables/Button";
import logo from "../../images/logo-mastercraft.svg";

export const TitleCard = () => {
  return (
    <StyledCard variant="outlined">
      <div className="logo">
        <img src={logo} alt="Mastercraft logo" />
      </div>

      <Typography variant="h4" component="h3" className="title">
        Mastercraft Bambo Monitor Riser
      </Typography>
      <Typography variant="subtitle1" compponent="p" className="subtitle">
        A beautifully handcrafted monitor stand to reduce neck and eye strain.
      </Typography>
      <div className="buttonGroup">
        <Button text="Back this project" />
        <Button
          startIcon={<SvgIcon component={BookmarkIcon} viewBox="0 0 56 56" />}
          text="Bookmark"
          className="buttonIcon"
          disabled
        />
      </div>
    </StyledCard>
  );
};

const StyledCard = styled(Card)({
  marginBottom: "24px",
  // position: "relative",

  "& .logo": {
    position: "absolute",
    top: "-25px",
    zIndex: 1000,
    left: "50%",
    marginLeft: "-30px",
    // marginRight: "auto",
  },

  "& .title": {
    fontWeight: "700",
    fontSize: "20px",
    color: "#000000",
    textAlign: "center",
    marginBottom: "24px",
  },

  "& .subtitle": {
    fontWeight: "400",
    fontSize: "14px",
    textAlign: "center",
    color: "#7A7A7A",
    marginBottom: "24px",
  },

  "& .buttonGroup": {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    columnGap: "20px",
    rowGap: "15px",
  },

  "& .MuiButton-root": {
    fontSize: "16px",
    color: "#FFFFFF",
    padding: "15px 33px",

    "& .MuiSvgIcon-root": {
      fontSize: "56px",
    },

    "&.buttonIcon": {
      paddingLeft: "72px",
    },

    "& .MuiButton-startIcon": {
      position: "absolute",
      left: 0,
    },
  },
});
