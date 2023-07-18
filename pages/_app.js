// pages/_app.js

import Head from "next/head";
import ReactGA from "react-ga";
import { useEffect } from "react";
import "../styles/global.css";
import General from "@/hooks/context/General";
import Script from "next/script";

// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   // Initialize Google Analytics
  //   ReactGA.initialize("G-WEG6QER73H");
  //   ReactGA.pageview(window.location.pathname + window.location.search);
  // }, []);

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="robots" content="index" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="womenloveandrelationship is a blog that guides you on your <b>journey</b> . we provide young adult women and older women information they need to achieve a long and healthy relationship"
        />
        <meta name="robots" content="index" />
        <meta
          name="keywords"
          content="love, relationships happiness, womenloveandrelationships, women, love, love, relationships, friendships, dating, happiness, relationship blog, relationshipblog"
        />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        <link rel="icon" href="/favicon.png" />
        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        <title>Women, Love and Relationships</title>

        {/* <script strategy="afterInteractive">
         {" "}
        </script> */}
        <script src="/jquery.3.4.1.js?cd=123"></script>
        <script src="/swiper/owl.carousel.min.js"></script>
        <script src="/final/all.js"></script>
        <script src="/swiper/js/swiper-bundle.min.js"></script>
      </Head>
      <General>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-WEG6QER73H"
        ></Script>
        <Script strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date());
          gtag('consent','default', {'analytics_storage': 'granted'});
           gtag('config', 'G-WEG6QER73H',
           {
               page_path: window.location.pathname,
              }
           );

         
          `}
        </Script>
        <Component {...pageProps} />
      </General>
    </>
  );
}

export default MyApp;
