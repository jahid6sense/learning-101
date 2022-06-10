import type { AppProps } from "next/app";
import "../styles/globals.css";
// @ts-ignore
import * as Sentry from '@sentry/nextjs';
import { Provider } from "react-redux";
import store from "redux/store";


process.env.NODE_ENV === "production" &&
  Sentry.init({
    dsn: "https://25b1e31862f445e59b2c5a10042ba5ce@o1280344.ingest.sentry.io/6483477",
    tracesSampleRate: 1.0,
  });


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider >
  )
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
