import * as React from "react";
import { Card } from "./Card";

import Box from "@mui/material/Box";
import { styled } from "@mui/material";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Button } from "../reusables/Button";

export const BackThisProjectModal = () => {
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
          <Typography variant="h4" component="h3" className="title">
            Back This Project
          </Typography>
          <Typography variant="subtitle1" compponent="p" className="subtitle">
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </Typography>
          <Card>
            <div>
              <Typography
                variant="h6"
                component="h3"
                className="title pledge-title"
              >
                Pledge with no reward
                <p className="text">
                  Choose to support us without a reward if you simply believe in
                  our project. As a backer, you will be signed up to receive
                  product updates via email.
                </p>
              </Typography>
            </div>
          </Card>
          <div>
            <Typography
              variant="h6"
              component="h3"
              className="title pledge-title"
            >
              Pledge with no reward
              <p className="text">
                Choose to support us without a reward if you simply believe in
                our project. As a backer, you will be signed up to receive
                product updates via email.
              </p>
            </Typography>
          </div>
          <Button text="Got it!" className="btntext" />
        </StyledBox>
      </Modal>
    </div>
  );
};

const StyledBox = styled("div")`
    backgroundColor: #fff;
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    borderRadius: 5px;
    boxShadow: 24,
    padding: 48px;
    p: 4,
`;
