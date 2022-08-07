import type {AppProps} from "next/app";
import "../styles/globals.css";
import "../styles/globals.css";
import * as Sentry from "@sentry/nextjs";
import {Provider} from "react-redux";
import store from "redux/store";
import {motion} from "framer-motion";

process.env.NODE_ENV === "production" &&
  Sentry.init({
    dsn: "https://25b1e31862f445e59b2c5a10042ba5ce@o1280344.ingest.sentry.io/6483477",
    tracesSampleRate: 1.0,
  });

function MyApp({Component, pageProps, router}: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      transition={{duration: 0.5}}
    >
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </motion.div>
  );
}

export default MyApp;
// export default wrapper.withRedux(MyApp);
