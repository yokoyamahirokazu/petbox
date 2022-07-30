import { AppProps } from "next/app";
import "swiper/css/bundle";

import "../styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <main>
        <Component {...pageProps} />
      </main>
    </>
  );
};

export default MyApp;
