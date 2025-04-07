import type { AppProps } from "next/app";

// Import the slick carousel CSS here
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Also include Plasmic’s base CSS if it's not already globally included
import "@plasmicapp/react-web/lib/plasmic.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}