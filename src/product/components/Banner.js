import { styled } from "@mui/material";
import bannerImage from "../../images/image-hero-desktop.jpg";
import bannerImageMobile from "../../images/image-hero-mobile.jpg";

export const Banner = () => {
  return <StyledBanner></StyledBanner>;
};

const StyledBanner = styled("div")({
  backgroundImage: `url(${bannerImageMobile})`,
  paddingTop: "400px",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",

  "@media only screen and (min-width: 768px)": {
    backgroundImage: `url(${bannerImage})`,
  },
});
