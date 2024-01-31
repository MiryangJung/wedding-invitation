import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "35px 0",
  marginTop: "30px",
});

export const title = style({
  fontSize: 18,
  fontWeight: "bold",
  lineHeight: 1.0,
  margin: "0 20px",
});

export const subTitle = style({
  fontSize: 14,
  lineHeight: 1.0,
  fontWeight: "400",
});
