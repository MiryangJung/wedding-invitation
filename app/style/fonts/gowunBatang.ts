import localFont from "next/font/local";

export const gowunBatang = localFont({
  src: [
    {
      path: "./GowunBatang-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./GowunBatang-Bold.ttf",
      weight: "bold",
      style: "normal",
    },
  ],
});
