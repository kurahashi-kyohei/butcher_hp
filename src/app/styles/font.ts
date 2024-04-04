import { Noto_Sans_JP, Satisfy, Noto_Serif_JP, Zen_Old_Mincho, Noto_Serif } from 'next/font/google';

const notojp = Noto_Sans_JP({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif ({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

const satisfy = Satisfy({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

const mincho = Zen_Old_Mincho({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export { notojp, satisfy, notoSerif, mincho };