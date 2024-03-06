
import { Noto_Sans_JP, Satisfy } from 'next/font/google';

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export { notojp, satisfy };