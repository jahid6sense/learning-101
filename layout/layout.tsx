import Head from "next/head";
import { useRouter } from 'next/router';
import React from "react";

const AppLayout = ({ children }: any) => {
    const router = useRouter()

    const outerGtagPages = [
        "/",
        "/pricing",
        "/feature",
        "/rewards",
        "/affiliate",
        "/terms",
        "/privacy",
        "/login",
        "/registration",
        "/forgot-password",
        '/how-it-works'
    ]

    const getGtagId = () => {
        if (outerGtagPages.indexOf(router.pathname) > -1) {
            return "GTM-5SG4FDG"
        }
        else {
            return "GTM-TQDHVMC"
        }
    }


    return (
        <React.Fragment>
            <Head>
                <title>Learning 101</title>
                <meta name="description" content="Learning 101" />

                <meta
                    property="og:image"
                    content="https://"
                ></meta>

                <meta property="og:type" content="website" />

                <link
                    rel="apple-touch-icon"
                    sizes="128x128"
                    href="https://"
                ></link>

                <meta name="keywords" content=""></meta>
                <meta
                    key="viewport"
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="msvalidate.01" content="69226226970AB66BA8B8B92B7127D2A3" />

                {/* Raygun Error handling tool */}
                {process.env.NODE_ENV === "production" && <script
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `
              !function(a,b,c,d,e,f,g,h){a.RaygunObject=e,a[e]=a[e]||function(){
              (a[e].o=a[e].o||[]).push(arguments)},f=b.createElement(c),g=b.getElementsByTagName(c)[0],
              f.async=1,f.src=d,g.parentNode.insertBefore(f,g),h=a.onerror,a.onerror=function(b,c,d,f,g){
              h&&h(b,c,d,f,g),g||(g=new Error(b)),a[e].q=a[e].q||[],a[e].q.push({
              e:g})}}(window,document,"script","//cdn.raygun.io/raygun4js/raygun.min.js","rg4js");

              rg4js('apiKey', 'TfIGuizqCpYalIXzuX1Hng');
              rg4js('enableCrashReporting', true);`,
                    }}
                />}

            </Head>

            <script src="https://apis.google.com/js/platform.js" async defer></script>
            {/* <!-- Google Tag Manager (noscript) --> */}
            <noscript><iframe src={`https://www.googletagmanager.com/ns.html?id=${getGtagId()}`}
                height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
            {/* <!-- End Google Tag Manager (noscript) --> */}
            {children}

        </React.Fragment>
    );
}


export default AppLayout;
