import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "4px",
  padding: "40px 20px",
  marginTop: "200px",
  backgroundColor: "#FFF9F0",
});

export const block = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  fontSize: 14,
  lineHeight: 1.0,
  fontWeight: "400",
});

export const link = style({
  fontSize: 14,
  lineHeight: 1.0,
  fontWeight: "400",
  color: "#522A28",
  textDecoration: "underline",
});
