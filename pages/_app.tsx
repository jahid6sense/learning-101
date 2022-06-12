import type { AppProps } from "next/app";
import "../styles/globals.css";
import * as Sentry from "@sentry/nextjs";
import { Provider } from "react-redux";
import store from "redux/store";
import Bugsnag from '@bugsnag/js'
import CookieHelper from "helpers/CookieHelper";
import AppLayout from "layout/layout";
// import rg4js from 'raygun4js';
// var rg4js = require('raygun4js');


//Sentry error handle tool
process.env.NODE_ENV === "production" &&
  Sentry.init({
    dsn: "https://25b1e31862f445e59b2c5a10042ba5ce@o1280344.ingest.sentry.io/6483477",
    tracesSampleRate: 1.0,
  });


//Bugsnag error handle tool
process.env.NODE_ENV === "production" && Bugsnag.start({ apiKey: '58d5f4354679ea28acdc411c88525caf' })
// Bugsnag.notify(new Error('Test error'))


//Raygun error handle tool
// rg4js('enableCrashReporting', true);
// rg4js('apiKey', 'TfIGuizqCpYalIXzuX1Hng');
// throw new Error('Congratulations! Raygun is set up and capturing errors');
// rg4js('setUser', {
//   identifier: '662607004',
//   isAnonymous: false,
//   email: 'ronald@raygun.com',
//   firstName: 'Ronald',
//   fullName: CookieHelper.getCookieFromBrowser('name'),
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
