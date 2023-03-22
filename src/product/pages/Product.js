import { Progress } from "../components/Progress";
import { About } from "../components/About";
import { TitleCard } from "../components/TitleCard";
import { Banner } from "../components/Banner";
import { styled } from "@mui/material";
import { NavBar } from "../../reusables/NavBar";
import { ThankYouModal } from "../../reusables/ThankYouModal";

export const Product = () => {
  return (
    <>
      <NavBar />
      <Banner />
      <StyledDiv>
        <TitleCard />
        <Progress />
        <About />
        <ThankYouModal />
      </StyledDiv>
    </>
  );
};

const StyledDiv = styled("div")({
  width: "90%",
  maxWidth: "730px",
  marginLeft: "auto",
  marginRight: "auto",
  position: "relative",
  top: "-52px",
});
