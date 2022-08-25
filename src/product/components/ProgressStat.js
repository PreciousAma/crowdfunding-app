import { Typography, styled } from "@mui/material";

export const ProgressStat = ({ title, subtitle, className }) => {
  return (
    <StyledProgressStat className={className}>
      <Typography variant="h4" component="h3" className="title another">
        {title}
      </Typography>
      <Typography variant="subtitle1" compponent="p" className="subtitle">
        {subtitle}
      </Typography>
    </StyledProgressStat>
  );
};

const StyledProgressStat = styled("div")({
  "& .title": {
    fontWeight: "700",
  },

  "& .subtitle": {
    color: "#7A7A7A",
  },
});
