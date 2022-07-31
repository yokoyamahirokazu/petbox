import { AppProps } from "next/app";
import "swiper/css/bundle";

import "../styles/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
};

export default MyApp;
