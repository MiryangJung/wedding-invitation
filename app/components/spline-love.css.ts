import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100%",
  aspectRatio: "auto 658 / 333",
  background: "RGB(241, 206, 186)",
  position: "relative",
});

export const loading = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: 16,
  fontWeight: "300",
  color: "white",
  position: "absolute",
  top: "45%",
  left: "45%",
});
