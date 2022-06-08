import type { AppProps } from "next/app";
import { wrapper } from "redux/store";
import "../styles/globals.css";
import * as Sentry from '@sentry/nextjs';


process.env.NODE_ENV === "production" &&
  Sentry.init({
    dsn: "https://25b1e31862f445e59b2c5a10042ba5ce@o1280344.ingest.sentry.io/6483477",
    tracesSampleRate: 1.0,
  });


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
