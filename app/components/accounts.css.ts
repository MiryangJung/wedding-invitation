import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "20px",
  padding: "0 20px",
});

export const description = style({
  fontSize: 13,
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
  wordBreak: "keep-all",
});

export const block = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderRadius: "4px",
  margin: "0",
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

export const blockRow = style({
  fontSize: "14px",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "4px",
  margin: "0",
  border: "2px solid #FFBE98",
  borderTop: "none",
  padding: "8px 12px",
});

export const blockCopyButton = style({
  backgroundColor: "rgba(255, 190, 152, 0.30)",
  border: "none",
  borderRadius: "4px",
  padding: "4px 8px",
  color: "#555555",
  cursor: "pointer",
  fontSize: "12px",
  fontWeight: "600",
  outline: "none",
});
