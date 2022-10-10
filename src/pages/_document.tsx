import { Html, Head, Main, NextScript } from "next/document";

const MyDocument = () => {
  const url = "";
  const title = "sino.yoga";
  const description = "sino.yoga page";

  return (
    <Html lang="ja-JP">
      <Head>
        <meta name="description" content={description} />
        <meta name="theme-color" content="#333" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content={url} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content={title} />
        <meta property="og:image" content={`${url}/ogp.png`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka:wght@300;500&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="http://fonts.cdnfonts.com/css/bahnschrift"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
