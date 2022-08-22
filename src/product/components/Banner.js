import { styled } from "@mui/material";
import bannerImage from "../../images/image-hero-desktop.jpg";

export const Banner = () => {
  return <StyledBanner></StyledBanner>;
};

const StyledBanner = styled("div")({
  backgroundImage: `url(${bannerImage})`,
  paddingTop: "375px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
});
