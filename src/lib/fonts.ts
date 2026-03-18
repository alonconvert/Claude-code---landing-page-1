import { Assistant } from "next/font/google";

export const assistant = Assistant({
  subsets: ["hebrew", "latin"],
  display: "swap",
  variable: "--font-assistant",
  weight: ["300", "400", "500", "700", "800"],
});
