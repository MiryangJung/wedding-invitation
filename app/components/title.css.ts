import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "20px 0",
});

export const title = style({
  fontSize: 18,
  fontWeight: "600",
  lineHeight: 1.0,
  margin: "0 20px",
});

export const subTitle = style({
  fontSize: 14,
  fontWeight: "200",
  lineHeight: 1.0,
});
