import React, { useState } from "react";
import { Card } from "../../reusables/Card";
import { ReactComponent as BookmarkIcon } from "../../images/icon-bookmark.svg";
import { styled, Typography, SvgIcon, IconButton } from "@mui/material";
import { Button } from "../../reusables/Button";
import logo from "../../images/logo-mastercraft.svg";
import { BackThisProjectModal } from "../../reusables/BackThisProjectModal";
import { ThankYouModal } from "../../reusables/ThankYouModal";

export const TitleCard = () => {
  const [show, setShow] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleThankYouOpen = () => {
    handleClose();
    setShowThankYou(true);
  };
  const handleThankYouClose = () => setShowThankYou(false);

  return (
    <>
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
          <Button onClick={() => handleOpen()}>Back this project</Button>
          <Button
            startIcon={<SvgIcon component={BookmarkIcon} viewBox="0 0 56 56" />}
            className="buttonIcon"
            disabled
          >
            Bookmark
          </Button>
          <IconButton className="bookmarkButton">
            <SvgIcon component={BookmarkIcon} viewBox="0 0 56 56" />
          </IconButton>
        </div>
      </StyledCard>
      {show && (
        <BackThisProjectModal
          show={show}
          onClose={handleClose}
          onShowConfirmation={handleThankYouOpen}
        />
      )}

      {showThankYou && (
        <ThankYouModal show={showThankYou} onClose={handleThankYouClose} />
      )}
    </>
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
    alignItems: "center",
  },

  "& .bookmarkButton": {
    fontSize: "56px",

    "& .MuiSvgIcon-root": {
      fontSize: "inherit",
    },

    "@media only screen and (min-width: 768px)": {
      display: "none",
    },
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
      display: "none",

      "@media only screen and (min-width: 768px)": {
        display: "inline-flex",
      },
    },

    "& .MuiButton-startIcon": {
      position: "absolute",
      left: 0,
    },
  },
});
