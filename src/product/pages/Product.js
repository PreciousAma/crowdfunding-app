import { Progress } from "../components/Progress";
import { About } from "../components/About";
import { TitleCard } from "../components/TitleCard";
import { Banner } from "../components/Banner";
import { styled } from "@mui/material";

export const Product = () => {
  return (
    <>
      <Banner />
      <StyledDiv>
        <TitleCard />
        <Progress />
        <About />
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
