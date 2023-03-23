import * as React from "react";
// import Box from "@mui/material/Box";
import { styled } from "@mui/material";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "../reusables/Button";
// import { Project } from "../reusables/Project";
import checkmark from "../images/icon-checkmark.svg";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

export const ThankYouModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
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
          <Button text="Got it!" className="btntext" />
        </StyledBox>
      </Modal>
    </div>
  );
};

const StyledBox = styled("div")({
  backgroundColor: "#fff",
  position: "absolute",
  textAlign: "center",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  borderRadius: "5px",
  boxShadow: 24,
  padding: "48px",
  p: 4,

  "& .checkmark": {
    alignItems: "center",
    position: "relative",
    display: "inline-block",
    margin: "auto",
    justifyContent: "center",
    // border: "2px solid red",
  },

  "& .title": {
    fontWeight: "700",
    fontSize: "18px",
    color: "#000000",
    marginBottom: "24px",
  },

  "& .subtitle": {
    fontWeight: "400",
    fontSize: "14px",
    color: "#7A7A7A",
  },

  "& .btntext": {
    padding: "10px 30px",
    background: "#147A73",
    marginTop: "15px",
  },
});
