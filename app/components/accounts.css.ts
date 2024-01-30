import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "0 20px",
});

export const description = style({
  fontSize: 14,
  lineHeight: 1.5,
  padding: "0 20px",
  textAlign: "center",
  color: "#555555",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "4px",
  margin: "0",
});

export const block = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: "4px",
  margin: "12px 20px",
  boxSizing: "border-box",
  overflow: "hidden",
});

export const blockTitle = style({
  fontSize: "14px",
  fontWeight: "600",
  margin: "0",
  backgroundColor: "#FFBE98",
  padding: "8px 12px",
  cursor: "pointer",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const blockContent = style({
  margin: "0",
  fontSize: "14px",
  backgroundColor: "rgba(255, 190, 152, 0.20)",
  padding: "8px 12px",
});

export const blockRow = style({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4px",
  margin: "0",
});

export const blockCopyButton = style({
  backgroundColor: "white",
  border: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  color: "#555555",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "600",
  outline: "none",
});
