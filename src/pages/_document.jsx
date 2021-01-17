import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static getInitialProps(ctx) {
    const { pathname } = ctx;
    const lang = ctx.query.lang === 'fi' ? 'fi' : 'en';

    const sheet = new ServerStyleSheet();

    const page = ctx.renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags, lang };
  }

  render() {
    const { lang } = this.props;
    return (
      <Html lang={lang}>
        <Head>
          {this.props.styleTags}
          <link rel="manifest" href="/manifest.webmanifest" />

          <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-icon-57x57.png" />
          <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-icon-60x60.png" />
          <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-icon-72x72.png" />
          <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-icon-76x76.png" />
          <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-icon-114x114.png" />
          <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-icon-120x120.png" />
          <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-icon-144x144.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-icon-152x152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-icon-180x180.png" />
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/icons/android-icon-192x192.png"
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="96x96" href="/icons/favicon-96x96.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="msapplication-TileImage" content="/icons/ms-icon-144x144.png" />
          <meta name="theme-color" content="#ffffff"></meta>

          <script
            dangerouslySetInnerHTML={{
              __html: `
              // REFERENCE: https://stackoverflow.com/questions/60173853/how-to-set-the-google-analytics-cookie-only-after-another-consent-cookie-is-set

              window.addEventListener('load', function(){
                // request gtag cookies when consent has been given before
                if (window.localStorage.getItem('accepted') === "true") {
                  setCookies();
                }
              });

              // when localStorage gets updated, update cookie policy
              window.addEventListener('storage', function() {
                var cookiesAccepted = window.localStorage.getItem('accepted');
                if (cookiesAccepted === "true") {
                  setCookies();
                } 
              });

              //it is absolutely crucial to define gtag in the global scope
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}', {'anonymize_ip': true});

              function setCookies() {
                var s = document.createElement('script');
                s.type = "text/javascript";
                s.async = "true";
                s.src = "https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACKING_ID}";
                var x = document.getElementsByTagName('script')[0];
                x.parentNode.insertBefore(s, x);
              }
                  `}}
          />
        </Head>
        <body>
          <Main />
          <div id="portal" />
          <NextScript />

        </body>
      </Html>
    );
  }
}
