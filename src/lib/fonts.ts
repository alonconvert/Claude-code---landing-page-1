import localFont from "next/font/local";

export const polin = localFont({
  src: [
    { path: "../../public/fonts/Polin-Variable.woff2", style: "normal" },
  ],
  display: "swap",
  variable: "--font-polin",
  weight: "100 900",
});

export const assistant = localFont({
  src: [
    {
      path: "../../public/fonts/Assistant-hebrew.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Assistant-latin-ext.woff2",
      style: "normal",
    },
    {
      path: "../../public/fonts/Assistant-latin.woff2",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-assistant",
});
