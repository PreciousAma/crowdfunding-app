import * as React from "react";
// import Box from "@mui/material/Box";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Project } from "../reusables/Project";
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
          {/* <Typography variant="h4" component="h3" className="title">
            Thanks for your support!
          </Typography>
          <Typography id="modal-modal-description">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </Typography> */}

          <div className="checkmark">
            <img src={checkmark} alt="checkmark-icon" />
          </div>
          <Project
            title="Thanks for your support!"
            text="Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get an email once our campaign is completed."
            btntext="Got it!"
          />
        </StyledBox>
      </Modal>
    </div>
  );
};

const StyledBox = styled("div")({
  backgroundColor: "#fff",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  //   bgcolor: "background.paper",
  border: "2px solid #000",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,

  "& .checkmark": {
    top: "70px",
    position: "relative",
    display: "inline-block",
    // bottom: "70%",
    // top: "50%",
    left: "30%",
    // bottom: "30%",
    border: "2px solid red",
  },
});
