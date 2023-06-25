// pages/_app.js

import Head from "next/head";
import "../styles/global.css";

// import { ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="women love and relationship is a blog that guides you on your journey. we provide young adult women and older women information they need to achieve a long and healthy relationship"
        />
        <meta name="keywords" content="love, relationship happiness" />
        <link rel="stylesheet" href="/final/fontawesome.min.css" />
        <link rel="stylesheet" href="/swiper/owl.carousel.min.css" />
        <link rel="stylesheet" href="/swiper/owl.theme.default.css" />
        <link rel="stylesheet" href="/swiper/css/swiper-bundle.min.css" />
        {/* <link rel="stylesheet" href="./final/index.min.css" /> */}
        <title>WomenLoveAndRelationships😃</title>

        <script src="/jquery.3.4.1.js?cd=123"></script>
        <script src="/swiper/owl.carousel.min.js"></script>
        <script src="/final/all.js"></script>
        <script src="/swiper/js/swiper-bundle.min.js"></script>
      </Head>

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
