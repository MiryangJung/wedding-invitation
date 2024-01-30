import { style } from "@vanilla-extract/css";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

export const title = style({
  fontSize: 20,
  fontWeight: "600",
  lineHeight: 1.0,
  margin: "auto",
  width: "fit-content",
});

export const links = style({
  display: "flex",
  flexDirection: "row",
  gap: "12px",
  justifyContent: "center",
  flex: 1,
});

export const link = style({
  fontSize: 14,
  fontWeight: "300",
  lineHeight: 1.0,
  color: "#555555",
});

export const info = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  fontSize: 14,
  flex: 1,
  padding: "10px 20px",
});

export const icon = style({
  position: "absolute",
  top: 0,
  left: 0,
});
