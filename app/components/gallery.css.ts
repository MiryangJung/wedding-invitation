import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
});

export const description = style({
  fontSize: 14,
  lineHeight: 1.5,
  margin: "0 20px",
  textAlign: "center",
});

export const imageContainer = style({
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridTemplateRows: "auto auto auto",
  gap: "5px",
});

export const image = style({
  width: "100%",
  height: "auto",
  objectFit: "cover",
});
