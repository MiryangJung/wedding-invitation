import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const imageContainer = style({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "4px",
});

export const title = style({
  fontSize: 20,
  fontWeight: "600",
  lineHeight: 1.0,
  margin: "0 20px",
  textAlign: "center",
});

export const image = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  selectors: {
    "&:nth-child(1)": {
      gridRow: "1 / span 2",
    },
    "&:nth-child(6)": {
      gridRow: "1 / span 2",
    },
  },
});
